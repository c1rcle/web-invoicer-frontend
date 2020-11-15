import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Details from './Common/Details';
import Items from './Common/Items';
import { getType } from '../../../../../utils/editorUtils';

const Receipt = () => {
  return (
    <>
      <Box mb={4}>
        <Grid container>
          <Grid item xs={12} lg={5}>
            <Details type={getType('receipt')} />
          </Grid>
        </Grid>
      </Box>
      <Items />
    </>
  );
};

export default Receipt;
