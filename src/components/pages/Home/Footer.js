import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Box, Button, Typography } from '@material-ui/core';
import { openDialog } from '../../../slices/appSlice';

const Footer = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(openDialog('register'));
  };

  return (
    <Box mb={4} className='text-center'>
      <Typography variant='h5'>{t('home.footer')}</Typography>
      <Box mt={2}>
        <Button variant='outlined' color='inherit' size='large' onClick={onClick}>
          {t('sign-up')}
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
