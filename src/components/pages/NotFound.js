import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Button, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

const NotFound = () => {
  const { t } = useTranslation();

  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <Box mt={3} className='text-center'>
      <Typography variant='h1' color='primary'>
        404
      </Typography>
      <Typography variant='h2'>{t('notFound.header')}</Typography>
      <Box my={2}>
        <Typography variant='h6' color='textSecondary'>
          {t('notFound.description')}
        </Typography>
      </Box>
      <Button
        component={Link}
        to={isLoggedIn ? '/invoices' : '/'}
        variant='contained'
        color='primary'>
        {t('notFound.button')}
      </Button>
    </Box>
  );
};

export default NotFound;
