/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Slider from 'react-slick';

const items = [
  {
    name: 'Random Name #1',
    description: 'Probably the most random thing you have ever seen!'
  },
  {
    name: 'Random Name #2',
    description: 'Hello World!'
  },
  {
    name: 'Random Name #3',
    description: 'Hello World!'
  },
  {
    name: 'Random Name #4',
    description: 'Hello World!'
  }    
];

const IntroText = (): JSX.Element => {
  const theme = useTheme();
  const sliderOpts = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Box>
      <Box marginBottom={0} marginTop={5} minHeight={120}>
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
              'https://assets.maccarianagency.com/backgrounds/img1.jpg',
              'https://assets.maccarianagency.com/backgrounds/img3.jpg',
              'https://assets.maccarianagency.com/backgrounds/img24.jpg',
              'https://assets.maccarianagency.com/backgrounds/img25.jpg',
            ].map((item) => (
              <Box
                key={item}
                component={LazyLoadImage}
                effect="blur"
                src={item}
                height={{ xs: 'auto', md: 1 }}
                maxHeight={{ xs: 300, md: 1 }}
                width={1}
                maxWidth={1}
              />
            ))}
          </Slider>          
          {/* <Carousel
            navButtonsAlwaysVisible={true}       
          >
            {
              items.map( (item, i) => 
                <Paper key={i} sx={ {padding: 10} }>
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                </Paper>              
              )
            }
          </Carousel>           */}
        </Box>
      </Box>
    </Box>
  );
};

export default IntroText;
