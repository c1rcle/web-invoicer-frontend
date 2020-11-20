import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { CircularProgress, DialogContent, Typography } from '@material-ui/core';
import SuccessAlert from '../../../../common/Dialog/SuccessAlert';
import { confirmEmail } from '../../../../../slices/userSlice';
import useResultSuccess from '../../../../../hooks/useResultSuccess';
import useStyles from './styles';

const ConfirmEmail = () => {
  const { success, performAction } = useResultSuccess(confirmEmail);

  const { t } = useTranslation();

  const actionPending = useSelector(state => state.user.actionPending);

  const params = new URLSearchParams(useLocation().search);
  const email = params.get('email');
  const token = params.get('token');

  const classes = useStyles();

  useEffect(() => {
    performAction({ email: email, token: token });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <SuccessAlert success={success} text={t('home.dialog.success.confirmEmail')} />
      <DialogContent>
        <div className={classes.dialogConfirmContainer}>
          {actionPending ? (
            <>
              <CircularProgress className={classes.dialogProgress} />
              <Typography>{t('home.dialog.pleaseWait')}</Typography>
            </>
          ) : (
            <Typography>{t('home.dialog.closeWindow')}</Typography>
          )}
        </div>
      </DialogContent>
    </>
  );
};

export default ConfirmEmail;
