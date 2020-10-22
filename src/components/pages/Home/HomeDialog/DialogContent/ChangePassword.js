import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SuccessAlert from './common/SuccessAlert';
import FormContent from './FormContent';
import Password from './common/Password';
import { changeResetPassword } from '../../../../../slices/userSlice';
import useResultSuccess from '../../../../../hooks/useResultSuccess';

const ChangePassword = () => {
  const [password, setPassword] = useState('');

  const { success, performAction } = useResultSuccess(changeResetPassword);

  const { t } = useTranslation();

  const params = new URLSearchParams(useLocation().search);
  const email = params.get('email');
  const token = params.get('token');

  const onTextChanged = ({ target }) => {
    setPassword(target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    performAction({ email: email, resetToken: token, newPassword: password }, () =>
      setPassword('')
    );
  };

  return (
    <>
      <SuccessAlert success={success} text={t('home.dialog.success.resetPassword')} />
      <FormContent onSubmit={onSubmit} submitText={t('changePassword')}>
        <Password autoFocus passwordChange onChange={onTextChanged} value={password} />
      </FormContent>
    </>
  );
};

export default ChangePassword;
