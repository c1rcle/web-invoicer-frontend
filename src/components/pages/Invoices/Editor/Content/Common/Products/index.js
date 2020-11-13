import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Divider, Grid, Typography } from '@material-ui/core';
import Button from '../Input/Button';
import useProducts from './useProducts';

const Products = () => {
  const { t } = useTranslation();

  const { actions, productRows } = useProducts();

  return (
    <>
      <Typography variant='h6'>{t('invoices.editor.products')}</Typography>
      <Box mt={2} mb={4}>
        {productRows.map(({ editorId, fields }, index) => (
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
            {index !== productRows.length - 1 && (
              <Box my={3}>
                <Divider />
              </Box>
            )}
          </div>
        ))}
        <Box mt={2}>
          <Button label={t('table.add')} onClick={actions.add} />
        </Box>
      </Box>
    </>
  );
};

export default Products;
