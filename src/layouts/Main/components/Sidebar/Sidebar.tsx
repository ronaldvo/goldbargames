import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { SidebarNav } from './components';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClose: () => void;
  open: boolean;
  variant: 'permanent' | 'persistent' | 'temporary' | undefined;
  pages: {
    landings: Array<PageItem>;
    company: Array<PageItem>;
    account: Array<PageItem>;
    secondary: Array<PageItem>;
    blog: Array<PageItem>;
    portfolio: Array<PageItem>;
  };
}

const Sidebar = ({ pages, open, variant, onClose }: Props): JSX.Element => {
  return (
    <Box>
      <Box sx={{ display: { xs: 'none', md: 'block' } }} >
        <Drawer
          anchor="left"
          onClose={() => onClose()}
          open={open}
          variant={variant}
          sx={{
            '& .MuiPaper-root': {
              width: '100%',
              maxWidth: 120,
            },
            
          }}
        >
          <Box
            sx={{
              height: '100%',
              padding: 1,
              marginTop: '45px',
              overflow: 'hidden'
            }}
          >
            <SidebarNav pages={pages} />
          </Box>
        </Drawer>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} >
        <Drawer
          anchor="left"
          onClose={() => onClose()}
          open={open}
          variant={variant}
          sx={{
            '& .MuiPaper-root': {
              width: '100%',
              maxWidth: 200,
            },
            
          }}
        >
          <Box
            sx={{
              height: '100%',
              padding: 1,
              marginTop: '45px',
              overflow: 'hidden'
            }}
          >
            <SidebarNav pages={pages} />
          </Box>
        </Drawer>
      </Box>
    </Box>

  );
};

export default Sidebar;
