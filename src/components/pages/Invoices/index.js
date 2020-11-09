import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import DeleteDialog from './DeleteDialog';
import DataTable from '../../common/DataTable';
import useDialog from '../../../hooks/useDialog';
import useConfig from './config';

const Invoices = () => {
  const { t } = useTranslation();

  const invoices = useSelector(state => state.invoice.invoiceData);

  const actionPending = useSelector(state => state.invoice.actionPending);

  const { isDialogOpen, openDialog, closeDialog } = useDialog();

  const { columns, actions, closeMenu } = useConfig(openDialog);

  return (
    <>
      <DeleteDialog isDialogOpen={isDialogOpen} closeDialog={closeDialog} />
      <DataTable
        title={t('invoices.title')}
        isLoading={actionPending}
        sourceData={invoices}
        columns={columns}
        actions={actions}
      />
    </>
  );
};

export default Invoices;
