import React, { ReactNode } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../Header';
import { fanclub } from '@/constants/Fanclub';
import { useRouter } from 'next/router';
const drawerWidth = 250;

interface Props {
  title: string;
  window?: () => Window;
  children: ReactNode;
}

export default function ResponsiveDrawer(props: Props) {
  const router = useRouter();
  const { pathname } = router;
  const { window, children, title } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className='py-[32px]'>
      <div className='mb-[49px] flex justify-center'>
        <Image src='/Sidebar/logo.png' height={35} width={187} alt='' />
      </div>
      <List>
        {[
          { title: 'Home', icon: '/Sidebar/home.png', path: '/dashboard' },
          { title: 'Market Place', icon: '/Sidebar/shop.png', path: '/marketplace' },
          { title: 'Wallet', icon: '/Sidebar/wallet.png', path: '/wallet' },
        ].map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{ backgroundColor: pathname === item.path ? '#BC0017' : 'transparent' }}
          >
            <Link href={item.path}>
              <ListItemButton
                sx={{ px: '32px', py: '16px', gap: '10px', '&:hover': { backgroundColor: 'transparent' } }}
                disableRipple
              >
                <ListItemIcon sx={{ minWidth: '24px', minHeight: '24px' }}>
                  <Image src={item.icon} width={24} height={24} alt={item.title} />
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ borderColor: '#3A3A3A' }} />
      <div className='flex flex-col gap-[10px] pl-[32px] py-[9.5px] mt-[3px]'>
        <h2 className='font-[700] leading-[20.8px]'>Followed Fan Club</h2>
        {fanclub.slice(0, 5).map((item, index) => {
          return (
            <Link href='#' className='py-2 flex gap-2 items-center' key={index}>
              <Image src={item.path} width={32} height={32} alt={item.title} className='rounded-[110.4px]' />
              <span className='text-[14px]'>{item.title}</span>
            </Link>
          );
        })}
      </div>
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
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#3B3B3B',
              color: 'white',
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            color: 'white',
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#252525',
              color: 'white',
            },
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
