import React from 'react';
import { useTranslation } from 'react-i18next';
import Dialog from '../../../../common/Dialog';
import DialogAlert from './DialogAlert';
import ChangePasswordContent from './ChangePasswordContent';
import CompanyDataContent from './CompanyDataContent';

const UserDialog = ({ open, onClose, type }) => {
  const { t } = useTranslation();

  const dialogTitle =
    type === 'changePassword' ? t('accountChangePassword') : t('accountSetCompanyData');

  return (
    <Dialog
      centeredTitle
      closeButton
      title={dialogTitle}
      open={open}
      onClose={onClose}
      maxWidth='xs'
      fullWidth>
      <DialogAlert />
      {type === 'changePassword' ? <ChangePasswordContent /> : <CompanyDataContent />}
    </Dialog>
  );
};

export default UserDialog;
