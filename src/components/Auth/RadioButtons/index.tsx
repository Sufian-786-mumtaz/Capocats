import React from 'react';
import Radio from '@mui/material/Radio';

const RadioButtons = () => {
  const [selectedValue, setSelectedValue] = React.useState('fan');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className='flex items-center justify-center'>
      <Radio
        checked={selectedValue === 'fan'}
        onChange={handleChange}
        value='fan'
        name='radio-buttons'
        icon={<ChooseUser isChecked={false} type='fan' />}
        checkedIcon={<ChooseUser isChecked={true} type='fan' />}
        disableRipple
      />
      <Radio
        checked={selectedValue === 'artist'}
        onChange={handleChange}
        value='artist'
        name='radio-buttons'
        icon={<ChooseUser isChecked={false} type='artist' />}
        checkedIcon={<ChooseUser isChecked={true} type='artist' />}
        disableRipple
      />
    </div>
  );
};

const ChooseUser = ({ isChecked, type }: any) => {
  return (
    <>
      {isChecked ? (
        <div className='flex flex-col justify-center items-center gap-1 p-4 border border-[#BC0017] rounded-[11px]'>
          <img src={type === 'fan' ? '/Auth/fan.png' : '/Auth/artist.png'} alt='user type' width={48} height={48} />
          <span className='text-white text-[16px] leading-[18.78px]'>{type === 'fan' ? 'Fan' : 'Artist'}</span>
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center gap-1 p-4 rounded-[11px] bg-[#252525] opacity-40'>
          <img src={type === 'fan' ? '/Auth/fan.png' : '/Auth/artist.png'} alt='user type' width={48} height={48} />
          <span className='text-white text-[16px] leading-[18.78px]'>{type === 'fan' ? 'Fan' : 'Artist'}</span>
        </div>
      )}
    </>
  );
};
export default RadioButtons;
