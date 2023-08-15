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
        PaperProps={{
          style: {
            backgroundColor: theme.palette.custom.blue, // Set the background color
            color: theme.palette.custom.white, // Set the text color
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
            backgroundColor: theme.palette.custom.blue, // Set the background color for HistoryList
            color: theme.palette.custom.white, // Set the text color for HistoryList
          }}
        />
      </Menu>
    </>
  );
};

export default MenuButton;
