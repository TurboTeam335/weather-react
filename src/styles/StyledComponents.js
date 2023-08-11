import { styled } from '@mui/system';
import { Toolbar, IconButton } from '@mui/material';
import InputBase from '@mui/material/InputBase';


export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.palette.background.default};
`;

export const SearchContainer = styled('div')`
  position: relative;
  background: #668EBC;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 65px;
`;

export const StyledInputBase = styled(InputBase)`
  padding: 5px;
  color: ${(props) => props.theme.palette.text.primary};
  flex-grow: 1;

  ::placeholder {
    color: ${(props) => props.theme.palette.text.primary};
    opacity: 1; 
  }
`;

export const StyledIconButton = styled(IconButton)`
  position: absolute;
  right: 0;
  color: ${(props) => props.theme.palette.text.primary};
`;