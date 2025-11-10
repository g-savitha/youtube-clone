export const THEME = {
  colors: {
    // Brand colors
    primary: {
      main: '#FF0000', // YouTube Red
      hover: '#FF1F1F',
      light: '#FF4444',
      dark: '#CC0000'
    },
    // Background colors
    background: {
      main: '#0F0F0F', // Main background
      secondary: '#272727', // Secondary background (cards, sidebars)
      hover: '#3F3F3F',
      paper: '#1F1F1F' // Elevated surfaces
    },
    // Text colors
    text: {
      primary: '#FFFFFF',
      secondary: '#AAAAAA',
      disabled: '#717171'
    },
    // UI colors
    border: '#303030',
    divider: '#272727',
    error: '#FF4444',
    success: '#2BA640',
    warning: '#F2A600'
  },

  spacing: {
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px'
  },

  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    desktopLg: '1440px',
    desktopXl: '1920px'
  },

  typography: {
    fontSizes: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      xxl: '24px',
      xxxl: '32px'
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    lineHeights: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75
    }
  },

  borderRadius: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '12px',
    pill: '9999px'
  },

  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.25)',
    md: '0 2px 4px rgba(0, 0, 0, 0.25)',
    lg: '0 4px 8px rgba(0, 0, 0, 0.25)'
  },

  transitions: {
    short: '0.15s ease-in-out',
    medium: '0.25s ease-in-out',
    long: '0.35s ease-in-out'
  }
}
