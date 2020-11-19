import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Menu, MenuItem } from '@material-ui/core';
import { setEditorData } from '../../../../slices/invoiceSlice';
import { getId } from '../../../../utils/editorUtils';

const ActionMenu = ({ anchor, menuData, closeMenu, openDeleteDialog }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const editorData = useSelector(state => state.invoice.editorData);

  const { id, type } = menuData || {};

  const handleEdit = () => {
    const { tableData, ...data } = menuData;
    dispatch(setEditorData({ ...editorData, ...data }));
  };

  const handleDelete = () => {
    closeMenu();
    openDeleteDialog(id);
  };

  const editLink = type !== undefined && `/invoices/${getId(type)}`;

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
