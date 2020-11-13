import React from 'react';
import { useTranslation } from 'react-i18next';
import { TextValidator } from 'react-material-ui-form-validator';

const EditorTextField = ({ validators, ...props }) => {
  const { t } = useTranslation();

  const errorMessages = validators && validators.map(name => t(`validation.${name}`));

  return (
    <TextValidator
      variant='outlined'
      fullWidth
      validators={validators}
      errorMessages={errorMessages}
      {...props}
    />
  );
};

export default EditorTextField;
