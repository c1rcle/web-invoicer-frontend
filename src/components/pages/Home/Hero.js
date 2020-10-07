import React from 'react';
import { Typography } from '@material-ui/core';
import { MonetizationOnTwoTone as AppIcon } from '@material-ui/icons';
import '../../../styles/hero.css';

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-item'>
        <AppIcon className='hero-icon' />
      </div>
      <div className='hero-item'>
        <Typography variant='h4' gutterBottom>
          Welcome to Web Invoicer
        </Typography>
        <Typography variant='h6' color='textSecondary'>
          Invoicing made simple. Issue your invoices wherever and whenever you want!
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
