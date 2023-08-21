import { Select, MenuItem } from '@mui/material';
import { useTheme } from '@mui/system';

const TemperatureSelector = ({ temperatureUnit, handleTemperatureChange }) => {
  const theme = useTheme();

  return (
    <Select
      value={temperatureUnit}
      onChange={handleTemperatureChange}
      MenuProps={{
        anchorScrolling: 'none', // This line disables scrolling anchoring
        getContentAnchorEl: null, // This line sets the content anchor to null
        PaperProps: {
          style: {
            backgroundColor: theme.palette.custom.blue,
            position: 'fixed', // This line makes the menu have a fixed position
          },
        },
      }}
      sx={{
        color: theme.palette.custom.white,
        '& .MuiSelect-select': {
          backgroundColor: 'transparent',
          paddingRight: '24px',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        '& .MuiSelect-icon': {
          color: theme.palette.custom.white,
        },
      }}
    >
      <MenuItem
        value='fahrenheit'
        sx={{
          color: theme.palette.custom.white,
        }}
      >
        °F
      </MenuItem>
      <MenuItem
        value='celsius'
        sx={{
          color: theme.palette.custom.white,
        }}
      >
        °C
      </MenuItem>
    </Select>
  );
};

export default TemperatureSelector;
