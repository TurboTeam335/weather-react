import { styled } from '@mui/system';
import { Toolbar, IconButton } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import theme from './theme';


export const StyledToolbar = styled(Toolbar)`
  // display: flex;
  // justify-content: center;
  box-shadow: none;
  // background: ${(props) => props.theme.palette.background.default};
`;

export const SearchContainer = styled('div')`
  position: relative;
  // background: #4682B4;
  background: #000080;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  text-align: center;
`;

export const StyledInputBase = styled(InputBase)`
padding: 5px;
color: ${theme.palette.custom.white};

::placeholder {
  color: ${theme.palette.custom.white};
  opacity: 1; 
}
`;

export const StyledIconButton = styled(IconButton)`
  position: absolute;
  right: 0;
  color: ${theme.palette.custom.white};
`;

