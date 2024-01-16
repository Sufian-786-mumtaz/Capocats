import { ReactNode } from "react"
interface Props {
    children: ReactNode;
}
const Layout = ({children}: Props) => {
  return (
    <div className='w-screen h-screen flex items-center justify-center px-[15px]'>
      <div className='flex flex-col gap-[32px] items-center justify-center w-full sm:max-w-[648px] bg-[#252525] p-4 sm:p-8'>
        {children}
      </div>
    </div>
  )
}

export default Layout