import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Divider, Hidden, List, ListItem, ListItemText } from '@material-ui/core';
import { openDialog } from '../../../slices/appSlice';
import useStyles from '../styles';

const Buttons = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const classes = useStyles();

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
        <ListItem button onClick={() => onClick('register')} className={classes.drawerHighlight}>
          <ListItemText primary={t('sign-up')} className={classes.drawerHighlightText} />
        </ListItem>
      </List>
    </Hidden>
  );
};

export default Buttons;
