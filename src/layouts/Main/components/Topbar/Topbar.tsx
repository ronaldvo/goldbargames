import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';
import { NavItem } from './components';
import TwitterIcon from '@mui/icons-material/Twitter';
import Logo from '../../../assets/logo.svg';
import Discord from '../../../assets/discord.svg';
import MagicEden from '../../../assets/ME.png';
import './topbar.css';
import { ThemeModeToggler } from '../../components';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onSidebarOpen: () => void;
  pages: {
    landings: Array<PageItem>;
    company: Array<PageItem>;
    account: Array<PageItem>;
    secondary: Array<PageItem>;
    blog: Array<PageItem>;
    portfolio: Array<PageItem>;
  };
  colorInvert?: boolean;
}


function getRandomInt(max) {
  return Math.floor(Math.random() * (max - 1 + 1) + 1);
}

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  const logo = Logo;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >        
      <Box
        sx={{ display: { xs: 'none', md: 'flex' } }} 
      >
        <Box>
          <Button
            component={'a'}
            href={'/games'}          
            aria-label="Menu"
            variant={'outlined'}
            sx={{
              borderRadius: 2,
              minWidth: 'auto',
            }}><b>Games</b></Button>
        </Box> 
        <Box marginLeft={2}>
          <Button
            component={'a'}
            href={'/leaderboard'}
            aria-label="Menu"
            variant={'outlined'}
            sx={{
              borderRadius: 2,
              minWidth: 'auto',
            }}><b>Leaderboard</b></Button>
        </Box>           
        <Box marginLeft={2}>
          <Button
            component={'a'}
            href={'/challenges'}
            aria-label="Menu"
            variant={'outlined'}
            sx={{
              borderRadius: 2,
              minWidth: 'auto',
            }}><b>Challenges</b></Button>
        </Box>            
        <Box marginLeft={2}>
          <Button
            component={'a'}
            href={'/about'}
            aria-label="Menu"
            variant={'outlined'}
            sx={{
              borderRadius: 2,
              minWidth: 'auto',
            }}><b>About</b></Button>
        </Box>        
      </Box>
      <Box
        sx={{ display: { xs: 'flex', md: 'none' } }} 
      >
        <Box>
          <Button
            component={'a'}
            size={'small'}
            href={'/games'}          
            aria-label="Menu"
            variant={'outlined'}
            sx={{
              borderRadius: 2,
              minWidth: 'auto',
            }}><b>Games</b></Button>
        </Box>        
      </Box>      
      <Box sx={{ display: { xs: 'none', s: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box marginLeft={3} paddingTop={0.7}>
          <Link
            underline="none"
            component="a"
            href="https://twitter.com/GoldBarGames_"
            color="primary.main"
            variant={'body1'}
            target="_blank"
            fontSize="large"
          >
            <TwitterIcon fontSize="large"/> 
          </Link>
        </Box>   
        <Box marginLeft={2} paddingTop={0.7}>
          <Link
            underline="none"
            component="a"
            href="https://discord.gg/tWWe4WpwHC"
            color="primary.main"
            variant={'body1'}
            target="_blank"
            fontSize="large"
          >
            <Box
              component={'img'}
              src={Discord}
              height='35px'
              width={1}
            />
          </Link>
        </Box>    
        <Box marginLeft={2} paddingTop={0.7}>
          <Link
            underline="none"
            component="a"
            href="https://magiceden.io/marketplace/gold_bar_games"
            color="primary.main"
            variant={'body1'}
            target="_blank"
            fontSize="large"
          >
            <Box
              component={'img'}
              src={MagicEden}
              height='20px'
              width={1}
            />
          </Link>
        </Box>                
        <Box marginLeft={2}>
          <Button
            aria-label="Menu"
            variant={'outlined'}
            sx={{
              borderRadius: 2,
              minWidth: 'auto',
            }}><b>CONNECT WALLET</b></Button>
        </Box>                       
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>                 
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
