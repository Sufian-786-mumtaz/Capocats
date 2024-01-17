import Link from 'next/link';
interface Props {
  skipPath?: string;
  nextPath?: string;
  continuePath?: string;
  purchasePath?: string;
  disable?: boolean;
  purchaseBtn?: boolean;
}
const ContorlButtons = ({ skipPath, nextPath, continuePath, purchasePath, purchaseBtn, disable }: Props) => {
  return (
    <div
      className={`flex items-end justify-center w-full gap-[10px] ${
        purchaseBtn ? 'gap-[16px] flex-col-reverse' : 'flex-1'
      }`}
    >
      {skipPath && nextPath ? (
        <>
          <Link
            href={skipPath}
            className='flex justify-center items-center w-full p-4 max-w-[144px] text-white font-[600] leading-[20px] rounded-[16px] border border-white'
          >
            {purchaseBtn ? 'Not now' : 'Skip'}
          </Link>
          <Link
            href={nextPath}
            className={`flex justify-center items-center w-full p-4 max-w-[144px] rounded-[16px] font-[600] leading-[20px] ${
              disable ? 'bg-[#1B1B1B] text-[#5E5252] pointer-events-none' : 'bg-[#BC0017] text-white'
            }`}
          >
            {purchaseBtn ? 'Purchase Access' : 'Next'}
          </Link>
        </>
      ) : purchasePath ? (
        <Link
          href={purchasePath ? purchasePath : ''}
          className={`flex justify-center items-center w-full max-w-[220px] h-[50px] rounded-[16px] font-[600] leading-[20.8px] bg-[#BC0017] text-white`}
        >
          Purchase Access
        </Link>
      ) : (
        <Link
          href={continuePath ? continuePath : ''}
          className={`flex justify-center items-center w-full max-w-[220px] h-[50px] rounded-[16px] font-[600] leading-[20.8px] bg-[#BC0017] text-white`}
        >
          Continue
        </Link>
      )}
    </div>
  );
};

export default ContorlButtons;
