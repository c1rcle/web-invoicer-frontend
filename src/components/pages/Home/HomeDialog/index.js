import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Dialog } from '@material-ui/core';
import DialogHeader from './DialogHeader';
import DialogAlert from './DialogAlert';
import Login from './DialogContent/Login';
import Register from './DialogContent/Register';
import ResetPassword from './DialogContent/ResetPassword';
import ChangePassword from './DialogContent/ChangePassword';
import ConfirmEmail from './DialogContent/ConfirmEmail';
import useHomeDialog from '../../../../hooks/useHomeDialog';

const HomeDialog = () => {
  const { t } = useTranslation();

  const { isDialogOpen, closeDialog, onExited } = useHomeDialog();

  const locationKey = useLocation().pathname.substring(1);

  const dialogTitle = () => {
    //Required to make sure i18n doesn't log missing key errors.
    return locationKey ? t(`home.dialog.${locationKey}`) : '';
  };

  return (
    <Dialog open={isDialogOpen} onClose={closeDialog} onExited={onExited} maxWidth='xs' fullWidth>
      <DialogHeader onClose={closeDialog} title={dialogTitle()} />
      <DialogAlert locationKey={locationKey} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/resetPassword' component={ResetPassword} />
      <Route exact path='/changePassword' component={ChangePassword} />
      <Route exact path='/confirmEmail' component={ConfirmEmail} />
    </Dialog>
  );
};

export default HomeDialog;
