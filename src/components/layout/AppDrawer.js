import React from 'react';
import { useSelector } from 'react-redux';
import { Divider, Drawer, IconButton } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import HomeDrawerContent from './HomeDrawerContent';
import DashboardDrawerContent from './DashboardDrawerContent';
import useStyles from './styles';

const AppDrawer = ({ open, setOpen }) => {
  const drawerType = useSelector(state => state.app.drawerType);

  const classes = useStyles();

  return (
    <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={() => setOpen(false)}>
          <ChevronLeft />
        </IconButton>
      </div>
      <Divider />
      {drawerType === 'home' ? <HomeDrawerContent /> : <DashboardDrawerContent />}
    </Drawer>
  );
};

export default AppDrawer;
