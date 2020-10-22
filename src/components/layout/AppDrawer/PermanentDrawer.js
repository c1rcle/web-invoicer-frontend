import React from 'react';
import { Drawer, Toolbar } from '@material-ui/core';
import useStyles from './styles';

const PermanentDrawer = ({ children }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant='permanent'
      anchor='left'
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}>
      <Toolbar />
      {children}
    </Drawer>
  );
};

export default PermanentDrawer;
