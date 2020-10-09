import React from 'react';
import { useSelector } from 'react-redux';
import { Divider, Drawer, IconButton, makeStyles } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import HomeDrawerContent from './HomeDrawerContent';
import DashboardDrawerContent from './DashboardDrawerContent';

const AppDrawer = ({ open, setOpen }) => {
  const drawerType = useSelector(state => state.app.drawerType);

  const useStyles = makeStyles(theme => ({
    drawerHeader: {
      width: 240,
      padding: theme.spacing(0, 1),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      ...theme.mixins.toolbar
    }
  }));

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
