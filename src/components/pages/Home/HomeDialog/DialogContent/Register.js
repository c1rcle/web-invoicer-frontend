import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import DialogTextField from './common/DialogTextField';
import FormContent from './FormContent';
import Email from './common/Email';
import Password from './common/Password';
import { register } from '../../../../../slices/userSlice';
import useStyles from '../styles';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
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
    dispatch(register(formData));
  };

  return (
    <FormContent onSubmit={onSubmit} submitText={t('sign-up')}>
      <DialogTextField
        autoFocus
        label={t('home.dialog.name')}
        type='text'
        value={formData.fullName}
        validators={['required']}
        errorMessages={[t('home.dialog.validation.required')]}
        onChange={onTextChanged('fullName')}
      />
      <Email onChange={onTextChanged('email')} value={formData.email} />
      <Password onChange={onTextChanged('password')} value={formData.password} />
      <Typography variant='body2' color='textSecondary' className={classes.dialogConditions}>
        {t('home.dialog.terms')}
      </Typography>
    </FormContent>
  );
};

export default Register;
