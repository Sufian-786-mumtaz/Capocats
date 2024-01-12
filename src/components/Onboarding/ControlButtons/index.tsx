import Link from 'next/link';
const ContorlButtons = ({ skipPath, nextPath, continuePath, disable }: any) => {
  return (
    <div className='flex-1 items-end flex w-full gap-[10px]'>
      { skipPath && nextPath ? (
        <>
          <Link
            href={skipPath}
            className='flex justify-center items-center w-full h-[50px] text-[#FF435A] font-[800] leading-[20px] rounded-[40px] border border-[#FF435A]'
          >
            Skip
          </Link>
          <Link
            href={nextPath}
            className={`flex justify-center items-center w-full h-[50px] rounded-[40px] font-[800] leading-[20px] ${
              disable ? 'bg-[#33292E] text-[#5E5252]' : 'bg-[#BC0017] text-white'
            }`}
          >
            Next
          </Link>
        </>
      ) : (
        <Link
          href={continuePath}
          className={`flex justify-center items-center w-full h-[50px] rounded-[40px] font-[800] leading-[20px] bg-[#BC0017] text-white`}
        >
          Continue
        </Link>
      )}
    </div>
  );
};

export default ContorlButtons;
