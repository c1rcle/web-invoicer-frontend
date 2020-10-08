import React from 'react';
import { Card, CardContent, Grid, Icon, Typography } from '@material-ui/core';
import features from './features';
import './styles/feature.css';

const FeatureGrid = () => {
  return (
    <Grid container justify='center' spacing={3}>
      {features.map((feature, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Card className='feature-card'>
            <CardContent>
              <div className='text-center'>
                <Icon className='feature-icon'>{feature.icon}</Icon>
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
