const SelectArtist = ({ path, title }: any) => {
  return (
    <div className='flex flex-col items-center justify-center gap-[8px] px-[2px] max-w-[85px] max-h-[107px] font-sans'>
      <img src={path} alt='choose artist' width={81} height={81} className='border-full' />
      <p className='text-white text-[12px] leading-[18px] font-[600]'>{title}</p>
    </div>
  );
};

export default SelectArtist