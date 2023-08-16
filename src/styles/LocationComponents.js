import { styled } from '@mui/system';

export const LocationAndDateContainer = styled('div')(({ theme }) => ({
  color: theme.palette.custom.white, 
  margin: '0 18px',
}));

export const City = styled('h1')(({ theme }) => ({
  fontSize: '2em', 
  fontWeight: 600,
  fontFamily: theme.typography.fontFamily,
  margin: 0,
  padding: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.75em', 
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5em', 
  },
}));

export const DateText = styled('p')(({ theme }) => ({
  fontSize: '1em', 
  fontFamily: theme.typography.fontFamily,
  margin: 0,
  padding: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: '0.9em', 
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8em', 
  },
}));
