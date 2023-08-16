import { styled } from '@mui/system';

export const TodayWeatherContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  width: '100%',
  paddingLeft: '10px',
  color: theme.palette.custom.white,
  lineHeight: '0.5em',
}));

export const ForecastContainer = styled('div')(({ theme }) => ({
  width: '100%', 
  backgroundColor: theme.palette.custom.blue,
  color: theme.palette.custom.white,
  borderRadius: '15px',
  
}));

export const ForecastItem = styled('div')(({ theme, showSlider }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', 
  textAlign: 'center', 
  fontSize: 20,
  width: '100%', 
  alignItems: 'center',
}));


