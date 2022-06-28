import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import SolIcon from '../../assets/SOL.png';
const mock = [
  {
    feedback:
      'Got rugged by the federal reserve!',
    name: 'ECsB...cinc',
    title: 'Coin Flip',
    avatar: SolIcon,
  },
  {
    feedback:
      'Tripled their bet of 0.25 sol to 0.75 sol!',
    name: 'AKfT...fjts',
    title: 'Roulette',
    avatar: SolIcon,
  },
  {
    feedback:
      'Doubled their bet of 0.5 sol to 1 sol!',
    name: 'QHjR...htnf',
    title: 'Dice',
    avatar: SolIcon,
  },
  {
    feedback:
      'Got rugged by the federal reserve!',
    name: 'ECsB...cinc',
    title: 'Coin Flip',
    avatar: SolIcon,
  },
  {
    feedback:
      'Tripled their bet of 0.25 sol to 0.75 sol!',
    name: 'AKfT...fjts',
    title: 'Roulette',
    avatar: SolIcon,
  },
  {
    feedback:
      'Tripled their bet of 0.25 sol to 0.75 sol!',
    name: 'AKfT...fjts',
    title: 'Roulette',
    avatar: SolIcon,
  },
  {
    feedback:
      'Doubled their bet of 0.5 sol to 1 sol!',
    name: 'QHjR...htnf',
    title: 'Dice',
    avatar: SolIcon,
  },
  {
    feedback:
      'Got rugged by the federal reserve!',
    name: 'ECsB...cinc',
    title: 'Coin Flip',
    avatar: SolIcon,
  },    
];

const Reviews = (): JSX.Element => {
  const theme = useTheme();

  const sliderOpts = {
    dots: false,
    vertical: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    rtl: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Box width={1}>
        <Slider {...sliderOpts}>
          {mock.map((item, i) => (
            <Box key={i}>
              <Box
                width={1}
                height={1}
                component={Card}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'left'}
                boxShadow={0}
                sx={{ bgcolor: 'transparent', backgroundImage: 'none' }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                  }}
                >
                  <Typography align={'left'}>
                    {item.feedback}
                  </Typography>
                </CardContent>
                <Box flexGrow={1} />
                <CardActions sx={{ paddingBottom: 2 }}>
                  <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                    <ListItemAvatar>
                      <Avatar src={item.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      sx={{ margin: 0 }}
                      primary={item.name}
                      secondary={item.title}
                    />
                  </ListItem>
                </CardActions>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Reviews;
