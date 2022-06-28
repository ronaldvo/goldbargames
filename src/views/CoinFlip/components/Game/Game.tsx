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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import SolIcon from '../../assets/SOL.png';
import CoinFlip from '../../assets/CoinFlip.svg';

const Game = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={6}>
        <Grid item container justifyContent={'center'} xs={12} md={12}>
          <Card variant="outlined">
            <CardContent>
              <Box marginBottom={6}>
                <Box marginBottom={5}>
                  <Typography sx={{ fontSize: 40 }} color="text.primary" gutterBottom>
                    Coin Flip
                  </Typography> 
                </Box>
                <Box
                  component={'img'}
                  src={CoinFlip}
                  height={1}
                  width={1}
                />                


                <h2>I choose</h2>
                <ButtonGroup fullWidth={true} size="large" variant="outlined">
                  <Button sx={{ fontSize: 20 }}>
                    <strong>HEADS</strong>&nbsp;
                  </Button>
                  <Button sx={{ fontSize: 20 }}>
                    <strong>TAILS</strong>&nbsp;
                  </Button>
                </ButtonGroup>
              </Box>              
              <Box marginBottom={2}>
                <h2>I want to bet</h2>
                <ButtonGroup fullWidth={true} size="large" variant="outlined">
                  <Button sx={{ fontSize: 20 }}>
                    <strong>0.05</strong>&nbsp;
                    <Box
                      marginLeft={1}
                      component={'img'}
                      src={SolIcon}
                    />
                  </Button>
                  <Button sx={{ fontSize: 20 }}>
                    <strong>0.1</strong>&nbsp;
                    <Box
                      marginLeft={1}
                      component={'img'}
                      src={SolIcon}
                    />
                  </Button>
                  <Button sx={{ fontSize: 20 }}>
                    <strong>0.25</strong>&nbsp;
                    <Box
                      marginLeft={1}
                      component={'img'}
                      src={SolIcon}
                    />
                  </Button>
                </ButtonGroup>
              </Box>
              <Box>
                <ButtonGroup fullWidth={true} size="large" variant="outlined">
                  <Button sx={{ fontSize: 20 }}>
                    <strong>0.5</strong>&nbsp;
                    <Box
                      marginLeft={1}
                      component={'img'}
                      src={SolIcon}
                    />
                  </Button>
                  <Button sx={{ fontSize: 20 }}>
                    <strong>0.75</strong>&nbsp;
                    <Box
                      marginLeft={1}
                      component={'img'}
                      src={SolIcon}
                    />
                  </Button>
                  <Button sx={{ fontSize: 20 }}>
                    <strong>1</strong>&nbsp;
                    <Box
                      marginLeft={1}
                      component={'img'}
                      src={SolIcon}
                    />
                  </Button>
                </ButtonGroup>  
              </Box>
              <Box marginTop={2}>
                <Button sx={{ fontSize: 20 }} fullWidth={true} variant="contained"><strong>Toss</strong></Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        {/* <Grid item container alignItems="center" xs={12} md={12}>
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
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default Game;
