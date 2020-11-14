import { Grid } from '@material-ui/core';
import React from 'react';
import Counterparty from './Common/Counterparty';
import Details from './Common/Details';
import Payment from './Common/Payment';
import Products from './Common/Products';

const EditVatInvoice = () => {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={5}>
          <Details />
        </Grid>
        <Grid item xs={12} lg={7}>
          <Counterparty />
        </Grid>
      </Grid>
      <Products />
      <Payment />
    </>
  );
};

export default EditVatInvoice;
