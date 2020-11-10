import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, MenuItem } from '@material-ui/core';

const CreateMenu = ({ anchor, closeMenu }) => {
  const { t } = useTranslation();

  const options = t('invoices.options', { returnObjects: true });

  const onOptionSelected = index => () => {
    //TODO switch to create component.
    closeMenu();
  };

  return (
    <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={closeMenu}>
      {options.map((option, index) => (
        <MenuItem key={index} onClick={onOptionSelected(index)}>
          {option.label}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default CreateMenu;
