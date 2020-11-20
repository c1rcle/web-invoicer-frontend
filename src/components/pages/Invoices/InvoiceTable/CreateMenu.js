import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Menu, MenuItem } from '@material-ui/core';
import { setError } from '../../../../slices/invoiceSlice';

const CreateMenu = ({ anchor, closeMenu }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const history = useHistory();

  const options = t('invoices.options', { returnObjects: true });

  const userData = useSelector(state => state.user.userData);

  const handleCreate = id => () => {
    if (id !== 'receipt' && userData.nip === null) {
      dispatch(setError('createInvoice'));
      return;
    }
    history.replace(`/invoices/${id}`);
  };

  return (
    <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={closeMenu}>
      {options.map((option, index) => (
        <MenuItem key={index} onClick={handleCreate(option.id)}>
          {option.label}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default CreateMenu;
