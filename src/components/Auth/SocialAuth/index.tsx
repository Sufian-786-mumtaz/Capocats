const SocialAuth = () => {
  return (
    <div className='pt-2 flex flex-col items-center gap-6'>
      <p className='text-[#F5F5F5] text-[16px] leading-[18.78px]'>or continue with</p>
      <ul className="flex gap-4">
        {[
          '/Auth/Social Auth/google.png',
          '/Auth/Social Auth/apple.png',
          '/Auth/Social Auth/twitter.png',
          '/Auth/Social Auth/facebook.png',
        ].map((item, index) => {
          return (
            <li key={index}>
              <button>
                <img src={item} alt="social icons" width={55} height={55} />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialAuth;
