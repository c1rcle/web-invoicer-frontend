import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Brightness2, Brightness7 } from '@material-ui/icons';
import { setTheme } from '../../../../slices/appSlice';

const ThemeSwitcher = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const theme = useSelector(state => state.app.theme);

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    dispatch(setTheme(newTheme));
  };

  return (
    <ListItem button onClick={changeTheme}>
      <ListItemIcon>{theme === 'dark' ? <Brightness2 /> : <Brightness7 />}</ListItemIcon>
      <ListItemText primary={t('drawer.theme')} />
    </ListItem>
  );
};

export default ThemeSwitcher;
