import React from 'react';
import { useTranslation } from 'react-i18next';
import { ListItem, ListItemIcon, ListItemText, Menu, MenuItem } from '@material-ui/core';
import { Language } from '@material-ui/icons';
import useDropdownMenu from '../../../../hooks/useDropdownMenu';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const languages = t('languages', { returnObjects: true });

  const { anchor, openMenu, closeMenu } = useDropdownMenu();

  const handleLanguageChange = languageCode => () => {
    if (languageCode !== i18n.language) i18n.changeLanguage(languageCode);
    closeMenu();
  };

  return (
    <>
      <ListItem button onClick={openMenu}>
        <ListItemIcon>
          <Language />
        </ListItemIcon>
        <ListItemText primary={t('drawer.language')} />
      </ListItem>
      <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={closeMenu}>
        {languages.map((language, index) => (
          <MenuItem
            key={index}
            selected={i18n.language.startsWith(language.code)}
            onClick={handleLanguageChange(language.code)}>
            {language.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSelector;
