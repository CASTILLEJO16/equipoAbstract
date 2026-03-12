import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#dc2626',
      light: '#ef4444',
      dark: '#b91c1c',
    },
    secondary: {
      main: '#ea580c',
      light: '#f97316',
      dark: '#c2410c',
    },
    background: {
      default: '#FDF5E6',
      paper: '#ffffff',
    },
    text: {
      primary: '#2C1810',
      secondary: '#5D4037',
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 800,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    h3: {
      fontWeight: 800,
    },
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 500,
    },
    body2: {
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          fontWeight: 600,
          padding: '8px 24px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          transition: 'all 0.3s ease-in-out',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          fontWeight: 500,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: 24,
          paddingBottom: 24,
        },
      },
    },
  },
});
