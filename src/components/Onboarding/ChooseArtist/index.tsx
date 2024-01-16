import React, { useEffect, useState } from 'react';
import SelectArtist from './SelectArtist';
import SelectedArtist from './SelectedArtist';
import { chooseArtistData } from '@/constants/ChooseArtist';
import Checkbox from '@mui/material/Checkbox';

const ChooseArtist = ({ setDisableBtn }: any) => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [disableCheckbox, setDisableCheckbox] = useState(false);
  const handleCheckboxChange = (itemId: number) => {
    if (checkedItems.includes(itemId)) {
      setCheckedItems(checkedItems.filter(id => id !== itemId));
    } else {
      setCheckedItems([...checkedItems, itemId]);
    }
  };
  useEffect(() => {
    if (checkedItems.length == 3) {
      setDisableCheckbox(true);
      setDisableBtn(false);
    } else {
      setDisableCheckbox(false);
      setDisableBtn(true);
    }
  }, [checkedItems]);
  return (
    <div className='h-full max-h-[276px] overflow-y-auto flex flex-wrap gap-[30px] justify-center md:justify-start items-center'>
      {chooseArtistData?.map((item: any, index: any) => {
        return (
          <Checkbox
            sx={{ padding: 0, '&:hover': { background: 'none' }, '&.Mui-disabled': { opacity: '0.4' } }}
            key={item.id}
            icon={<SelectArtist path={item.path} title={item.title} />}
            checkedIcon={<SelectedArtist path={item.path} title={item.title} />}
            disableRipple
            disabled={disableCheckbox && !checkedItems.includes(item.id)}
            checked={checkedItems.includes(item.id)}
            onChange={() => handleCheckboxChange(item.id)}
          />
        );
      })}
    </div>
  );
};

export default ChooseArtist;
