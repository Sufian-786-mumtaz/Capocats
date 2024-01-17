import MemberBox from '@/components/Onboarding/MemberBox';
import React from 'react';
import ContorlButtons from '@/components/Onboarding/ControlButtons';
import Layout from '@/components/Onboarding/Layout';
const BecomeMember = () => {
  return (
    <>
      <Layout skip={true} next='/onboarding/fiat-currency'>
        <MemberBox
          heading={'Join Exclusive Fan Clubs'}
          paragraph='Becoming a member of the fan club require an access token'
          fromCoin={'/Become Member/gold coin.png'}
          toCoin={'/Become Member/person.png'}
          fanClubPros={['IP Rights', 'Decision Making', 'IRL', 'Exclusive song and gen art']}
        />
        <ContorlButtons purchasePath={'/onboarding/become-member'} />
      </Layout>
    </>
  );
};

export default BecomeMember;
