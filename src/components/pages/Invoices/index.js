import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Editor from './Editor';
import InvoiceTable from './InvoiceTable';
import NotFound from '../NotFound';

const Invoices = () => {
  const validEditorPaths = ['/invoices/vat', '/invoices/proforma', '/invoices/receipt'];

  return (
    <Switch>
      <Route exact path='/invoices' component={InvoiceTable} />
      <Route exact path={validEditorPaths} component={Editor} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Invoices;
