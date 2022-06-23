import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import ListItemText from '@mui/material/ListItemText';
import dice from '../../assets/dice.svg';
import roulette from '../../assets/roulette.svg';
import coinflip from '../../assets/coin-flip.svg';

const mock = [
  {
    name: 'Dice',
    avatar: dice,
  },
  {
    name: 'Coin Flip',
    avatar: coinflip,
  },
  {
    name: 'Roulette',
    avatar: roulette,
  },
];

const Founders = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '105%',
          height: '105%',
          zIndex: 1,
          // top: '-15px',
          // left: '-30px',
          // backgroundSize: '15px 15px',
          // backgroundImage: `radial-gradient(${alpha(theme.palette.primary.main, 0.5)} 30%, transparent 30%)`,
          opacity: 0.2,
        },
      }}
    >
      <Box zIndex={2} position={'relative'}>
        <Box marginBottom={4}>
          <Typography
            variant={'h2'}
            color='text.primary'
            gutterBottom
            align={'left'}
            sx={{ fontWeight: 700 }}
          >
            Games
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {mock.map((item, i) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              key={i}
              data-aos={'fade-up'}
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
            >
              <Box component={Card} boxShadow={1} bgcolor={'transparent'}
                sx={{
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: `translateY(-${theme.spacing(1 / 2)})`,
                  },
                  
                }}                
              >
                <Box
                  component={CardMedia}
                  borderRadius={2}
                  minHeight={225}
                  image={item.avatar}
                
                />
                <CardContent>
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{ fontWeight: 700, fontSize: 25 }}
                  />
                  {/* <Box marginTop={1}>
                    <IconButton
                      aria-label="twitter"
                      size={'small'}
                      color={'primary'}
                    >
                      <TwitterIcon />
                    </IconButton>
                  </Box> */}
                </CardContent>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Founders;
