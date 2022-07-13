import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import { Link, Typography } from '@mui/material';
import Logo from '../../../assets/logo.svg';


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


const StatusBar = ({ onSidebarOpen, pages, colorInvert = false }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const logo = Logo;

  return (
    <Box
      display={'block'}
      alignItems={'center'}
      justifyContent={'space-between'}
      width={1}
    >        
      <Box
        display={'block'}
        padding='6px'
      >
        <Box textAlign={'center'}>
          <Typography><small>Solana TPS: 2,567 &nbsp;&nbsp; | &nbsp;&nbsp; Current Players: 420</small></Typography>
        </Box> 
      </Box>
    </Box>
  );
};

export default StatusBar;
