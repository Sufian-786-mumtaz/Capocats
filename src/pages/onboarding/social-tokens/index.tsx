import Layout from '@/components/Onboarding/Layout';
import MemberBox from '@/components/Onboarding/MemberBox';
import ContorlButtons from "@/components/Onboarding/ControlButtons"
const SocialTokens = () => {
  return (
    <Layout skip={true} next='/dashboard' previous='/onboarding/fan-club'>
      <MemberBox
        heading='Exchange Tokens'
        paragraph='In exchange of Social Tokens you’ll participate in decisions making or swap for Artist tokens and buy merch       '
        fromCoin={'/Become Member/gold coin.png'}
        toCoin={'/Become Member/silver coin.png'}
        socialTokens={true}
      />
    </Layout>
  );
};

export default SocialTokens;
