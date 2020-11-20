import React from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import UserDialog from './UserDialog';
import useLogout from '../../../../hooks/useLogout';
import useDialog from '../../../../hooks/useDialog';
import useDropdownMenu from '../../../../hooks/useDropdownMenu';
import useTokenRefresh from '../../../../hooks/useTokenRefresh';

const UserNavigation = () => {
  const { t } = useTranslation();

  const { anchor, openMenu, closeMenu } = useDropdownMenu();

  const { isDialogOpen, dialogData, openDialog, closeDialog } = useDialog();

  const logout = useLogout();

  useTokenRefresh();

  const handleClick = type => () => {
    closeMenu();
    openDialog(type);
  };

  return (
    <>
      <UserDialog open={isDialogOpen} onClose={closeDialog} type={dialogData} />
      <IconButton edge='end' color='primary' onClick={openMenu}>
        <AccountCircle fontSize='large' />
      </IconButton>
      <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={closeMenu}>
        <MenuItem onClick={handleClick('setCompanyData')}>{t('accountSetCompanyData')}</MenuItem>
        <MenuItem onClick={handleClick('changePassword')}>{t('accountChangePassword')}</MenuItem>
        <MenuItem onClick={logout}>{t('signOut')}</MenuItem>
      </Menu>
    </>
  );
};

export default UserNavigation;
