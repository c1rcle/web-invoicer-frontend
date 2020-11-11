import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import DataTable from '../../../common/DataTable';
import CreateMenu from './CreateMenu';
import DeleteDialog from './DeleteDialog';
import useConfig from './config';

const InvoiceTable = () => {
  const { t } = useTranslation();

  const invoices = useSelector(state => state.invoice.invoiceData);

  const actionPending = useSelector(state => state.invoice.actionPending);

  const { columns, actions, dialog, menu } = useConfig();

  return (
    <>
      <CreateMenu anchor={menu.anchor} closeMenu={menu.closeMenu} />
      <DeleteDialog
        open={dialog.isDialogOpen}
        onClose={dialog.closeDialog}
        data={dialog.dialogData}
      />
      <DataTable
        title={t('invoices.title')}
        isLoading={actionPending}
        data={invoices}
        columns={columns}
        actions={actions}
      />
    </>
  );
};

export default InvoiceTable;
