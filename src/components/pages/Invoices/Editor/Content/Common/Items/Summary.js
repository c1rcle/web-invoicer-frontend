import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Paper, Typography } from '@material-ui/core';
import useStyles from './styles';

const Summary = () => {
  const { t } = useTranslation();

  const items = useSelector(state => state.invoice.editorData.items);

  const getSumForProperty = propertyName =>
    items.reduce((prev, curr) => prev + Number(curr[propertyName]) * Number(curr.count), 0) || 0;

  const classes = useStyles();

  return (
    <Paper variant='outlined' className={classes.summaryContainer}>
      <Typography variant='body1'>
        {t('products.netSum', { sum: getSumForProperty('netPrice').toFixed(2) })}
      </Typography>
      <Typography variant='body1'>
        {t('products.vatSum', {
          sum: (getSumForProperty('grossPrice') - getSumForProperty('netPrice')).toFixed(2)
        })}
      </Typography>
      <Typography variant='body1' color='primary'>
        {t('products.amountDue', { sum: getSumForProperty('grossPrice').toFixed(2) })}
      </Typography>
    </Paper>
  );
};

export default Summary;
