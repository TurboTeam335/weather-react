import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
  palette: {
    custom: {
      blue: 'rgba(16, 43, 109, .95)',
      white: '#E4EFFF',
      lightblue: '#6ED4FF',
    },
  },
  gradients: {
    weatherIcons:
      'linear-gradient(187deg, rgba(251,167,128,1) 18%, rgba(246,207,103,1) 50%)',
  },
});

export default theme;
