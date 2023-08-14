import React from 'react';
import { MenuItem, IconButton, Menu } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const HistoryList = ({
  previousSearches,
  handleCloseMenu,
  handleDeleteClick,
  anchorEl, // Add anchorEl as a prop
  handlePreviousSearchClick, // Add handlePreviousSearchClick as a prop
}) => {
  return (
    <>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        {previousSearches.map((search, index) => (
          <MenuItem key={index}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <div
                onClick={() => {
                  handlePreviousSearchClick(search.query); // Call the new function with the chosen city
                }}
              >
                {search.query}
              </div>
              <IconButton
                edge='end'
                aria-label='delete'
                onClick={() => handleDeleteClick(index)}
              >
                <CloseIcon />
              </IconButton>
            </div>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default HistoryList;
