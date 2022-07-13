import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Container from 'components/Container';
import { Topbar, Sidebar, Footer, ThemeModeToggler, StatusBar } from './components';

import pages from '../navigation';

interface Props {
  children: React.ReactNode;
  colorInvert?: boolean;
  bgcolor?: string;
}

const Main = ({ children, colorInvert = false, bgcolor = 'transparent' }: Props): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = (): void => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = (): void => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  return (
    <Box>
      <Box bgcolor={bgcolor} position={'relative'} zIndex={theme.zIndex.appBar}>
        <Container
          paddingTop={'8px !important'}
          paddingBottom={'0 !important'}
        >
          <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
            {/* <Box>
              <ThemeModeToggler />
            </Box> */}
          </Box>
        </Container>
      </Box>
      <AppBar
        sx={{
          top: 0,
          zIndex: '5000',
          height: '35px',
          backgroundColor: theme.palette.background.level2,
        }}
        elevation={0}
      >
        <StatusBar             
          onSidebarOpen={handleSidebarOpen}
          pages={pages}
          colorInvert={trigger ? false : colorInvert}/>
      </AppBar>
      <AppBar
        position={'sticky'}
        sx={{
          top: 0,
          backgroundColor: trigger ? theme.palette.background.paper : bgcolor,
        }}
        elevation={trigger ? 1 : 0}
      >
        <Container paddingY={3}>
          <Topbar
            onSidebarOpen={handleSidebarOpen}
            pages={pages}
            colorInvert={trigger ? false : colorInvert}
          />
        </Container>
      </AppBar>
      <Box sx={{ display: { xs: 'none', s: 'none', md: 'flex' } }}>
        <Sidebar
          onClose={handleSidebarClose}
          open={open}
          variant="permanent"
          pages={pages}
        />
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <Sidebar
          onClose={handleSidebarClose}
          open={open}
          variant="temporary"
          pages={pages}
        />
      </Box>      
      <main>
        {children}
      </main>
    </Box>
    
  );
};

export default Main;
