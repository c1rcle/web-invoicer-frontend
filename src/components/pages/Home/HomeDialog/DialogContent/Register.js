import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import SuccessAlert from '../../../../common/Dialog/SuccessAlert';
import FormContent from '../../../../common/Dialog/FormContent';
import DialogTextField from '../../../../common/Dialog/DialogTextField';
import Email from './common/Email';
import Password from '../../../../common/Dialog/Password';
import { register } from '../../../../../slices/userSlice';
import useResultSuccess from '../../../../../hooks/useResultSuccess';
import useStyles from './styles';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const { success, performAction } = useResultSuccess(register);

  const { t } = useTranslation();

  const classes = useStyles();

  const onTextChanged = name => ({ target }) => {
    setFormData(formData => ({ ...formData, [name]: target.value }));
  };

  const onSubmit = e => {
    e.preventDefault();
    performAction(formData, () => setFormData({ fullName: '', email: '', password: '' }));
  };

  return (
    <>
      <SuccessAlert success={success} text={t('home.dialog.success.register')} />
      <FormContent onSubmit={onSubmit} submitText={t('signUp')}>
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
        <Typography variant='body2' color='textSecondary' className={classes.dialogText}>
          {t('home.dialog.terms')}
        </Typography>
      </FormContent>
    </>
  );
};

export default Register;
