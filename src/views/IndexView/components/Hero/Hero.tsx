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
      <Grid item container xs={12} md={6} alignItems={'center'}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="text.primary"
              sx={{ fontWeight: 700 }}
            >
              Welcome to
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
            500 Revenue sharing Gold Bars that grant you passive income from Gold Bar Games &amp; secondary sales of Gold Bars. Gold Bar Games will start out with Gold Coin Flip, Roulette &amp; Dice Roll, and add more games every month. We aim to have 15+ revenue-generating games in the next 6-8 months. The Gold Bar DAO community will also get to vote on what games they would like to see next.
            </Typography>
          </Box>      
        </Box>
      </Grid>
      <Grid
        item
        container
        alignItems={'center'}
        justifyContent={'center'}
        xs={12}
        md={6}
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
    </Grid>
  );
};

export default Hero;
