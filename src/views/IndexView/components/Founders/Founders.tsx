import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import testAvatar from '../../assets/ichigo.png';
import testAvatar2 from '../../assets/47.png';
import testAvatar3 from '../../assets/32.png';


const mock = [
  {
    name: 'ichigo',
    title: 'Artist',
    avatar: testAvatar,
  },
  {
    name: 'syro',
    title: 'Developer',
    avatar: testAvatar2,
  },
  {
    name: 'xtal',
    title: 'Developer',
    avatar: testAvatar3,
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
            variant={'h4'}
            gutterBottom
            align={'left'}
            sx={{ fontWeight: 700 }}
          >
            Founders
          </Typography>
          {/* <Typography
            variant={'h6'}
            component={'p'}
            color={'text.secondary'}
            align={'center'}
            data-aos="fade-up"
          >
            There arge many variations ohf passages of sorem gpsum ilable,
            <br />
            but the majority have suffered alteration in.
          </Typography> */}
        </Box>
        <Grid container spacing={4}>
          {mock.map((item, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
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
                  width={1}
                  height={1}
                  minHeight={420}
                  image={item.avatar}
                
                />
                <CardContent>
                  <ListItemText
                    primary={item.name}
                    secondary={item.title}
                    primaryTypographyProps={{ fontWeight: 700 }}
                  />
                  <Box marginTop={1}>
                    <IconButton
                      aria-label="twitter"
                      size={'small'}
                      color={'primary'}
                    >
                      <TwitterIcon />
                    </IconButton>
                  </Box>
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
