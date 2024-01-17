import Image from 'next/image'
import React from 'react'

const Searchbar = () => {
  return (
    <div className='py-2 px-4 flex justify-between border border-[#8C8C8C] rounded-[8px] w-full'>
        <input type="text" name="" id="searchbar" className='w-full text-[#8C8C8C] outline-none bg-transparent placeholder:text-[#E6E6E6]' placeholder='Search favorite Artist' />
        <label htmlFor="searchbar" className='cursor-pointer'>
            <Image src='/Searchbar/search-normal.png' width={24} height={24} alt='searchbar' />
        </label>
    </div>
  )
}

export default Searchbar