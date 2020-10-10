import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ListItem, ListItemIcon, ListItemText, Menu, MenuItem } from '@material-ui/core';
import { Language } from '@material-ui/icons';

const LanguageSelector = () => {
  const [anchor, setAnchor] = useState(null);

  const { t, i18n } = useTranslation();

  const languages = t('languages', { returnObjects: true });

  const handleClick = event => {
    setAnchor(event.currentTarget);
  };

  const handleLanguageChange = index => {
    const languageCode = languages[index].code;
    if (languageCode !== i18n.language) i18n.changeLanguage(languages[index].code);
    setAnchor(null);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <Language />
        </ListItemIcon>
        <ListItemText primary={t('drawer.language')} />
      </ListItem>
      <Menu keepMounted anchorEl={anchor} open={Boolean(anchor)} onClose={() => setAnchor(null)}>
        {languages.map((language, index) => (
          <MenuItem
            key={index}
            selected={i18n.language.startsWith(language.code)}
            onClick={() => handleLanguageChange(index)}>
            {language.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSelector;
