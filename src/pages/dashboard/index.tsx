import Sidebar from '@/components/Sidebar';
import Banner from '@/components/Banner';
import Tabs from '@/components/Tabs';
const Dashboard = () => {
  return (
    <Sidebar title='Welcome, Claudia Alves!'>
      <Banner path='/Banner/bannner.png' />
      <Tabs />
    </Sidebar>
  );
};

export default Dashboard;
