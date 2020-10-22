import React from 'react';
import { Divider, Drawer, IconButton } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import useStyles from './styles';

const TemporaryDrawer = ({ open, onClose, children }) => {
  const classes = useStyles();

  return (
    <Drawer anchor='left' open={open} onClose={onClose}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={onClose}>
          <ChevronLeft />
        </IconButton>
      </div>
      <Divider />
      {children}
    </Drawer>
  );
};

export default TemporaryDrawer;
