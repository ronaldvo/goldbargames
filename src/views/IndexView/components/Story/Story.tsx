import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import about from '../../assets/whatis.gif';
import reveal from '../../assets/glitchreveal.gif';
import storyPanel from '../../assets/storyPanel.jpg';
import Typed from 'react-typed';

const Story = (): JSX.Element => {
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
          src={reveal}
          alt="..."
          borderRadius={2}
          maxWidth={600}
          maxHeight={600}
          sx={{
            objectFit: 'cover',
            boxShadow: '19px 20px 0px 0 rgb(140 152 164 / 13%)',
          }}
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
              What is
              <br />
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
                sx={{
                  background: `linear-gradient(180deg, transparent 82%, ${alpha(theme.palette.secondary.main, 0.3)} 0%)`,
                }}
              >
                ichigo punks?
              </Typography>
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
                sx={{
                  background: `linear-gradient(180deg, transparent 82%, ${alpha(theme.palette.secondary.main, 0.3)} 0%)`,
                }}
              >
                <Typed
                  strings={
                    [
                      '',
                    ]
                  }
                  typeSpeed={30}
                  loop={false}
                />
              </Typography>              
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">
                Not your typical CNFT, and much more than a PFP. 
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">
                Experience the story of Ada Ichigo,
                a hacker on the run who has uploaded her consciousness to the Cardano blockchain. 
                Follow us on twitter for updates about our upcoming discord server!
            </Typography>
          </Box>          
        </Box>
      </Grid>
    </Grid>
  );
};

export default Story;
