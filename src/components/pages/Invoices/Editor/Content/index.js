import React from 'react';
import { Route } from 'react-router-dom';
import EditCorrectiveInvoice from './EditCorrectiveInvoice';
import EditMarginInvoice from './EditMarginInvoice';
import EditProformaInvoice from './EditProformaInvoice';
import EditReceipt from './EditReceipt';
import EditVatInvoice from './EditVatInvoice';
import useStyles from './styles';

const Content = () => {
  const classes = useStyles();

  return (
    <div className={classes.contentContainer}>
      <Route exact path='/invoices/vat' component={EditVatInvoice} />
      <Route exact path='/invoices/proforma' component={EditProformaInvoice} />
      <Route exact path='/invoices/receipt' component={EditReceipt} />
      <Route exact path='/invoices/margin' component={EditMarginInvoice} />
      <Route exact path='/invoices/corrective' component={EditCorrectiveInvoice} />
    </div>
  );
};

export default Content;
