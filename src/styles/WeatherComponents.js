import { styled } from '@mui/system';

export const WeatherCardContainer = styled('div')(({ theme }) => ({
  color: theme.palette.custom.white,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  '& i': {
    fontSize: '10em',
    [theme.breakpoints.down('md')]: {
      fontSize: '8em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '6em',
    },
    padding: '0 8%',
  },
  '& .temperature': {
    fontSize: '4em',
    [theme.breakpoints.down('md')]: {
      fontSize: '3.5em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5em',
    },
    margin: '0',
    lineHeight: '0.9em',
  },
  '& .feels-like-description': {
    fontSize: '1em',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.9em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8em',
    },
    margin: '0',
    lineHeight: '1.2em',
  },
}));




