import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import FormContent from './FormContent';
import Email from './common/Email';
import Password from './common/Password';
import { login } from '../../../../../slices/userSlice';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const onTextChanged = name => ({ target }) => {
    setFormData(formData => ({ ...formData, [name]: target.value }));
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <FormContent onSubmit={onSubmit} submitText={t('sign-in')}>
      <Email autoFocus onChange={onTextChanged('email')} value={formData.email} />
      <Password onChange={onTextChanged('password')} value={formData.password} />
    </FormContent>
  );
};

export default Login;
