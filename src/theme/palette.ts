import { PaletteMode } from '@mui/material';

export const light = {
  alternate: {
    //main: '#f7faff',
    main: '#fff',    
    dark: '#edf1f7',
  },
  cardShadow: 'rgba(23, 70, 161, .11)',
  mode: 'light' as PaletteMode,
  primary: {
    main: '#00c922',
    light: '#467de3',
    dark: '#2f6ad9',
    contrastText: '#fff',
  },
  secondary: {
    light: '#ffb74d',
    main: '#f9b934',
    dark: '#FF9800',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#1e2022',
    secondary: '#677788',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#ffffff',
    default: '#ffffff',
    level2: '#a3e5ff',
    level1: '#ffffff',
  },
};

export const dark = {
  alternate: {
    //main: '#1a2138',
    main: '#000',    
    dark: '#151a30',
  },
  cardShadow: 'rgba(0, 0, 0, .11)',
  common: {
    black: '#000',
    white: '#fff',
  },
  mode: 'dark' as PaletteMode,
  primary: {
    main: '#00c922',
    light: '#2196f3',
    dark: '#0d47a1',
    contrastText: '#fff',
  },
  secondary: {
    light: '#FFEA41',
    main: '#FFE102',
    dark: '#DBBE01',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#EEEEEF',
    secondary: '#AEB0B4',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#000',
    default: '#000',
    level2: '#333',
    level1: '#2D3748',
  },
};