import MemberBox from '@/components/Onboarding/MemberBox';
import React from 'react';
import ContorlButtons from '@/components/Onboarding/ControlButtons';
import Layout from '@/components/Onboarding/Layout';
const BecomeMember = () => {
  return (
    <Layout>
      <MemberBox heading={'Join Exclusive Fan Clubs'} paragraph='Becoming a member of the fan club require an access token' fromCoin={'/Become Member/gold coin.png'} toCoin={'/Become Member/person.png'} fanClubPros={['IP Rights', 'Decision Making', 'IRL', 'Exclusive song and gen art']} />
      <ContorlButtons skipPath='/' nextPath='/onboarding/fiat-currency' disable={false} />
    </Layout>
  );
};

export default BecomeMember;
