import React, { ReactNode } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Header from '../Header';
const drawerWidth = 250;

interface Props {
  title: string;
  window?: () => Window;
  children: ReactNode;
}

export default function ResponsiveDrawer(props: Props) {
  const { window, children, title } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className='px-[30px] pt-[60px]'>
      <Image src='/Sidebar/logo.png' height={35} width={187} alt='' />
      <div className='flex items-center gap-[10px] mt-[30px]'>
        <p>Menu</p>
        <div>
          <hr style={{ width: '88px' }} />
        </div>
      </div>
      <List>
        {['Home', 'Notification', 'Settings', 'Logout'].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div className='flex items-center gap-[10px] mb-[30px] mt-[20px]'>
        <Image src='/Sidebar/Qs Studio.png' height={30} width={27} alt='' />
        <p>Qs Studio</p>
      </div>
      <div className='flex items-center gap-[10px]'>
        <p>My Playlist</p>
        <div>
          <hr style={{ width: '88px' }} />
        </div>
      </div>
      <List>
        {['Playlist #A', 'Playlist #B', 'Playlist #C', 'Add New +'].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CssBaseline />
      <AppBar
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          position: 'relative',
          background: 'transparent',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <div className='flex-1'>
            <Header handleDrawerToggle={handleDrawerToggle} title={title} />
          </div>
        </Toolbar>
      </AppBar>
      <Box component='nav' sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }} aria-label='mailbox folders'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            '& .css-4t3x6l-MuiPaper-root-MuiDrawer-paper':{backgroundColor:'#3B3B3B', color:'white'},
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            '& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper':{backgroundColor:'#3B3B3B', color:'white'},
            color:'white',
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component='main' sx={{ flexGrow: 1, width: { md: '100%' }, paddingLeft: { md: '250px' } }}>
        <div className='px-[40px] pb-[40px]'>{children}</div>
      </Box>
    </Box>
  );
}
