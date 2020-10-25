import React from 'react';
import { useTranslation } from 'react-i18next';
import { Divider, Hidden, List, ListItem, ListItemText } from '@material-ui/core';
import useHomeDialog from '../../../../hooks/useHomeDialog';
import useStyles from '../styles';

const Buttons = () => {
  const { t } = useTranslation();

  const { openDialogForType } = useHomeDialog();

  const classes = useStyles();

  return (
    <Hidden smUp>
      <Divider />
      <List>
        <ListItem button onClick={() => openDialogForType('login')}>
          <ListItemText primary={t('signIn')} />
        </ListItem>
        <ListItem
          button
          onClick={() => openDialogForType('register')}
          className={classes.drawerHighlight}>
          <ListItemText primary={t('signUp')} className={classes.drawerHighlightText} />
        </ListItem>
      </List>
    </Hidden>
  );
};

export default Buttons;
