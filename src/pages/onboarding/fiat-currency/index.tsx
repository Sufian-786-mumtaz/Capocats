import Layout from "@/components/Onboarding/Layout"
import MemberBox from "@/components/Onboarding/MemberBox"
import ContorlButtons from "@/components/Onboarding/ControlButtons"
const FiatCurrency = () => {
  return (
    <Layout>
        <MemberBox heading={'Worried about tokens?'} paragraph="Access token can be bought with a Dropp Token or FIAT Currency" fromCoin={'/Become Member/tokens.png'} toCoin={'/Become Member/gold coin.png'} />
        <ContorlButtons skipPath='/' nextPath='/onboarding/fan-club' disable={false} />
    </Layout>
  )
}

export default FiatCurrency