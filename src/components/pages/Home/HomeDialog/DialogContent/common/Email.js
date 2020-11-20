import React from 'react';
import { useTranslation } from 'react-i18next';
import DialogTextField from '../../../../../common/Dialog/DialogTextField';

const Email = props => {
  const { t } = useTranslation();

  return (
    <DialogTextField
      label={t('home.dialog.email')}
      type='email'
      validators={['required', 'isEmail']}
      errorMessages={[t('home.dialog.validation.required'), t('home.dialog.validation.email')]}
      {...props}
    />
  );
};

export default Email;
