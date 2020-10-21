import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, Typography } from '@material-ui/core';
import useHomeDialog from '../../../hooks/useHomeDialog';

const Footer = () => {
  const { t } = useTranslation();

  const dialog = useHomeDialog();

  return (
    <Box mb={4} className='text-center'>
      <Typography variant='h5'>{t('home.footer')}</Typography>
      <Box mt={2}>
        <Button
          variant='outlined'
          color='inherit'
          size='large'
          onClick={() => dialog.openForType('register')}>
          {t('signUp')}
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
