import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  IntroText,
  Manga,
  Founders,
  Hero,
  Story,
  AboutBottom
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
          <Container maxWidth={800}>
            <IntroText />
          </Container>
          
          <Container marginTop={-13}>
            <Manga></Manga>
          </Container>  
          <Container>
            <Hero></Hero>
          </Container>  
          {/* <Container>
            <Story></Story>
          </Container> */}
          <Container>
            <AboutBottom></AboutBottom>
          </Container>
          <Container>
            <Founders></Founders>
          </Container>            
             
        </Box>
      </Main>
    </Box>
  );
};

export default IndexView;
