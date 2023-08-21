import React, { useState } from 'react';
import { IconButton, Menu } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import HistoryList from './HistoryList';
import { useTheme } from '@mui/system';
import './styles/MenuButton.css'

const MenuButton = ({ previousSearches, handleDeleteClick, handlePreviousSearchClick }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  

  return (
    <>
      <IconButton onClick={handleClickMenu} sx={{ color: theme.palette.custom.white }}>
        <MenuIcon />
      </IconButton>
      <Menu
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}
  onClose={handleCloseMenu}
  disableScrollLock={true}
  PaperProps={{
    style: {
      backgroundColor: theme.palette.custom.blue,
      color: theme.palette.custom.white,
      position: 'fixed' // Add this line
    },
  }}
>

        <HistoryList
          previousSearches={previousSearches}
          handleCloseMenu={handleCloseMenu}
          handleDeleteClick={handleDeleteClick}
          anchorEl={anchorEl}
          handlePreviousSearchClick={handlePreviousSearchClick}
          style={{
            backgroundColor: theme.palette.custom.blue, 
            color: theme.palette.custom.white, 
          }}
        />
      </Menu>
    </>
  );
};

export default MenuButton;
