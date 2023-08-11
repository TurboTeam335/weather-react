import './App.css';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Navbar />
    </ThemeProvider>
  );
}

export default App;
