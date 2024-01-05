import { Inter } from 'next/font/google';
import Sidebar from '../components/Sidebar';
import Banner from '@/components/Banner';
import Tabs from '../components/Tabs';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Sidebar title='Welcome, Claudia Alves!'>
        <Banner path='/Banner/bannner.png' />
        <Tabs />
    </Sidebar>
  );
}
