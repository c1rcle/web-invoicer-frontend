import React, { useState } from 'react';
import { Link as BrowserLink, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from '@material-ui/core';
import FormContent from './FormContent';
import Email from './common/Email';
import Password from './common/Password';
import { login } from '../../../../../slices/userSlice';
import useStyles from './styles';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  const classes = useStyles();

  const onTextChanged = name => ({ target }) => {
    setFormData(formData => ({ ...formData, [name]: target.value }));
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <>
      {isLoggedIn && <Redirect to='/dashboard' />}
      <FormContent onSubmit={onSubmit} submitText={t('signIn')}>
        <Email autoFocus onChange={onTextChanged('email')} value={formData.email} />
        <Password onChange={onTextChanged('password')} value={formData.password} />
        <Link
          component={BrowserLink}
          to='resetPassword'
          variant='body2'
          color='primary'
          className={classes.dialogText}>
          {t('home.dialog.forgotPassword')}
        </Link>
      </FormContent>
    </>
  );
};

export default Login;
