import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Divider, Icon, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import LanguageSelector from './common/LanguageSelector';
import ThemeSwitcher from './common/ThemeSwitcher';

const UserDrawerContent = ({ closeDrawer, isDrawerPermanent }) => {
  const { t } = useTranslation();

  const location = useLocation();

  const drawerItems = t('drawer.user', { returnObjects: true });

  const isSelected = item =>
    location.pathname === item.pathname || location.pathname.startsWith(`${item.pathname}/`);

  const onItemClick = () => !isDrawerPermanent && closeDrawer();

  return (
    <>
      <List>
        {drawerItems.map((item, index) => (
          <ListItem
            button
            key={index}
            component={Link}
            to={item.pathname}
            replace={location.pathname === item.pathname}
            selected={isSelected(item)}
            onClick={onItemClick}>
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
