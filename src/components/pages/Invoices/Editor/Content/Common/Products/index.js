import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Divider, Grid, Typography } from '@material-ui/core';
import Button from '../Input/Button';
import Summary from './Summary';
import useProducts from './useProducts';
import useStyles from './styles';

const Products = () => {
  const { t } = useTranslation();

  const { actions, productRows } = useProducts();

  const classes = useStyles();

  return (
    <>
      <Typography variant='h6'>{t('invoices.editor.products')}</Typography>
      <Box mt={2} mb={4}>
        {productRows.map(({ editorId, fields }) => (
          <div key={editorId}>
            <Grid container spacing={2}>
              <Grid item xs={12} xl={5}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} xl={6}>
                    {fields.Name}
                  </Grid>
                  <Grid item xs={12} sm={6} xl={6}>
                    {fields.Description}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} xl={7}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={2} xl={2}>
                    {fields.Count}
                  </Grid>
                  <Grid item xs={6} md={2} xl={2}>
                    {fields.Unit}
                  </Grid>
                  <Grid item xs={6} md={3} xl={3}>
                    {fields.NetPrice}
                  </Grid>
                  <Grid item xs={6} md={3} xl={3}>
                    {fields.GrossPrice}
                  </Grid>
                  <Grid item xs={6} md={2} xl={2} className='d-flex'>
                    {fields.VatRate}
                    {fields.Delete}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box my={3}>
              <Divider />
            </Box>
          </div>
        ))}
        <div className={classes.bottomContainer}>
          <Button label={t('table.add')} onClick={actions.add} className={classes.addButton} />
          <Summary />
        </div>
      </Box>
    </>
  );
};

export default Products;
