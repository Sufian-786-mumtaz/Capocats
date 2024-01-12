import MemberBox from '@/components/Onboarding/MemberBox';
import React from 'react';
import ContorlButtons from '@/components/Onboarding/ControlButtons';
import Layout from '@/components/Onboarding/Layout';
const BecomeMember = () => {
  return (
    <Layout paddingTop='pt-[126px]' gap='gap-0'>
      <MemberBox />
      <div className='pt-[71px]'>
        <h2 className='text-white text-[24px] font-[700] leading-[31.2px]'>You can get and access all of these:</h2>
        <ul className='flex flex-col gap-[16px] pt-[20px] pb-[23px]'>
          {['IP Rights', 'Decision Making', 'IRL', 'Exclusive song and gen art'].map((item, index) => {
            return (
              <li className='flex gap-[5px]' key={index}>
                <img src='/Become Member/tick-circle.png' alt='tick' height={16} width={16} />
                <span className='text-white text-[14px] leading-[18px] font-[400]'>{item}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <ContorlButtons skipPath='/' nextPath='/next' disable={false} />
    </Layout>
  );
};

export default BecomeMember;
