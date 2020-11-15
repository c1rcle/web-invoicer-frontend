import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Grid, Typography } from '@material-ui/core';
import useFields from './fields';
import useActions from './actions';

const Details = ({ type }) => {
  const { t } = useTranslation();

  const fields = useFields(useActions(type));

  return (
    <>
      <div className='d-flex'>
        <Typography variant='h6'>{t('invoices.editor.details')}</Typography>
        {fields.Clear}
      </div>
      <Box mt={2}>
        <Grid container spacing={2}>
          <Grid xs={12} sm={6} item>
            {fields.Number}
          </Grid>
          <Grid xs={12} sm={6} item>
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
