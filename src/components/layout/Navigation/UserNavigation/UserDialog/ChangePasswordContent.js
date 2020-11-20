import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import FormContent from '../../../../common/Dialog/FormContent';
import Password from '../../../../common/Dialog/Password';
import SuccessAlert from '../../../../common/Dialog/SuccessAlert';
import { changePassword, setError } from '../../../../../slices/userSlice';
import useResultSuccess from '../../../../../hooks/useResultSuccess';

const ChangePasswordContent = () => {
  const [formData, setFormData] = useState({
    password: '',
    newPassword: ''
  });

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { success, performAction } = useResultSuccess(changePassword);

  const email = useSelector(state => state.user.userData.email);

  const onTextChanged = name => ({ target }) => {
    setFormData(formData => ({ ...formData, [name]: target.value }));
  };

  const onSubmit = e => {
    e.preventDefault();

    if (formData.password === formData.newPassword) {
      dispatch(setError('passwordsEqual'));
      return;
    }

    performAction({ ...formData, email }, () => setFormData({ password: '', newPassword: '' }));
  };

  return (
    <>
      <SuccessAlert success={success} text={t('user.success.changePassword')} />
      <FormContent onSubmit={onSubmit} submitText={t('changePassword')}>
        <Password autoFocus onChange={onTextChanged('password')} value={formData.password} />
        <Password
          passwordChange
          onChange={onTextChanged('newPassword')}
          value={formData.newPassword}
        />
      </FormContent>
    </>
  );
};

export default ChangePasswordContent;
