import { Theme, responsiveFontSizes } from '@mui/material';
import { createTheme, ComponentsOverrides } from '@mui/material/styles';
import shadows from './shadows';
import { light, dark } from './palette';

const getTheme = (mode: string, themeToggler: () => void): Theme =>
  responsiveFontSizes(
    createTheme({
      palette: mode === 'light' ? dark : dark,
      shadows: shadows(mode),
      typography: {
        h1: {
          fontFamily: '"mokoto glitch"',
        },
        h2: {
          fontFamily: '"mokoto glitch"',
        },
        h3: {
          fontFamily: '"mokoto glitch"',
        },
        h4: {
          fontFamily: '"mokoto glitch"',
        },
        // h5: {
        //   fontFamily: '"Press Start 2P"',
        // },
        // h6: {
        //   fontFamily: '"Press Start 2P"',
        // },
        fontFamily: 'Anek Malayalam',
        button: {
          fontFamily: 'mokoto glitch',
          textTransform: 'none',
          fontWeight: 'medium' as React.CSSProperties['fontWeight'],
        },
      },
      zIndex: {
        appBar: 1200,
        drawer: 1300,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              fontWeight: 400,
              borderRadius: 5,
              paddingTop: 10,
              paddingBottom: 10,
            },
            containedSecondary: mode === 'light' ? { color: 'white' } : {},
          } as ComponentsOverrides['MuiButton'],
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
          } as ComponentsOverrides['MuiInputBase'],
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
            input: {
              borderRadius: 5,
            },
          } as ComponentsOverrides['MuiOutlinedInput'],
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 8,
            },
          } as ComponentsOverrides['MuiCard'],
        },
      },
      themeToggler,
    }),
  );

export default getTheme;
