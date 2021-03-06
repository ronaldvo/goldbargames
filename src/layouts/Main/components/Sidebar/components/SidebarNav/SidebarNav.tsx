import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Logo from '../../../../../assets/logo.png';
import coinflip from '../../../../../assets/coinflip.png';
import dice from '../../../../../assets/dice.png';
import roulette from '../../../../../assets/roulette.png';

import NavItem from './components/NavItem';

interface Props {
  pages: {
    landings: Array<PageItem>;
    company: Array<PageItem>;
    account: Array<PageItem>;
    secondary: Array<PageItem>;
    blog: Array<PageItem>;
    portfolio: Array<PageItem>;
  };
}

const SidebarNav = ({ pages }: Props): JSX.Element => {
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

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="Gold Bar Games"
          sx={{ textDecoration: 'none', justifyContent: 'center' }}
        >          
          <Box
            component={'img'}
            src={
              Logo
            }
            height='70px'
            padding={0}
            width='auto'
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={4}>
        <Box marginBottom={2}>
          <Button
            size={'large'}
            component={'a'}
            href={'/coinflip'}
            fullWidth
            sx={{
              justifyContent: 'center',
              color: '#fff !important',
              backgroundColor:'transparent',
              fontWeight: 400,
              fontSize: '1rem'
            }}
          >
            <Box
              component={'img'}
              src={
                coinflip
              }
              height='60px'
              width='auto'
            />
          </Button>
        </Box>
        <Box marginBottom={2}>
          <Button
            size={'large'}
            component={'a'}
            href={'/dice'}
            fullWidth
            sx={{
              justifyContent: 'center',
              color: '#fff !important',
              backgroundColor:'transparent',
              fontWeight: 400,
              fontSize: '1rem'
            }}
          >
            <Box
              component={'img'}
              src={
                dice
              }
              height='35px'
              width='auto'
            />
          </Button>
        </Box>   
        <Box>
          <Button
            size={'large'}
            component={'a'}
            href={'/roulette'}
            fullWidth
            sx={{
              justifyContent: 'center',
              color: '#fff !important',
              backgroundColor:'transparent',
              fontWeight: 400,
              fontSize: '1rem'
            }}
          >
            <Box
              component={'img'}
              src={
                roulette
              }
              height='60px'
              width='auto'
            />
          </Button>
        </Box>             
        <Box sx={{ display: { xs: 'flex', md: 'none' } }} marginTop={2}>
          <Button
            aria-label="Menu"
            variant={'outlined'}
            fullWidth
            sx={{
              borderRadius: 2,
              minWidth: 'auto',
            }}><b>CONNECT WALLET</b></Button>
        </Box>   
        <Box sx={{ display: { xs: 'flex', md: 'none' } }} marginTop={2}>
          <Button
            component={'a'}
            size={'small'}
            href={'/leaderboard'}
            aria-label="Menu"
            variant={'outlined'}
            fullWidth
            sx={{
              borderRadius: 2,
              minWidth: 'auto',
            }}><b>Leaderboard</b></Button>
        </Box>    
        <Box sx={{ display: { xs: 'flex', md: 'none' } }} marginTop={2}>
          <Button
            component={'a'}
            size={'small'}
            href={'/challenges'}
            aria-label="Menu"
            variant={'outlined'}
            fullWidth
            sx={{
              borderRadius: 2,
              minWidth: 'auto',
            }}><b>Challenges</b></Button>
        </Box>     
        <Box sx={{ display: { xs: 'flex', md: 'none' } }} marginTop={2}>
          <Button
            component={'a'}
            size={'small'}
            href={'/about'}
            aria-label="Menu"
            variant={'outlined'}
            fullWidth
            sx={{
              borderRadius: 2,
              minWidth: 'auto',
            }}><b>About</b></Button>                                    
        </Box>  
        {/*<Box>
          <NavItem title={'Pages'} items={secondaryPages} />
        </Box>
         <Box>
          <NavItem title={'Account'} items={accountPages} />
        </Box>
        <Box>
          <NavItem title={'Blog'} items={blogPages} />
        </Box>
        <Box>
          <NavItem title={'Portfolio'} items={portfolioPages} />
        </Box> */}
        {/* <Box marginTop={2}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="blank"
            href="https://MUI.com/store/items/the-front-landing-page/"
          >
            Connect Wallet
          </Button>
        </Box> */}
      </Box>
    </Box>
  );
};

export default SidebarNav;
