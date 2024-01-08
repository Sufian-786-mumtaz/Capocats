import Header from '@/components/Header';
import Image from 'next/image';
const Marketplace = () => {
  const products = [
    {
      path: '/Marketplace/shirt 1.png',
      price: '1500',
      titile: 'Kith for Mickey & Friends Suede Jacket',
      type: 'Disney',
      subtype: 'Black',
    },
    {
      path: '/Marketplace/shirt 2.png',
      price: '1500',
      titile: 'Kith for Mickey & Friends Suede Jacket',
      type: 'Disney',
      subtype: 'Light Blue',
    },
    {
      path: '/Marketplace/shirt 3.png',
      price: '1500',
      titile: 'Kith for Mickey & Friends Suede Jacket',
      type: 'Disney',
      subtype: 'Black',
    },
    {
      path: '/Marketplace/shirt 4.png',
      price: '1500',
      titile: 'Kith for Mickey & Friends Suede Jacket',
      type: 'Disney',
      subtype: 'Gray',
    },
    {
      path: '/Marketplace/shirt 5.png',
      price: '1500',
      titile: 'Kith for Mickey & Friends Suede Jacket',
      type: 'Disney',
      subtype: 'White',
    },
    {
      path: '/Marketplace/shoes.png',
      price: '1500',
      titile: 'Kith for Mickey & Friends Suede Shoes',
      type: 'Disney',
      subtype: 'Brown',
    },
    {
      path: '/Marketplace/chain.png',
      price: '1500',
      titile: 'Kith for Mickey & Friends Suede Chain',
      type: 'Disney',
      subtype: 'Golden',
    },
    {
      path: '/Marketplace/dishes.png',
      price: '1500',
      titile: 'Kith for Mickey & Friends Suede Dishes',
      type: 'Disney',
      subtype: 'White',
    },
  ];
  return (
    <>
      <div className='px-6'>
        <Header logo={'/Header/logo.png'} />
      </div>
      <div className='px-[40px]'>
        <div className='pb-2'>
          <h1 className='text-white font-[600] text-[26px]'>Marketplace</h1>
          <p className='text-white font-[400] text-[18px]'>
            Introducing Treats Hanukkah, a festive collection featuring apparel, custom dreidels, and a custom Hanukkah
            Plate Set
          </p>
        </div>
        <div className='py-4 flex flex-wrap justify-center gap-14'>
          {products.map((item, index) => {
            return (
              <div className='flex flex-col gap-2' key={index}>
                <div className='relative'>
                  <Image src={item.path} width={317} height={341} alt='' />
                  <div className='flex bg-[#BC0017] text-white text-[14px] rounded-[8px] px-4 py-2 absolute top-4 right-4'>
                    <span className='text-[#FFFFFFCC] font-[400]'>Price</span> :
                    <span className='font-[600] pl-2'>${item.price}</span>
                  </div>
                </div>
                <p className='text-white'>{item.titile}</p>
                <div className='text-white'>
                  <span>{item.type}</span> | <span className='text-[#FFFFFFCC]'>{item.subtype}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Marketplace;
