import React from 'react';
import PermanentDrawer from './PermanentDrawer';
import TemporaryDrawer from './TemporaryDrawer';
import HomeDrawerContent from './HomeDrawerContent';
import UserDrawerContent from './UserDrawerContent';

const AppDrawer = ({ open, setOpen, isLoggedIn, isLgUp }) => {
  const Drawer = isLgUp && isLoggedIn ? PermanentDrawer : TemporaryDrawer;

  const DrawerContent = isLoggedIn ? UserDrawerContent : HomeDrawerContent;

  return (
    <Drawer open={open} onClose={() => setOpen(false)}>
      <DrawerContent />
    </Drawer>
  );
};

export default AppDrawer;
