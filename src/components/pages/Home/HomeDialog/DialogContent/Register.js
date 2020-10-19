import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { DialogActions, DialogContent, Typography } from '@material-ui/core';
import { ValidatorForm } from 'react-material-ui-form-validator';
import DialogTextField from './common/DialogTextField';
import Email from './common/Email';
import Password from './common/Password';
import SubmitButton from './common/SubmitButton';
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
    <ValidatorForm onSubmit={onSubmit}>
      <DialogContent>
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
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <SubmitButton text={t('sign-up')} />
      </DialogActions>
    </ValidatorForm>
  );
};

export default Register;
