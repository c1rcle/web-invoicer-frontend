import React from 'react';
import { Route } from 'react-router-dom';
import CorrectiveInvoice from './CorrectiveInvoice';
import ProformaInvoice from './ProformaInvoice';
import Receipt from './Receipt';
import VatInvoice from './VatInvoice';
import useStyles from './styles';

const Content = () => {
  const classes = useStyles();

  return (
    <div className={classes.contentContainer}>
      <Route exact path='/invoices/vat' component={VatInvoice} />
      <Route exact path='/invoices/proforma' component={ProformaInvoice} />
      <Route exact path='/invoices/receipt' component={Receipt} />
      <Route exact path='/invoices/corrective' component={CorrectiveInvoice} />
    </div>
  );
};

export default Content;
