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
  GamesSlider,
  GamesIconList
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
          <GamesSlider />
        </Container>     
        <Container marginTop={-6}>
          <Reviews />
        </Container>                  
      </Main>
    </Box>
  );
};

export default IndexView;
