import React from 'react';
import SelectArtist from './SelectArtist';
import SelectedArtist from './SelectedArtist';
import { chooseArtistData } from '@/constants/ChooseArtist';
import Checkbox from '@mui/material/Checkbox';

const ChooseArtist = () => {
  return (
    <div className='flex flex-wrap gap-[30px] justify-center md:justify-start items-center'>
    {chooseArtistData?.map((item: any, index: any) => {
      return (
        <Checkbox
          sx={{ padding: 0, '&:hover':{background:'none'} }}
          key={index}
          icon={<SelectArtist path={item.path} title={item.title} />}
          checkedIcon={<SelectedArtist path={item.path} title={item.title} />}
          disableRipple
        />
      );
    })}
  </div>
  );
};

export default ChooseArtist;
