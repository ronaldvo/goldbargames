import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import Grid from '@mui/material/Grid';
import {
  IntroText,
  Game,
  Hero,
  GoldBarGames,
  Founders,
  Reviews
} from './components';

const IndexView = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
       
        <Box
          sx={{
            backgroundImage: `linear-gradient(to bottom, ${alpha(
              theme.palette.background.paper,
              0,
            )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
            backgroundRepeat: 'repeat-x',
            position: 'relative',
          }}
        >

          <Container>
            <GoldBarGames />
          </Container>                  
          <Container>
            <Hero />
          </Container>      
          <Container>
            <Grid container spacing={2}>
              <Grid
                xs={12}
                sm={8}
                md={8}
              >
                <Container>
                  <Founders />
                </Container>  
              </Grid>
              <Grid
                xs={12}
                sm={4}
                md={4}
              >
                <Container>
                  <Reviews />
                </Container>  
              </Grid>
            </Grid>
          </Container>

                
          <Container maxWidth={800}>
            <Game />
          </Container>  

        </Box>
      </Main>
    </Box>
  );
};

export default IndexView;
