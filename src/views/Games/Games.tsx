import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import Grid from '@mui/material/Grid';
import {
  Hero
} from './components';

const Games = (): JSX.Element => {
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
            <Hero />
          </Container>  

        </Box>
      </Main>
    </Box>
  );
};

export default Games;
