import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Box, Divider, Hidden, List, ListItem, ListItemText } from '@material-ui/core';
import { openDialog } from '../../../slices/appSlice';

const Buttons = () => {
  const { t } = useTranslation();

  const theme = useSelector(state => state.app.theme);

  const dispatch = useDispatch();

  const onClick = type => {
    dispatch(openDialog(type));
  };

  return (
    <Hidden smUp>
      <Divider />
      <List>
        <ListItem button onClick={() => onClick('login')}>
          <ListItemText primary={t('sign-in')} />
        </ListItem>
        <Box bgcolor='primary.main' color='inherit'>
          <ListItem button onClick={() => onClick('register')}>
            <ListItemText primary={t('sign-up')} className={`drawer-sign-up-button-${theme}`} />
          </ListItem>
        </Box>
      </List>
    </Hidden>
  );
};

export default Buttons;
