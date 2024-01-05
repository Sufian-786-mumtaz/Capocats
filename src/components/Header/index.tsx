import Avatar from "../Avatar/index"
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
const Header = ({logo, handleDrawerToggle, title}:any) => {
  return (
    <div className='flex flex-wrap flex-col-reverse lg:flex-row gap-y-3 lg:gap-y-0 lg:items-center pt-[40px] pb-6 px-4'>
      {logo ? 
       <Image src={logo} height={35} width={187} alt='' /> :
      <p className='text-[30px] font-[500]'>{title}</p>}
      <div className='flex items-center gap-5 flex-1 justify-between lg:justify-end'>
        <div className='flex items-center justify-between gap-4 px-4 py-3 bg-[#FFFFFF1A] rounded-full  max-w-[358px] w-full'>
          <label htmlFor="search" className="cursor-pointer">
            <Image src='/Header/search.png' height={16} width={15} alt='' />
          </label>
          <input
            type='text'
            name=''
            id='search'
            placeholder='Artist, Music, Album Product, etc'
            className='bg-transparent outline-none text-[#FFFFFFCC] text-[16px] flex-1 w-full'
          />
          <div>
            <Image src='/Header/mic.png' height={22} width={13} alt='' className='cursor-pointer' />
          </div>
        </div>
        <Avatar />
        <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: 'white' }}
          >
            <MenuIcon />
          </IconButton>
      </div>
      
    </div>
  );
};

export default Header;
