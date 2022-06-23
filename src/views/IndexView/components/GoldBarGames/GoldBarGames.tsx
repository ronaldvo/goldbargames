import React from 'react';
import Slider from 'react-slick';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';
import Container from 'components/Container';
import bismuth from '../../assets/BISMUTH.gif';
import gold from '../../assets/GOLD.gif';
import tungsten from '../../assets/TUNGTEN.gif';

const GoldBarGames = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const LeftSide = () => (
    <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'text.secondary'}
      >
        WELCOME TO
      </Typography>
      <Box marginBottom={2}>
        <Typography
          variant="h2"
          color="text.primary"
          sx={{
            fontWeight: 700,
          }}
        >
          Gold Bar Games
        </Typography>
      </Box>
      <Box marginBottom={3}>
        <Typography variant="h6" component="p" color="text.secondary">
          500 Revenue sharing Gold Bars that grant you passive income from Gold Bar Games &amp; secondary sales of Gold Bars. Gold Bar Games will start out with Gold Coin Flip, Roulette &amp; Dice Roll, and add more games every month. We aim to have 15+ revenue-generating games in the next 6-8 months. The Gold Bar DAO community will also get to vote on what games they would like to see next.
        </Typography>
      </Box>

    </Box>
  );

  const RightSide = (): JSX.Element => {
    const sliderOpts = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,      
    };

    return (
      <Box
        sx={{
          height: { xs: 'auto', md: 1 },
          '& .slick-slide img': {
            objectFit: 'cover',
          },
          '& .slick-list, & .slick-slider, & .slick-track, & .slick-slide > div': {
            height: { xs: 'auto', md: 1 },
          },
          '& .slick-prev, & .slick-next': {
            zIndex: 2,
            bottom: 0,
            top: '100%',
            left: '100%',
            right: 0,
            transform: `translate(-100%, calc(-100% - ${theme.spacing(2)}))`,
            marginLeft: theme.spacing(-2),
            width: 32,
            height: 32,
            '&:before': {
              fontSize: 32,
            },
          },
          '& .slick-prev': {
            marginLeft: theme.spacing(-7),
          },
          '& .lazy-load-image-loaded': {
            height: 1,
            width: 1,
          },
        }}
      >
        <Slider {...sliderOpts}>
          {[
            'https://somethingborrowedpdx.com/wp-content/uploads/2021/07/7-Tips-to-Buy-Gold-Bars-Where-How.jpg',
            'https://ichef.bbci.co.uk/news/976/cpsprodpb/162B3/production/_104730809_tv049759492.jpg',
            'https://cdn.britannica.com/69/107069-050-C2406D3B/bars-New-York-Assay-Office-US-Mint.jpg',

          ].map((item) => (
            <Box
              key={item}
              component={LazyLoadImage}
              effect="blur"
              src={item}
              height={{ xs: 'auto', md: 1 }}
              maxHeight={{ xs: 300, md: 400 }}
              width={1}
              maxWidth={1}
            />
          ))}
        </Slider>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'column' }}
          position={'relative'}
          minHeight={{ xs: 'auto', md: 400 }}
        >
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 100%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '100%' },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: 1 },
                height: '100%',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    left: '0%',
                    width: 1,
                    height: 1,
                    position: { xs: 'relative', md: 'relative' },

                  }}
                >
                  <RightSide />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider />
    </Box>
  );
};

export default GoldBarGames;
