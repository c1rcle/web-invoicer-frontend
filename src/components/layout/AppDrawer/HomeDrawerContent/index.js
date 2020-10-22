import React from 'react';
import { List } from '@material-ui/core';
import LanguageSelector from '../common/LanguageSelector';
import ThemeSwitcher from '../common/ThemeSwitcher';
import Buttons from './Buttons';

const HomeDrawerContent = () => {
  return (
    <>
      <List>
        <LanguageSelector />
        <ThemeSwitcher />
      </List>
      <Buttons />
    </>
  );
};

export default HomeDrawerContent;
