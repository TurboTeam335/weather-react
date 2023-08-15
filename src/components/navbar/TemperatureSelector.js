import { Select, MenuItem } from '@mui/material';
import { useTheme } from '@mui/system';

const TemperatureSelector = ({ temperatureUnit, handleTemperatureChange }) => {
  const theme = useTheme();

  return (
    <Select
      value={temperatureUnit}
      onChange={handleTemperatureChange}
      MenuProps={{
        PaperProps: {
          style: {
            backgroundColor: theme.palette.custom.blue,
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
