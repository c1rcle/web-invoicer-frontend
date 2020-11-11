import React, { forwardRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AddCircle, Delete, Edit } from '@material-ui/icons';
import useDropdownMenu from '../../../../hooks/useDropdownMenu';
import useDialog from '../../../../hooks/useDialog';

const useConfig = () => {
  const { t } = useTranslation();

  const history = useHistory();

  const dialog = useDialog();

  const menu = useDropdownMenu();

  const columns = [
    {
      title: t('invoices.date'),
      field: 'date',
      width: 190
    },
    {
      title: t('invoices.number'),
      field: 'number',
      width: 190
    },
    {
      title: t('invoices.counterparty'),
      field: 'counterparty',
      width: 190
    },
    {
      title: t('invoices.netPrice'),
      field: 'netPrice',
      width: 190
    },
    {
      title: t('invoices.grossPrice'),
      field: 'grossPrice',
      width: 190
    },
    {
      title: t('invoices.issuer'),
      field: 'issuer',
      width: 190
    }
  ];

  const getIcon = (Component, iconProps) =>
    forwardRef((props, ref) => <Component {...props} ref={ref} color='primary' {...iconProps} />);

  const actions = [
    {
      icon: getIcon(AddCircle, { fontSize: 'large' }),
      tooltip: t('table.add'),
      isFreeAction: true,
      onClick: menu.openMenu
    },
    {
      icon: getIcon(Edit),
      tooltip: t('table.edit'),
      onClick: (_, rowData) => history.replace(`/invoices/${rowData.number}`)
    },
    {
      icon: getIcon(Delete),
      tooltip: t('table.delete'),
      onClick: (_, rowData) => dialog.openDialog(rowData.id)
    }
  ];

  return { columns, actions, dialog, menu };
};

export default useConfig;
