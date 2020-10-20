import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import FormContent from './FormContent';
import Password from './common/Password';
import { resetPassword } from '../../../../../slices/userSlice';

const ChangePassword = () => {
  const [password, setPassword] = useState('');

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const onTextChanged = ({ target }) => {
    setPassword(target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(resetPassword(email));
  };

  return (
    <FormContent onSubmit={onSubmit} submitText={t('change-password')}>
      <Password onChange={onTextChanged} value={password} />
    </FormContent>
  );
};

export default ChangePassword;
