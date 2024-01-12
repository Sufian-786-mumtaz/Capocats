import { ReactNode } from "react"
interface Props {
    children: ReactNode;
    paddingTop: String;
    gap: String
}
const Layout = ({children, paddingTop, gap}: Props) => {
  return (
    <div className={`w-screen h-screen flex flex-col justify-center items-center px-[15px] pb-[30px] ${paddingTop} ${gap}`}>
        {children}
    </div>
  )
}

export default Layout