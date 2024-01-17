import Layout from "@/components/Onboarding/Layout"
import MemberBox from "@/components/Onboarding/MemberBox"
import ContorlButtons from "@/components/Onboarding/ControlButtons"
const index = () => {
  return (
    <Layout  skip={true} next='/onboarding/social-tokens' previous='/onboarding/fiat-currency'>
        <MemberBox heading={'Inside the Fan Club, you can earn Social Tokens by participating'} cardImg={'/Become Member/gold coin.png'} fanClubPros={['Participating in an event', 'Participating in discord channels', 'Interacting with artist/creator', 'Vivamus quam enim, pharetra']} />
    </Layout>
  )
}

export default index