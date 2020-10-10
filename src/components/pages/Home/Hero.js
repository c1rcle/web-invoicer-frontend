import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import { MonetizationOnTwoTone as AppIcon } from '@material-ui/icons';
import useStyles from './styles';

const Hero = () => {
  const { t } = useTranslation();

  const classes = useStyles();

  return (
    <div className={classes.heroContainer}>
      <div className={classes.heroItem}>
        <AppIcon className={classes.heroIcon} color='primary' />
      </div>
      <div className={classes.heroItem}>
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
