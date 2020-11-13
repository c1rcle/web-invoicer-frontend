import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Grid, MenuItem, Typography } from '@material-ui/core';
import DatePicker from '../Input/DatePicker';
import Picker from '../Input/Picker';
import useActions from './actions';

const Payment = () => {
  const { t } = useTranslation();

  const paymentTypes = t('invoices.paymentTypes', { returnObjects: true });

  const { update, payment } = useActions();

  return (
    <>
      <Typography variant='h6'>{t('invoices.editor.payment')}</Typography>
      <Box mt={2} mb={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} lg={3} xl={2}>
            <Picker
              label={t('invoices.paymentType')}
              onChange={update('type')}
              value={payment.type}>
              {paymentTypes.map((value, index) => (
                <MenuItem key={index} value={index}>
                  {value}
                </MenuItem>
              ))}
            </Picker>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} xl={2}>
            <DatePicker
              label={t('invoices.deadline')}
              onChange={update('deadline')}
              value={payment.deadline}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Payment;
