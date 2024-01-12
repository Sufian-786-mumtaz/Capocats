const MemberBox = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[16px]">
        <img src="/Become Member/members.png" width={78} height={39} alt="artist" />
        <h1 className="text-white text-[31px] leading-[40px] text-center">Becoming a member of the Fan Club require an Access token       </h1>
        <div className="flex gap-[15px] items-center">
            <img src="/Become Member/gold coin.png" width={81} height={81} alt="gold coin"  />
            <img src="/Become Member/arrow forward.png" width={24} height={24} className="w-6 h-6" alt="arrow forward" />
            <img src="/Become Member/person.png" width={81} height={81} alt="person" />
        </div>
    </div>
  )
}

export default MemberBox