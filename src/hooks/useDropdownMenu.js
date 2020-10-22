import { useState } from 'react';

const useDropdownMenu = () => {
  const [anchor, setAnchor] = useState(null);

  const openMenu = event => {
    setAnchor(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchor(null);
  };

  return { anchor, openMenu, closeMenu };
};

export default useDropdownMenu;
