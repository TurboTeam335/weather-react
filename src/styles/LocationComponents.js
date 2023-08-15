import { styled } from '@mui/system';
import theme from './theme';


export const LocationAndDateContainer = styled('div')`
  color: ${theme.palette.custom.white}; // Using the custom white color from the theme
`;

export const City = styled('h1')`
font-size: 2.5em;
font-weight: 600;
  font-family: ${theme.typography.fontFamily}; 
  margin: 0;
  padding: 0;
`;

export const DateText = styled('p')`
  font-size: 1.25em;
  font-family: ${theme.typography.fontFamily}; 
  margin: 0;
  padding: 0;
`;