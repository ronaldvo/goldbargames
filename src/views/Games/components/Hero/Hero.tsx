import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import Typed from 'react-typed';

import logo from '../../assets/logo.svg';

const Hero = (): JSX.Element => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid
        item
        container
        alignItems={'center'}
        justifyContent={'center'}
        xs={12}
        md={12}
        sx={{
          '& .lazy-load-image-background.lazy-load-image-loaded': {
            width: '100%',
            height: '100%',
          }
        }}
      >
        <Box
          component={LazyLoadImage}
          height={1}
          width={1}
          src={logo}
          alt="..."
          borderRadius={2}
          maxWidth={400}
          maxHeight={400}

        />
      </Grid>      
      <Grid item container xs={12} md={6} alignItems={'center'}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="text.primary"
              sx={{ fontWeight: 700 }}
            >
              All the
              <br />
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
              >
                Gold Bar Games!
              </Typography>            
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">
            List all games here.
            </Typography>
          </Box>      
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
