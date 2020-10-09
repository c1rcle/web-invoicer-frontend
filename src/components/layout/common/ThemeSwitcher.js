import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Brightness2, Brightness7 } from '@material-ui/icons';
import { setTheme } from '../../../slices/appSlice';

const ThemeSwitcher = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const theme = useSelector(state => state.app.theme);

  const changeTheme = () => {
    dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ListItem button onClick={changeTheme}>
      <ListItemIcon>{theme === 'dark' ? <Brightness2 /> : <Brightness7 />}</ListItemIcon>
      <ListItemText primary={t('drawer.theme')} />
    </ListItem>
  );
};

export default ThemeSwitcher;
