import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Paper, Typography } from '@material-ui/core';
import { getPropertyTotal } from '../../../../../../../utils/priceUtils';
import useStyles from './styles';

const Summary = () => {
  const { t } = useTranslation();

  const items = useSelector(state => state.invoice.editorData.items);

  const netTotal = getPropertyTotal('netPrice', items);

  const grossTotal = getPropertyTotal('grossPrice', items);

  const classes = useStyles();

  return (
    <Paper variant='outlined' className={classes.summaryContainer}>
      <Typography variant='body1'>
        {t('invoices.editor.netTotal', { sum: netTotal.toFixed(2) })}
      </Typography>
      <Typography variant='body1'>
        {t('invoices.editor.vatTotal', { sum: (grossTotal - netTotal).toFixed(2) })}
      </Typography>
      <Typography variant='body1' color='primary'>
        {t('invoices.editor.grossTotal', { sum: grossTotal.toFixed(2) })}
      </Typography>
    </Paper>
  );
};

export default Summary;
