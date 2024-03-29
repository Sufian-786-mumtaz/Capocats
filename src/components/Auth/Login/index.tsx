import InputField from '@/components/InputField';
import Layout from '../Layout';
import SocialAuth from '../SocialAuth';

const Login = () => {
  return (
    <Layout>
      <div className='h-full flex items-center px-[40px] md:px-[99px]'>
        <div className='md:max-w-[401px]'>
          <h1 className='text-white text-[24px] leading-[28.18px] font-[700] mb-6'>
            Over 300 Artist with 10 millions song to suits every mode
          </h1>
          <div className='flex flex-col gap-4'>
            <InputField label='Email' placeholder='Enter email here' type='email' required={true} />
            <InputField label='Password' placeholder='Enter password' type='password' required={true} />
            <button className='text-[16px] font-[600] leading-[20.8px] text-white bg-[#BC0017] rounded-[16px] p-4'>Login</button>
            <SocialAuth title='Don’t have an account?' url='/auth/signup' action='Create an Account' />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
