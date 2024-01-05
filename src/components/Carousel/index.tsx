import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Videos from '../Videos';
import Image from 'next/image';
Image;
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <div className='absolute top-1/2 transform right-[-20px] -translate-y-1/2 z-50'>
      <div
        onClick={onClick}
        className='w-[46px] h-[46px] bg-[#3B3B3B] rounded-full border border-[#FFFFFF80] flex justify-center items-center cursor-pointer'
      >
        <Image src='/Videos/right.png' height={24} width={24} alt='' />
      </div>
    </div>
  );
}
function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div className='absolute top-1/2 left-[-20px] transform -translate-y-1/2 z-50'>
      <div
        onClick={onClick}
        className='w-[46px] h-[46px] bg-[#3B3B3B] rounded-full border border-[#FFFFFF80] flex justify-center items-center cursor-pointer'
      >
        <Image src='/Videos/left.png' height={24} width={24} alt='' />
      </div>
    </div>
  );
}
const Carousel = () => {
  const [sliderSettings] = useState({
    adaptiveHeight:false,
    className: 'slider',
    variableWidth: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: 'linear',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 825,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  const videos = [
    {
      path: '/Videos/pfire.png',
      title: 'PFire',
    },
    {
      path: '/Videos/ice spice.png',
      title: 'Ice Spice',
    },
    {
      path: '/Videos/neil tran.png',
      title: 'Neil Tran',
    },
    {
      path: '/Videos/soo jin ae.png',
      title: 'Soo Jin Ae',
    },
    {
      path: '/Videos/yael amari.png',
      title: 'Yael Amari',
    },
    {
      path: '/Videos/pfire.png',
      title: 'PFire',
    },
    {
      path: '/Videos/ice spice.png',
      title: 'Ice Spice',
    },
    {
      path: '/Videos/neil tran.png',
      title: 'Neil Tran',
    },
    {
      path: '/Videos/soo jin ae.png',
      title: 'Soo Jin Ae',
    },
    {
      path: '/Videos/yael amari.png',
      title: 'Yael Amari',
    },
  ];
  return (
    <div className='content'>
      <Slider {...sliderSettings}>
        {videos.map((item, index) => (
          <div key={index}>
            <Videos item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
