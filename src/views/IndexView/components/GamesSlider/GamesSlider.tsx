import React from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import coinflip from '../../assets/coinflip.png';
import dice from '../../assets/dice.png';
import roulette from '../../assets/roulette.png';

const mock = [
  {
    media: coinflip,
    title: 'Coin Flip',
    subtitle:
      'Flip heads or tails to double your money.',
    link: '/coinflip'
  },
  {
    media: dice,
    title: 'Dice',
    subtitle:
      'Classic game of guessing dice.',
    link: '/dice'      
  },
  {
    media: roulette,
    title: 'Roulette',
    subtitle:
      'Play roulette for a chance to triple your money.',
    link: '/roulette'
  },
  {
    media: coinflip,
    title: 'Coin Flip',
    subtitle:
      'Flip heads or tails to double your money.',
    link: '/coinflip'
  },
];

const GamesSlider = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const sliderOpts = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: isMd ? 3 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
        >
          Games
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          9 different gold bar games
        </Typography>
        <Box display="flex" justifyContent={'flex-start'} marginTop={2}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            href="/games"
            endIcon={
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={24}
                height={24}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </Box>
            }
          >
            View all
          </Button>
        </Box>
      </Box>
      <Box
        data-aos={'fade-up'}
        maxWidth={{ xs: 420, sm: 620, md: 1 }}
        margin={'0 auto'}
      >
        <Slider {...sliderOpts}>
          {mock.map((item, i) => (
            <Box key={i} padding={{ xs: 1, md: 2, lg: 3 }} boxShadow={0}>
              <Box
                display={'block'}
                width={1}
                height={1}
                sx={{
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: `translateY(-${theme.spacing(1 / 2)})`,
                  },
                }}
              >
                <Box
                  component={Card}
                  variant="outlined"
                  bgcolor={'background.card'}
                  width={1}
                  height={1}
                  display={'flex'}
                  flexDirection={'column'}
                  sx={{ backgroundImage: 'none', padding: 3 }}
                >
                  <CardMedia
                    title={item.title}
                    image={item.media}
                    sx={{
                      position: 'relative',
                      height: { xs: 240, sm: 340, md: 290 },
                      width: 'auto',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      component={'svg'}
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      x="5px"
                      y="5px"
                      viewBox="0 0 1921 273"
                      sx={{
                        position: 'absolute',
                        // height: '250px',
                        // width: 'auto',
                        left: 0,
                        bottom: 0,
                        right: 0,
                        zIndex: 1,
                      }}
                    >

                    </Box>
                  </CardMedia>
                  <CardContent>
                    <Typography
                      variant={'h4'}
                      gutterBottom
                      align={'left'}
                      sx={{ fontWeight: 700 }}
                    >
                      {item.title}
                    </Typography>
                    {/* <Typography align={'left'} color={'text.secondary'}>
                      {item.subtitle}
                    </Typography> */}
                  </CardContent>
                  <Box flexGrow={1} />
                  <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button variant="contained" href={item.link}>Play</Button>
                  </CardActions>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default GamesSlider;
