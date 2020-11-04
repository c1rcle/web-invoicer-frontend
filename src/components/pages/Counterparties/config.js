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

  const downloadDetails = (setRowData, nip) => () => {
    handleAction(getCounterpartyDetails(nip), result => {
      const { name, street, propertyNumber, apartmentNumber, postalCode, city } = result;
      setRowData({
        name: name,
        nip: nip,
        address: `${street} ${propertyNumber}${apartmentNumber && `/${apartmentNumber}`}`,
        postalCode: postalCode,
        city: city
      });
    });
  };

  const columns = [
    {
      title: t('counterparties.name'),
      field: 'name',
      width: 165,
      validate: row => required(row.name)
    },
    {
      title: t('counterparties.nip'),
      field: 'nip',
      width: 165,
      validate: row => validate('validNip', row.nip, true),
      editComponent: props => (
        <div className={classes.nipEditContainer}>
          <MTableEditField {...props} />
          <IconButton
            onClick={downloadDetails(props.onRowDataChange, props.value)}
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
      width: 165,
      validate: row => required(row.address)
    },
    {
      title: t('counterparties.postalCode'),
      field: 'postalCode',
      width: 165,
      validate: row => validate('postalCode', row.postalCode, true)
    },
    {
      title: t('counterparties.city'),
      field: 'city',
      width: 165,
      validate: row => required(row.city)
    },
    {
      title: t('counterparties.phoneNumber'),
      field: 'phoneNumber',
      width: 165,
      validate: row => validate('phoneNumber', row.phoneNumber, false)
    }
  ];

  const editableConfig = {
    createAction: createCounterparty,
    updateAction: updateCounterparty,
    deleteAction: deleteCounterparty,
    idKey: 'counterpartyId'
  };

  return { columns, editableConfig };
};

export default useConfig;
