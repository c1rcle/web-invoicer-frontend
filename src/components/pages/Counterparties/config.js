import React from 'react';
import { useTranslation } from 'react-i18next';
import { MTableEditField } from 'material-table';
import { IconButton } from '@material-ui/core';
import { CloudDownload } from '@material-ui/icons';
import {
  createCounterparty,
  deleteCounterparty,
  getCounterpartyDetails,
  updateCounterparty
} from '../../../slices/counterpartySlice';
import useValidation from '../../../hooks/useValidation';
import useHandleAction from '../../../hooks/useHandleAction';
import useStyles from './styles';

const useConfig = () => {
  const { t } = useTranslation();

  const { required, validate } = useValidation();

  const handleAction = useHandleAction();

  const classes = useStyles();

  const downloadDetails = ({ rowData, onRowDataChange, value }) => () => {
    handleAction({
      action: getCounterpartyDetails(value),
      onSuccess: result => {
        const { street, propertyNumber, apartmentNumber, ...rest } = result;
        onRowDataChange({
          ...rowData,
          address: `${street} ${propertyNumber}${apartmentNumber && `/${apartmentNumber}`}`,
          nip: value,
          ...rest
        });
      }
    });
  };

  const columns = [
    {
      title: t('counterparties.name'),
      field: 'name',
      width: 190,
      validate: row => required(row.name)
    },
    {
      title: t('counterparties.nip'),
      field: 'nip',
      width: 190,
      validate: row => validate('validNip', row.nip, true),
      editComponent: props => (
        <div className={classes.nipEditContainer}>
          <MTableEditField {...props} />
          <IconButton
            onClick={downloadDetails(props)}
            color='primary'
            disabled={Boolean(props.error)}
            className={classes.nipEditButton}>
            <CloudDownload />
          </IconButton>
        </div>
      )
    },
    {
      title: t('counterparties.address'),
      field: 'address',
      width: 190,
      validate: row => required(row.address)
    },
    {
      title: t('counterparties.postalCode'),
      field: 'postalCode',
      width: 190,
      validate: row => validate('postalCode', row.postalCode, true)
    },
    {
      title: t('counterparties.city'),
      field: 'city',
      width: 190,
      validate: row => required(row.city)
    },
    {
      title: t('counterparties.phoneNumber'),
      field: 'phoneNumber',
      width: 190,
      validate: row => validate('phoneNumber', row.phoneNumber, false)
    }
  ];

  const editableConfig = {
    createAction: createCounterparty,
    updateAction: updateCounterparty,
    deleteAction: deleteCounterparty
  };

  return { columns, editableConfig };
};

export default useConfig;
