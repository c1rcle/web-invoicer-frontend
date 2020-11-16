import { useState } from 'react';

const useDropdownMenu = () => {
  const [menuData, setMenuData] = useState(null);

  const [anchor, setAnchor] = useState(null);

  const openMenu = (event, data) => {
    setAnchor(event.currentTarget);
    data && setMenuData(data);
  };

  const closeMenu = () => setAnchor(null);

  return { anchor, menuData, openMenu, closeMenu };
};

export default useDropdownMenu;
