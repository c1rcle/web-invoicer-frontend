import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import useLogout from '../../../hooks/useLogout';
import useDropdownMenu from '../../../hooks/useDropdownMenu';
import useTokenRefresh from '../../../hooks/useTokenRefresh';

const UserNavigation = () => {
  const { t } = useTranslation();

  const { anchor, openMenu, closeMenu } = useDropdownMenu();

  const logout = useLogout();

  useTokenRefresh();

  return (
    <>
      <IconButton edge='end' color='primary' onClick={openMenu}>
        <AccountCircle fontSize='large' />
      </IconButton>
      <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={closeMenu}>
        <MenuItem component={Link} to='account' onClick={closeMenu}>
          {t('accountSettings')}
        </MenuItem>
        <MenuItem onClick={logout}>{t('signOut')}</MenuItem>
      </Menu>
    </>
  );
};

export default UserNavigation;
