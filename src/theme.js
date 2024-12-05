import { createTheme } from '@mui/material/styles';
import { grey, deepOrange, amber } from '@mui/material/colors';

const getTheme = () => createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: amber[700],
    },
    secondary: {
      main: deepOrange[400],
    },
    background: {
      default: grey[900],
      paper: grey[800],
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
    },
    h4: {
      fontSize: '1.5rem',
    },
  },
});

export default getTheme;
