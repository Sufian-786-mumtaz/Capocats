import { ReactNode } from "react";

interface Props {
    children: ReactNode
}
const Layout = ({children}:Props) => {
  return (
    <section className='w-screen h-screen'>
        <div className='h-full w-fl md:flex md:flex-wrap'>
          {/* Left column container*/}
          <div className='h-full overflow-auto md:w-[55%] text-white'>
            {children}
          </div>
          {/* Right column container with background and description*/}
          <div className='hidden md:flex md:items-center md:w-[45%] bg-auth-poster'></div>
        </div>
    </section>
  );
};

export default Layout;
