import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, MenuItem } from '@material-ui/core';

const CreateMenu = ({ anchor, closeMenu }) => {
  const { t } = useTranslation();

  const options = t('invoices.options', { returnObjects: true });

  return (
    <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={closeMenu}>
      {options.map((option, index) => (
        <MenuItem component={Link} to={`/invoices/${option.id}`} key={index}>
          {option.label}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default CreateMenu;
