interface Props {
  cardImg?:string;
  heading: string;
  paragraph?: string;
  fromCoin?: string;
  toCoin?: string;
  fanClubPros?: string[];
  socialTokens?: boolean;
}
const MemberBox = ({ cardImg, heading, paragraph, fromCoin, toCoin, fanClubPros, socialTokens }: Props) => {
  return (
    <>
      <div className='flex flex-col items-center justify-center w-full gap-[16px]'>
        {cardImg && <img src={cardImg} width={cardImg === '/Become Member/gold coin.png' ? 134 : 204} height={cardImg === '/Become Member/gold coin.png' ? 137 : 88} alt='artist' />}
        <h1 className='text-white text-[31px] leading-[32px] text-center'>{heading}</h1>
        {paragraph && <p className='text-gray-100 leading-[22.4px] text-center text-[14px]'>{paragraph}</p>}
        {fromCoin && toCoin && !socialTokens && (
          <div className='flex gap-[15px] items-center'>
            <img src={fromCoin} width={88} height={88} alt='gold coin' />
            <img
              src='/Become Member/arrow forward.png'
              width={24}
              height={24}
              className='w-6 h-6'
              alt='arrow forward'
            />
            <img src={toCoin} width={88} height={88} alt='silver coin' />
          </div>
        )}
       {fanClubPros && <div className='pt-[71px] sm:pt-0'>
          <h2 className='text-white text-[16px] font-[700] leading-[25.6px] sm:text-center'>
            You can get and access all of these:
          </h2>
          <ul className='flex flex-wrap gap-y-2 items-center justify-center pt-[20px] pb-[23px]'>
            {fanClubPros?.map((item, index) => {
              return (
                <li className='flex items-center justify-center w-full sm:w-1/2 gap-[5px]' key={index}>
                  <div className='flex justify-center items-center w-[30.36px] h-[30.36px] rounded-full bg-[#BC0017]'>
                    <img src='/Become Member/tick-circle.png' alt='tick' height={16} width={16} />
                  </div>
                  <p className='text-white text-[14px] leading-[34.16px] font-[400] w-full'>{item}</p>
                </li>
              );
            })}
          </ul>
        </div>}
        {socialTokens && (
          <>
             <div className='flex gap-[10px] items-center justify-center'>
              <div className='flex gap-[5px] items-center'>
                <span className='text-[#FFFFFF] text-[32px] leading-[41.6px]'>05</span>
                <img src={fromCoin} alt='gold coin' width={60} height={60} />
              </div>
              <img src='/Become Member/arrow forward.png' width={24} height={24} />
                <img src='/Become Member/person.png' width={125} height={55} />
            </div>
            <div className='flex gap-[10px] items-center justify-center'>
              <div className='flex gap-[5px] items-center'>
                <span className='text-[#FFFFFF] text-[32px] leading-[41.6px]'>20</span>
                <img src={fromCoin} alt='gold coin' width={60} height={60} />
              </div>
              <img src='/Become Member/arrow forward.png' width={24} height={24} />
                <img src='/Become Member/silver coin.png' width={88} height={88} />
            </div>
            </>
      )}
      </div>
      {/* {fanClubPros && (
        <div className='flex flex-wrap justify-center items-center gap-[15px] pt-[48px]'>
          {fanClubPros?.map((item, index) => {
            return (
              <div
                key={index}
                className='flex flex-col gap-[16px] justify-center items-center rounded-[4px] bg-[#464143] max-w-[165px] py-[14px] px-[13px]'
              >
                <div className='flex gap-1'>
                  <span className='text-white text-[32px]'>1</span>
                  <img src={fromCoin} alt='gold coin' width={36} height={36} />
                </div>
                <p className='text-[#FFFFFF] text-[14px] leading-[20px] text-center'>{item}</p>
              </div>
            );
          })}
        </div>
      )} */}
    </>
  );
};

export default MemberBox;
