import Layout from "@/components/Onboarding/Layout"
import MemberBox from "@/components/Onboarding/MemberBox"
import ContorlButtons from "@/components/Onboarding/ControlButtons"
const JoinFanClub = () => {
  return (
    <Layout >
        <MemberBox heading="Join our exclusive Fan Club today!" paragraph="Unlock a world of backstage access, exclusive content, and VIP experiences with your favorite artist!" />
        <ContorlButtons skipPath='/' nextPath='/onboarding/social-tokens' disable={false} purchaseBtn={true} />
    </Layout>
  )
}

export default JoinFanClub