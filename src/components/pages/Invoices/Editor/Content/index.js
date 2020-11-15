import React from 'react';
import { Route } from 'react-router-dom';
import CorrectiveInvoice from './CorrectiveInvoice';
import Receipt from './Receipt';
import Invoice from './Invoice';
import { getType } from '../../../../../utils/editorUtils';
import useStyles from './styles';

const Content = () => {
  const classes = useStyles();

  const getRender = type => props => <Invoice {...props} type={getType(type)} />;

  return (
    <div className={classes.contentContainer}>
      <Route exact path='/invoices/vat' render={getRender('vat')} />
      <Route exact path='/invoices/proforma' render={getRender('proforma')} />
      <Route exact path='/invoices/receipt' component={Receipt} />
      <Route exact path='/invoices/corrective' component={CorrectiveInvoice} />
    </div>
  );
};

export default Content;
