import React from 'react';
import { useTranslation } from 'react-i18next';
import DialogTextField from './DialogTextField';

const Password = ({ passwordChange, ...props }) => {
  const { t } = useTranslation();

  return (
    <DialogTextField
      label={t(`home.dialog.${passwordChange ? 'newPassword' : 'password'}`)}
      type='password'
      validators={[
        'required',
        'matchRegexp:^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$^+=!*()@%&]).{6,}$'
      ]}
      errorMessages={[t('home.dialog.validation.required'), t('home.dialog.validation.password')]}
      {...props}
    />
  );
};

export default Password;
