/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import testAvatar2 from '../../assets/47.png';
import testAvatar3 from '../../assets/32.png';
import storyPanel from '../../assets/storyPanel.jpg';

const AboutBottom = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item container justifyContent={'center'} xs={12} md={6}>
          <Box
            component={LazyLoadImage}
            effect="blur"
            src={storyPanel}
            width={1}
            height={1}
            maxWidth={500}
            sx={{
              border: '10px solid white',
            }}            
          />
        </Grid>
        <Grid item container alignItems="center" xs={12} md={6}>
          <Box>
            <Typography
              variant="h4"
              data-aos={'fade-up'}
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              Story
            </Typography>
            <Typography data-aos={'fade-up'}>
                In the near future, the entire world economy runs on Cardano. However, Mega Corporations have gained influence over governance of the protocol. 
                A team of anonymous hackers called the Punks is fighting back for the freedom of humanity. Ada Ichigo's next mission for the Punks is her most important yet. 
                As a last resort while on the run from the Mega Corporations, Ada uploads her consciousness 
                onto the blockchain. 
              <br/><br/>
                Help Ada clone her consiousness by minting an Ichigo Punk NFT. Follow and influence Ada's quest to take down the Mega corporations. 
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutBottom;
