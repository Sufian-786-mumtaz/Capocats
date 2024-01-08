import React from 'react';
import Image from 'next/image';
const Videos = ({ item }: any) => {
  return (
    <div className='flex max-w-[198px] w-full'>
    <div className='flex flex-col items-center' >
      <div className='relative'>
        <Image src={item.path} height={239} width={198} alt='' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='h-[55px] w-[55px] rounded-full border border-[#FFFFFF4D] flex items-center justify-center py-3 bg-gradient'>
            <button className='bg-white rounded-full w-[34px] h-[34px] flex items-center justify-center'>
              <Image src='/Videos/play.png' height={12} width={14} alt='' />
            </button>
          </div>
        </div>
      </div>
      <h1 className='text-white font-[600] text-[24px]'>{item.title}</h1>
    </div>
  </div>
  );
};

export default Videos;
