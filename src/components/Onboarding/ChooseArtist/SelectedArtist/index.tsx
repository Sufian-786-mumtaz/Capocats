const SelectedArtist = ({ path, title }: any) => {
  return (
    <div className='flex flex-col items-center justify-center gap-[8px] px-[2px] max-w-[85px] max-h-[107px] font-sans'>
      <div className='relative w-[81px] h-[81px]'>
        <img src={path} alt='choose artist' width={81} height={81} className='border-full opacity-65' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <img src='/ChooseArtist/checked.png' width={27} height={18} alt='checked' />
        </div>
      </div>
      <p className='text-white text-[12px] leading-[18px] font-[600]'>{title}</p>
    </div>
  );
};

export default SelectedArtist;
