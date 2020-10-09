import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import { MonetizationOnTwoTone as AppIcon } from '@material-ui/icons';
import './styles/hero.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className='hero-container'>
      <div className='hero-item'>
        <AppIcon className='hero-icon' color='primary' />
      </div>
      <div className='hero-item'>
        <Typography variant='h4' gutterBottom>
          {t('home.hero.title')}
        </Typography>
        <Typography variant='h6' color='textSecondary'>
          {t('home.hero.description')}
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
