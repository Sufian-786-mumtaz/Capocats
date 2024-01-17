import Layout from "@/components/Onboarding/Layout"
import MemberBox from "@/components/Onboarding/MemberBox"
const FiatCurrency = () => {
  return (
    <Layout skip={true} next='/onboarding/fan-club' previous='/onboarding/become-member'>
        <MemberBox heading={'Worried about tokens?'} paragraph="Access token can be bought with a Dropp Token or FIAT Currency" fromCoin={'/Become Member/tokens.png'} toCoin={'/Become Member/gold coin.png'} />
    </Layout>
  )
}

export default FiatCurrency