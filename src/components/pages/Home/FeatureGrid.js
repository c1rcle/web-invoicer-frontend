import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, Grid, Icon, Typography } from '@material-ui/core';
import './styles/feature.css';

const FeatureGrid = () => {
  const { t } = useTranslation();

  const features = t('home.features', { returnObjects: true });

  return (
    <Grid container justify='center' spacing={3}>
      {features.map((feature, index) => (
        <Grid key={index} item xs={12} sm={6}>
          <Card className='feature-card'>
            <CardContent>
              <div className='text-center'>
                <Icon className='feature-icon' color='primary'>
                  {t(`home.features.${index}.icon`)}
                </Icon>
              </div>
              <Typography gutterBottom variant='h5' className='text-center'>
                {feature.header}
              </Typography>
              <Typography variant='body1' color='textSecondary' className='text-center'>
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FeatureGrid;
