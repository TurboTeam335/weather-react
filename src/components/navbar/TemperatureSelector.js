import { Select, MenuItem } from '@mui/material';

const TemperatureSelector = ({ temperatureUnit, handleTemperatureChange }) => (
  
  <Select
    value={temperatureUnit}
    onChange={handleTemperatureChange}
  >
    <MenuItem value='fahrenheit'>°F</MenuItem>
    <MenuItem value='celsius'>°C</MenuItem>
  </Select>
);

export default TemperatureSelector;
