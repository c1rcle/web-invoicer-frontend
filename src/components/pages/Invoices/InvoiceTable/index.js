import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import DataTable from '../../../common/DataTable';
import ActionMenu from './ActionMenu';
import CreateMenu from './CreateMenu';
import DeleteDialog from './DeleteDialog';
import useConfig from './config';

const InvoiceTable = () => {
  const { t } = useTranslation();

  const invoices = useSelector(state => state.invoice.invoiceData);

  const actionPending = useSelector(state => state.invoice.actionPending);

  const { columns, actions, dialog, createMenu, actionMenu } = useConfig();

  return (
    <>
      <CreateMenu anchor={createMenu.anchor} closeMenu={createMenu.closeMenu} />
      <ActionMenu anchor={actionMenu.anchor} closeMenu={actionMenu.closeMenu} />
      <DeleteDialog
        open={dialog.isDialogOpen}
        onClose={dialog.closeDialog}
        id={dialog.dialogData}
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
