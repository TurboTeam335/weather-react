import React, { useState } from 'react';
import { IconButton, Menu } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import HistoryList from './HistoryList';

const MenuButton = ({ previousSearches, handleDeleteClick, handlePreviousSearchClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClickMenu}>
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <HistoryList
          previousSearches={previousSearches}
          handleCloseMenu={handleCloseMenu}
          handleDeleteClick={handleDeleteClick}
          anchorEl={anchorEl}
          handlePreviousSearchClick={handlePreviousSearchClick}
        />
      </Menu>
    </>
  );
};

export default MenuButton;
