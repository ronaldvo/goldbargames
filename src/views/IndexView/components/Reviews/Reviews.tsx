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
import Divider from '@mui/material/Divider';
import CoinFlip from '../../assets/coinflip.png';
import Roulette from '../../assets/roulette.png';
import Dice from '../../assets/dice.png';

const mock = [
  {
    feedback:
      'flipped and got 0.25 sol rugged by the fed!',
    name: 'ECsB...cinc',
    title: 'Coin Flip',
    avatar: CoinFlip,
    time: '1 second ago'
  },
  {
    feedback:
      'played roulette and tripled their bet to 0.75 sol!',
    name: 'AKfT...fjts',
    title: 'Roulette',
    avatar: Roulette,
    time: '1 second ago'
  },
  {
    feedback:
      'rolled dice and doubled their bet to 1 sol!',
    name: 'QHjR...htnf',
    title: 'Dice',
    avatar: Dice,
    time: '1 second ago'
  },
  {
    feedback:
      'flipped and got 0.05 sol rugged by the fed!',
    name: 'ECsB...cinc',
    title: 'Coin Flip',
    avatar: CoinFlip,
    time: '1 second ago'
  },
  {
    feedback:
      'played roulette and tripled their bet to 0.75 sol!',
    name: 'AKfT...fjts',
    title: 'Roulette',
    avatar: Roulette,
    time: '1 second ago'
  },
  {
    feedback:
      'played roulette and tripled their bet to 0.75 sol!',
    name: 'AKfT...fjts',
    title: 'Roulette',
    avatar: Roulette,
    time: '1 second ago'
  },
  {
    feedback:
      'rolled dice and doubled their bet to 1 sol!',
    name: 'QHjR...htnf',
    title: 'Dice',
    avatar: Dice,
    time: '1 second ago'
  },
  {
    feedback:
      'flipped and got 1 sol rugged by the fed!',
    name: 'ECsB...cinc',
    title: 'Coin Flip',
    avatar: CoinFlip,
    time: '1 second ago'
  },    
];

const Reviews = (): JSX.Element => {
  const theme = useTheme();

  const sliderOpts = {
    dots: false,
    vertical: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    rtl: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Box width={0.7} bgcolor={'background.card'}>
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
                  {/* <Typography align={'left'}>
                    <ListItemAvatar>
                      <Avatar src={item.avatar} />
                    </ListItemAvatar>                 
                    {item.feedback}
                  </Typography> */}
                  <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                    <ListItemAvatar>
                      <Avatar src={item.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      sx={{ margin: 0 }}
                      primary={item.name + ' ' + item.feedback}
                      secondary={item.title}
                    />
                  </ListItem>

                  <Typography align={'right'}>
                    <small>{item.time}</small>
                  </Typography>                  
                </CardContent>
                <Box flexGrow={1} />
                {/* <CardActions sx={{ paddingBottom: 2 }}>
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
                </CardActions> */}
              </Box>
              <Divider />
            </Box>
            
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Reviews;
