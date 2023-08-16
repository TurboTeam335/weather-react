import { styled } from '@mui/system';

export const DailyContainer = styled('Box')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column', // Add flex direction to stack children vertically
  backgroundColor: theme.palette.custom.blue,
  color: theme.palette.custom.white,
  borderRadius: '15px',
}));

export const StyledBox = styled('Box')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  width: '100%',
  paddingLeft: '10px',
  color: theme.palette.custom.white,
  lineHeight: '0.5em',
}));

export const DailyItemContainer = styled('Box')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '20px',
  width: '100%',
  padding: '8px',
  '& > div': {
    margin: '0 4px',
  },
  '@media (max-width: 768px)': {
    padding: '6px',
  },
  '@media (max-width: 480px)': {
    fontSize: '15px',
    margin: '0 .5px',
  },
}));
