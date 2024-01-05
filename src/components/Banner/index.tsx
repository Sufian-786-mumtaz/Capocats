import Image from "next/image"
const Banner = ({path}:any) => {
  return (
    <Image src={path}  width={0} height={0} sizes="100vw"alt='' style={{ width: '100%', height: 'auto' }} />
  )
}

export default Banner