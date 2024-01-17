import { useEffect, useState } from 'react';
import ChooseArtist from '@/components/Onboarding/ChooseArtist';
import ControllButtons from '@/components/Onboarding/ControlButtons';
import Layout from '@/components/Onboarding/Layout';
import Searchbar from '@/components/Searchbar';
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
export default function Home() {
  const [disableBtn, setDisableBtn] = useState(true)
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  // }, []);
  // if (loading) {
  //   return (
  //     <div className={`w-screen h-screen bg-landing`}>
  //       <img src='/Landing/logo.png' alt='logo' className='mx-auto pt-[129px]' />
  //     </div>
  //   );
  // }
  return (
    <Layout>
      <h1 className='text-white text-[20px] sm:text-[32px] leading-6 sm:leading-[41.6px] w-full sm:max-w-[500px] sm:text-center'>
        Choose 3 artist/creator to follow and potentialy produce in their Fan Club
      </h1>
      <Searchbar />
      <ChooseArtist setDisableBtn={setDisableBtn} />
      <ControllButtons skipPath='/' nextPath='/onboarding/congratulations' disable={disableBtn} />
    </Layout>
  );
}
