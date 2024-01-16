import React from 'react';
import MemberBox from '@/components/Onboarding/MemberBox';
import ContorlButtons from '@/components/Onboarding/ControlButtons';
import Layout from '@/components/Onboarding/Layout';
const Congratulations = () => {
  return (
    <Layout>
      <MemberBox
        heading={'Congratulations'}
        paragraph='Discover the perfect harmony for your day with your favorite artist. Let their tunes paint your world in vibrant
        melodies and captivating rhythms!'
        cardImg={'/Congratulations/congratulations.png'}
      />
      <ContorlButtons continuePath={'/onboarding/become-member'} />
    </Layout>
  );
};

export default Congratulations;
