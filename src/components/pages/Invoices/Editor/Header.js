import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';

const Header = () => {
  const { t } = useTranslation();

  const location = useLocation();

  const headerText = t(`invoices.header.${location.pathname.split('/')[2]}`);

  return <Typography variant='h5'>{headerText}</Typography>;
};

export default Header;
