import React from 'react';
import { MenuItem, IconButton, Menu } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/system'; 

const HistoryList = ({
  previousSearches,
  handleCloseMenu,
  handleDeleteClick,
  anchorEl,
  handlePreviousSearchClick,
}) => {
  const theme = useTheme(); 

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        PaperProps={{
          style: {
            backgroundColor: theme.palette.custom.blue, 
            color: theme.palette.custom.white, 
          },
        }}
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
                  handlePreviousSearchClick(search.query);
                  handleCloseMenu();
                }}
              >
                {search.query}
              </div>
              <IconButton
                edge='end'
                aria-label='delete'
                onClick={() => handleDeleteClick(index)}
              >
                <CloseIcon 
                sx={{ color: theme.palette.custom.white }}
                />
              </IconButton>
            </div>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default HistoryList;
