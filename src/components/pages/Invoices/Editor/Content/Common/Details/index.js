import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Grid, Typography } from '@material-ui/core';
import useFields from './fields';
import useActions from './actions';

const Details = () => {
  const { t } = useTranslation();

  const fields = useFields(useActions());

  return (
    <>
      <Typography variant='h6'>{t('invoices.editor.details')}</Typography>
      <Box mt={2} mb={4}>
        <Grid container spacing={2}>
          <Grid xs={6} item>
            {fields.Number}
          </Grid>
          <Grid xs={6} item>
            {fields.Date}
          </Grid>
          <Grid xs={6} item>
            {fields.FullName}
          </Grid>
          <Grid xs={6} item>
            {fields.PhoneNumber}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Details;
