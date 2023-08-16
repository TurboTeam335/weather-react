import { styled } from '@mui/system';

export const WeatherInfoContainer = styled('div')(({ theme }) => ({
  color: theme.palette.custom.white,
  display: 'flex',
  justifyContent: 'space-between', 
  flexWrap: 'wrap', 
  gap: '15px',
  width: '90%', 
  marginTop: '1em',
  // [theme.breakpoints.down('sm')]: {
  //   gap: '15px',
  // }
}));


export const WeatherDetail = styled('p')(({ theme }) => ({
  textAlign: 'center',
  margin: '5px',
  fontSize: '1em',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.9em',
  },
  lineHeight: '0.9em'
}));

export const WeatherDiv = styled('div')(({ theme }) => ({
  flex: '1 0 30%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    flex: '1 0 calc(33.3333% - 15px)',
  },
}));
