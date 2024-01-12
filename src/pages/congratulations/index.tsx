import React from 'react';
import ContorlButtons from '@/components/Onboarding/ControlButtons';
import Layout from '@/components/Onboarding/Layout';
const Congratulations = () => {
  return (
    <Layout paddingTop='pt-[217px]' gap='gap-[16px]'>
      <img src='/Congratulations/congratulations.png' width={183} height={81} alt='congratulations' />
      <h1 className='text-white text-[37px] leading-[40px]'>Congratulations</h1>
      <p className='text-gray-100 leading-[22.4px] text-center'>
        Discover the perfect harmony for your day with your favorite artist. Let their tunes paint your world in vibrant
        melodies and captivating rhythms!
      </p>
      <ContorlButtons continuePath={'/become-member'} />
    </Layout>
  );
};

export default Congratulations;
