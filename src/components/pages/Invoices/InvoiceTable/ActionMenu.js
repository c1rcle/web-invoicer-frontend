import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Menu, MenuItem } from '@material-ui/core';
import { deleteInvoice, setEditorData } from '../../../../slices/invoiceSlice';
import { getId } from '../../../../utils/editorUtils';

const ActionMenu = ({ anchor, menuData, closeMenu }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { id, type } = menuData || {};

  const handleEdit = () => {
    dispatch(setEditorData(menuData));
  };

  const handleDelete = () => {
    closeMenu();
    dispatch(deleteInvoice(id));
  };

  const editLink = type && `/invoices/${getId(type)}`;

  return (
    <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={closeMenu}>
      <MenuItem component={Link} to={editLink} onClick={handleEdit}>
        {t('table.edit')}
      </MenuItem>
      <MenuItem onClick={handleDelete}>{t('table.delete')}</MenuItem>
    </Menu>
  );
};

export default ActionMenu;
