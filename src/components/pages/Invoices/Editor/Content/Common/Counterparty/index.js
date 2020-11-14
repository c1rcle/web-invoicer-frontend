import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Grid, Typography } from '@material-ui/core';
import useActions from './actions';
import useFields from './fields';

const Counterparty = () => {
  const { t } = useTranslation();

  const fields = useFields(useActions());

  return (
    <>
      <Typography variant='h6'>{t('invoices.editor.counterparty')}</Typography>
      <Box mt={2} mb={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            {fields.Name}
          </Grid>
          <Grid item xs={12} sm={4}>
            {fields.Nip}
          </Grid>
          <Grid item xs={12} sm={5}>
            {fields.Address}
          </Grid>
          <Grid item xs={4} sm={3}>
            {fields.PostalCode}
          </Grid>
          <Grid item xs={8} sm={4}>
            {fields.City}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Counterparty;
