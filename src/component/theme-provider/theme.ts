import { createTheme } from '@mui/material/styles';

// Extend the Theme interface
declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      mode: 'light' | 'dark';
      primary: {
        main: string;
      };
      background: {
        default: string;
      };
      text: {
        primary: string;
      };
    };
  }
}

// Create a custom theme
const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark'
    primary: {
      main: '#1976d2', // Example color
    },
    background: {
      default: '#fff', // Example background
    },
    text: {
      primary: '#000', // Example text color
    },
  },
});

export default theme;
