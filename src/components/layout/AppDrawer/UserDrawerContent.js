import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Divider, Icon, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import LanguageSelector from './common/LanguageSelector';
import ThemeSwitcher from './common/ThemeSwitcher';

const UserDrawerContent = ({ closeDrawer }) => {
  const { t } = useTranslation();

  const location = useLocation();

  const drawerItems = t('drawer.user', { returnObjects: true });

  return (
    <>
      <List>
        {drawerItems.map((item, index) => (
          <ListItem
            component={Link}
            to={item.pathname}
            key={index}
            button
            selected={location.pathname === item.pathname}
            onClick={closeDrawer}>
            <ListItemIcon>
              <Icon>{item.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <LanguageSelector />
        <ThemeSwitcher />
      </List>
    </>
  );
};

export default UserDrawerContent;
