import React from 'react';
import Image from 'next/image';
const Cards = () => {
  const cards = [
    { title: 'Gasta Boo', path: '/Cards/gasta boo.png' },
    { title: 'Munch', path: '/Cards/munch.png' },
    { title: 'Princess Diana', path: '/Cards/princess diana.png' },
    { title: 'Freestyle', path: '/Cards/freestyle.png' },
  ];
  return (
    <div className='flex flex-wrap justify-center lg:justify-start w-full  gap-4'>
      {cards.map((item, index) => {
        return (
          <div className='flex flex-col rounded-[10px] bg-[#BC0017]' key={index}>
            <div className='relative h-[134px] w-full max-w-[206px]'>
              <Image src={item.path} width={206} height={134} alt='' />
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='w-[41px] h-[41px] rounded-full flex justify-center items-center border border-[#FFFFFF4D] cursor-pointer bg-gradient-to-b from-pink-600 to-black via-opacity-30'>
                  <Image src='/Cards/play.png' width={13} height={10} alt='' />
                </div>
              </div>
            </div>
            <div className='relative h-[82px] py-[10px] pl-[15px]'>
              <p className='text-white font-[500] text-[20px]'>{item.title}</p>
              <div className='absolute top-[32px] right-[15px] h-[40px] w-[40px] bg-[#000000] rounded-[10px] cursor-pointer flex justify-center items-center'>
                <Image src='/Cards/shopping-bag 1.png' width={17} height={17} alt='' />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
