import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { AddCircle, MoreHoriz } from '@material-ui/icons';
import useDropdownMenu from '../../../../hooks/useDropdownMenu';
import useDialog from '../../../../hooks/useDialog';

const useConfig = () => {
  const { t } = useTranslation();

  const dialog = useDialog();

  const createMenu = useDropdownMenu();

  const actionMenu = useDropdownMenu();

  const currencySettings = {
    type: 'currency',
    align: 'left',
    currencySetting: {
      locale: 'pl',
      currencyCode: 'PLN'
    }
  };

  const columns = [
    {
      title: t('invoices.date'),
      field: 'date',
      type: 'date',
      width: 190
    },
    {
      title: t('invoices.number'),
      field: 'number',
      width: 190
    },
    {
      title: t('invoices.counterparty'),
      field: 'counterparty.name',
      width: 190
    },
    {
      title: t('invoices.netTotal'),
      field: 'netTotal',
      ...currencySettings,
      width: 190
    },
    {
      title: t('invoices.grossTotal'),
      field: 'grossTotal',
      ...currencySettings,
      width: 190
    },
    {
      title: t('invoices.issuer'),
      field: 'employee.fullName',
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
      onClick: createMenu.openMenu
    },
    {
      icon: getIcon(MoreHoriz),
      tooltip: t('table.more'),
      onClick: (event, rowData) => actionMenu.openMenu(event, rowData)
    }
  ];

  return { columns, actions, dialog, createMenu, actionMenu };
};

export default useConfig;
