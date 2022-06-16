import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { SidebarNav } from './components';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClose: () => void;
  open: boolean;
  variant: 'permanent' | 'persistent' | 'temporary' | undefined;
  pages: Array<{
    groupTitle: string;
    pages: Array<PageItem>;
  }>;
}

const Sidebar = ({ pages, open, variant, onClose }: Props): JSX.Element => {
  return (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        '& .MuiPaper-root': {
          width: '100%',
          maxWidth: 256,
          top: { xs: 0, md: 67 },
          height: { xs: '100%', md: 'calc(100% - 67px)' },
        },
      }}
    >
      <Box
        sx={{
          height: '100%',
          padding: 1,
          paddingTop: { xs: 2, sm: 3 },
        }}
      >
        CNFT Coming Soon 
        {/* <SidebarNav pages={pages} onClose={onClose} /> */}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
