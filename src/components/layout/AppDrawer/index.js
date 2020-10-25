import React from 'react';
import PermanentDrawer from './PermanentDrawer';
import TemporaryDrawer from './TemporaryDrawer';
import HomeDrawerContent from './HomeDrawerContent';
import UserDrawerContent from './UserDrawerContent';
import useDrawer from '../../../hooks/useDrawer';

const AppDrawer = ({ isLoggedIn }) => {
  const { closeDrawer, isDrawerOpen, isDrawerPermanent } = useDrawer();

  const Drawer = isDrawerPermanent ? PermanentDrawer : TemporaryDrawer;

  const DrawerContent = isLoggedIn ? UserDrawerContent : HomeDrawerContent;

  return (
    <Drawer open={isDrawerOpen} onClose={closeDrawer}>
      <DrawerContent closeDrawer={closeDrawer} isDrawerPermanent={isDrawerPermanent} />
    </Drawer>
  );
};

export default AppDrawer;
