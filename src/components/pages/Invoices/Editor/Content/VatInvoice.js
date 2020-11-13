import React from 'react';
import Counterparty from './Common/Counterparty';
import Details from './Common/Details';
import Payment from './Common/Payment';
import Products from './Common/Products';

const EditVatInvoice = () => {
  return (
    <>
      <Details />
      <Counterparty />
      <Products />
      <Payment />
    </>
  );
};

export default EditVatInvoice;
