import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SuccessAlert from './common/SuccessAlert';
import FormContent from './FormContent';
import Email from './common/Email';
import { resetPassword } from '../../../../../slices/userSlice';
import useResultSuccess from '../../../../../hooks/useResultSuccess';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const { success, performAction } = useResultSuccess(resetPassword);

  const { t } = useTranslation();

  const onTextChanged = ({ target }) => {
    setEmail(target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    performAction(email, () => setEmail(''));
  };

  return (
    <>
      <SuccessAlert success={success} text={t('home.dialog.success.resetPassword')} />
      <FormContent onSubmit={onSubmit} submitText={t('reset')}>
        <Email autoFocus onChange={onTextChanged} value={email} />
      </FormContent>
    </>
  );
};

export default ResetPassword;
