import InputField from '@/components/InputField';
import Layout from '../Layout';
import SocialAuth from '../SocialAuth';

const Signup = () => {
  return (
    <Layout>
      <div className='py-[30px] px-[40px] md:py-[52px] md:px-[99px]'>
        <div className='md:max-w-[401px]'>
          <h1 className='text-white text-[24px] leading-[28.18px] font-[700] mb-6'>
            Over 300 Artist with 10 millions song to suits every mode
          </h1>
          <div className='flex flex-col gap-4'>
            <InputField label='Email' placeholder='Enter email here' type='text' required={true} />
            <InputField label='Password' placeholder='Enter password' type='password' required={true} />
            <InputField label='Confirm Password' placeholder='Enter confirm password' type='password' required={true} />
            <button className='text-[16px] font-[600] leading-[20.8px] text-white bg-[#BC0017] rounded-[16px] p-4'>Register</button>
            <SocialAuth />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
