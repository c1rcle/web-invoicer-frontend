import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import FormContent from './FormContent';
import Email from './common/Email';
import { resetPassword } from '../../../../../slices/userSlice';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const onTextChanged = ({ target }) => {
    setEmail(target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(resetPassword(email));
  };

  return (
    <FormContent onSubmit={onSubmit} submitText={t('reset-password')}>
      <Email autoFocus onChange={onTextChanged} value={email} />
    </FormContent>
  );
};

export default ResetPassword;
