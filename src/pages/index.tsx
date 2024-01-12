import { useEffect, useState } from 'react';
import ChooseArtist from '@/components/Onboarding/ChooseArtist';
import ControllButtons from "@/components/Onboarding/ControlButtons"
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  if (loading) {
    return (
      <div className={`w-screen h-screen bg-landing`}>
        <img src='/Landing/logo.png' alt='logo' className='mx-auto pt-[129px]' />
      </div>
    );
  }
  return (
    <div className='w-screen h-screen flex flex-col px-[26px] pt-[115px] pb-[30px]'>
      <div className='pr-[45px] pb-[52px]'>
        <h1 className='text-white text-[20px] leading-6'>
          Choose 3 artist/creator to follow and potentialy produce in their Fan Club
        </h1>
      </div>
      <ChooseArtist />
      <ControllButtons skipPath='/' nextPath='/congratulations' />
    </div>
  );
}
