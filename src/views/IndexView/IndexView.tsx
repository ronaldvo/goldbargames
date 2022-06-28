import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import Grid from '@mui/material/Grid';
import {
  IntroText,
  Hero,
  GoldBarGames,
  Founders,
  Reviews,
  GamesSlider
} from './components';

const IndexView = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Main bgcolor={'background.default'}>
        <Container>
          <GoldBarGames />
        </Container>   
        <Container>
          <Reviews />
        </Container>            
        <Container>
          <GamesSlider />
        </Container>                               
        {/* <Container>
          <Grid container spacing={2}>
            <Grid
              xs={12}
              sm={8}
              md={8}
            >

            </Grid>
            <Grid
              xs={12}
              sm={4}
              md={4}
            >

            </Grid>
          </Grid>
        </Container> */}
      </Main>
    </Box>
  );
};

export default IndexView;
