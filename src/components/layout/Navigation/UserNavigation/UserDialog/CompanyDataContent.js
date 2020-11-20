import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import FormContent from '../../../../common/Dialog/FormContent';
import DialogTextField from '../../../../common/Dialog/DialogTextField';
import SuccessAlert from '../../../../common/Dialog/SuccessAlert';
import { setCompanyData, setUserData } from '../../../../../slices/userSlice';
import useDidUpdateEffect from '../../../../../hooks/useDidUpdateEffect';
import useResultSuccess from '../../../../../hooks/useResultSuccess';
import equal from 'fast-deep-equal';

const CompanyDataContent = () => {
  const initialFormData = {
    companyName: '',
    nip: '',
    address: '',
    postalCode: '',
    city: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const validator = useRef(null);

  const { success, performAction } = useResultSuccess(setCompanyData);

  const userData = useSelector(state => state.user.userData);

  useDidUpdateEffect(() => {
    equal(formData, initialFormData) && validator.current.resetValidations();
  }, [formData]);

  const onTextChanged = name => ({ target }) => {
    setFormData(formData => ({ ...formData, [name]: target.value }));
  };

  const onSubmit = e => {
    e.preventDefault();
    performAction(formData, () => {
      dispatch(setUserData({ ...userData, ...formData }));
      setFormData(initialFormData);
    });
  };

  return (
    <>
      <SuccessAlert success={success} text={t('user.success.setCompanyData')} />
      <FormContent onSubmit={onSubmit} submitText={t('save')} validatorRef={validator}>
        <DialogTextField
          autoFocus
          label={t('counterparties.name')}
          onChange={onTextChanged('companyName')}
          value={formData.companyName}
          validators={['required']}
          errorMessages={[t('validation.required')]}
        />
        <DialogTextField
          label={t('counterparties.nip')}
          onChange={onTextChanged('nip')}
          value={formData.nip}
          validators={['validNip']}
          errorMessages={[t('validation.validNip')]}
        />
        <DialogTextField
          label={t('counterparties.address')}
          onChange={onTextChanged('address')}
          value={formData.address}
          validators={['required']}
          errorMessages={[t('validation.required')]}
        />
        <DialogTextField
          label={t('counterparties.postalCode')}
          onChange={onTextChanged('postalCode')}
          value={formData.postalCode}
          validators={['postalCode']}
          errorMessages={[t('validation.postalCode')]}
        />
        <DialogTextField
          label={t('counterparties.city')}
          onChange={onTextChanged('city')}
          value={formData.city}
          validators={['required']}
          errorMessages={[t('validation.required')]}
        />
      </FormContent>
    </>
  );
};

export default CompanyDataContent;
