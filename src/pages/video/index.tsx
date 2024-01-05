import React from 'react'
import Sidebar from '@/components/Sidebar'
import Banner from '@/components/Banner'
import Cards from '@/components/Cards'
const Video = () => {
  return (
    <Sidebar title='Welcome to The Ice Spice Cast'>
        <Banner path='/iframe.png' />
        <h1 className='text-white font-[500] text-[30px] my-[40px]'>More Ice Spice Experiences:</h1>
        <Cards />
    </Sidebar>
  )
}

export default Video