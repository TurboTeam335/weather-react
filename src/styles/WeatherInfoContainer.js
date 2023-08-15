import { styled } from '@mui/system';

export const WeatherInfoContainer = styled('div')(({ theme }) => ({
  color: theme.palette.custom.white,
  display: 'flex',
  justifyContent: 'space-between', 
  flexWrap: 'wrap', 
  gap: '20px',
  width: '100%', 
  marginTop: '25px'
}));

export const WeatherDetail = styled('p')({
  textAlign: 'center',
  margin: '5px',
  fontSize: '1.25em',
  lineHeight: '0.9em'
});

export const WeatherDiv = styled('div')({
  flex: '1 0 30%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
 
});
