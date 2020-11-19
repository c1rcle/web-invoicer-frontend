import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import DataTable from '../../../common/DataTable';
import ActionMenu from './ActionMenu';
import CreateMenu from './CreateMenu';
import DeleteDialog from './DeleteDialog';
import ErrorDialog from '../../../common/ErrorDialog';
import { getInvoices, setError } from '../../../../slices/invoiceSlice';
import useConfig from './config';

const InvoiceTable = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const invoices = useSelector(state => state.invoice.invoiceData);

  const actionPending = useSelector(state => state.invoice.actionPending);

  const error = useSelector(state => state.invoice.error);

  const { columns, actions, dialog, createMenu, actionMenu } = useConfig();

  useEffect(() => {
    dispatch(getInvoices());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ErrorDialog error={error} clearAction={setError} />
      <CreateMenu anchor={createMenu.anchor} closeMenu={createMenu.closeMenu} />
      <ActionMenu
        anchor={actionMenu.anchor}
        menuData={actionMenu.menuData}
        closeMenu={actionMenu.closeMenu}
        openDeleteDialog={dialog.openDialog}
      />
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
