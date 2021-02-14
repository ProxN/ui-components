import { DefaultTheme } from 'styled-components';

const fontSizes = [12, 14, 16, 18, 24, 34, 46, 58, 72];
const fontFamily = "'Poppins', Helvetica, sans-serif";
const fontWeights = [400, 500, 700];

const colors = {
  primary: {
    light: '#66ABE6',
    main: '#3490de',
    dark: '#2F81C8',
  },
  secondary: {
    light: '#A1EFE9',
    main: '#6FE7DD',
    dark: '#64D0C7',
  },
  danger: {
    light: '#EA675A',
    main: '#e74c3c',
    dark: '#D04536',
  },
  warning: {
    light: '#F3CD33',
    main: '#f1c40f',
    dark: '#c19d0c',
  },
  success: {
    light: '#4ED486',
    main: '#2ecc71',
    dark: '#29B766',
  },
  bg: {
    light: '#EBF3FA',
    main: '#FFFFFF',
    dark: '#DADDE2',
  },
  borderColor: '#D6D6D6',
  textSecondary: 'rgba(0,0,0,.45)',
  text: 'rgba(0,0,0,.85)',
};

const Theme: DefaultTheme = {
  colors,
  fontFamily,
  fontSizes,
  fontSizeBase: '1.4rem',
  fontWeights,
  borderRadius: 0.4,
  lineHeight: 1.5,
};

export default Theme;
