import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

export const GlobalStyles = () => (
  <MuiGlobalStyles
    styles={(theme) => ({
      '@keyframes fadeIn': {
        from: {
          opacity: 0,
          transform: 'translateY(20px)',
        },
        to: {
          opacity: 1,
          transform: 'translateY(0)',
        },
      },
      '@keyframes slideIn': {
        from: {
          opacity: 0,
          transform: 'translateX(-20px)',
        },
        to: {
          opacity: 1,
          transform: 'translateX(0)',
        },
      },
      '@keyframes pulse': {
        '0%': {
          transform: 'scale(1)',
        },
        '50%': {
          transform: 'scale(1.05)',
        },
        '100%': {
          transform: 'scale(1)',
        },
      },
      body: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        '&::before': {
          content: '""',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255, 255, 255, 0.9)',
          zIndex: -1,
        },
      },
      '.fade-in': {
        animation: 'fadeIn 0.5s ease-in-out',
      },
      '.slide-in': {
        animation: 'slideIn 0.5s ease-in-out',
      },
      '.pulse': {
        animation: 'pulse 2s infinite',
      },
    })}
  />
);

export default GlobalStyles;
