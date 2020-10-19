import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { DialogActions, DialogContent } from '@material-ui/core';
import { ValidatorForm } from 'react-material-ui-form-validator';
import Email from './common/Email';
import Password from './common/Password';
import SubmitButton from './common/SubmitButton';
import { login } from '../../../../../slices/userSlice';
import useStyles from '../styles';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const classes = useStyles();

  const onTextChanged = name => ({ target }) => {
    setFormData(formData => ({ ...formData, [name]: target.value }));
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <ValidatorForm onSubmit={onSubmit}>
      <DialogContent>
        <Email autoFocus onChange={onTextChanged('email')} value={formData.email} />
        <Password onChange={onTextChanged('password')} value={formData.password} />
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <SubmitButton text={t('sign-in')} />
      </DialogActions>
    </ValidatorForm>
  );
};

export default Login;
