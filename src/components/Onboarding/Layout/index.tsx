import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
interface Props {
  children: ReactNode;
  skip?: boolean;
  next?: string;
  previous?:string
}
const Layout = ({ children, skip, next, previous }: Props) => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center px-8 py-3'>
      <div className='p-4 sm:p-8 flex flex-col gap-[32px] items-center justify-center w-full sm:max-w-[648px] bg-[#252525] rounded-[16px] relative'>
        {children}
        {previous && <div className='absolute left-[-25px]'>
          <div className='flex items-center justify-center w-[50px] h-[50px] bg-[#3A3A3A] rounded-full'>
            <Link href={previous}>
              <Image src='/arrow-left.png' alt='arrow-left' width={24} height={24} />
            </Link>
          </div>
        </div>}
        {next && <div className='absolute right-[-25px]'>
          <div className='flex items-center justify-center w-[50px] h-[50px] bg-[#3A3A3A] rounded-full'>
            <Link href={next}>
              <Image src='/arrow-right.png' alt='arrow-left' width={24} height={24} />
            </Link>
          </div>
        </div>}
      </div>
      {skip && (
        <Link href='/dashboard' className='text-[#8C8C8C] text-[16px] leading-[25.6px] fixed bottom-3 sm:bottom-[38px]'>
          Skip & go to home
        </Link>
      )}
    </div>
  );
};

export default Layout;
