import { styled } from '@mui/system';

export const WeatherCardContainer = styled('div')(({ theme }) => ({
  color: theme.palette.custom.white,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  '& i': {
    fontSize: '13em',
    padding: '0 8%',
  },
  '& .temperature': {
    fontSize: '6em',
    margin: '0',
    lineHeight: '0.9em',
  },
  '& .description-container': {
    textAlign: 'center', 
  },
  '& .feels-like-description': {
    fontSize: '1.25em',
    margin: '0',
    lineHeight: '1.2em',
  },
}));




