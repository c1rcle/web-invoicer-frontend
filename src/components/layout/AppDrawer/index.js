import React from 'react';
import PermanentDrawer from './PermanentDrawer';
import TemporaryDrawer from './TemporaryDrawer';
import HomeDrawerContent from './HomeDrawerContent';
import UserDrawerContent from './UserDrawerContent';
import useDrawer from '../../../hooks/useDrawer';

const AppDrawer = ({ isLoggedIn, isLgUp }) => {
  const Drawer = isLgUp && isLoggedIn ? PermanentDrawer : TemporaryDrawer;

  const DrawerContent = isLoggedIn ? UserDrawerContent : HomeDrawerContent;

  const { close, isDrawerOpen } = useDrawer();

  return (
    <Drawer open={isDrawerOpen} onClose={close}>
      <DrawerContent closeDrawer={close} />
    </Drawer>
  );
};

export default AppDrawer;
