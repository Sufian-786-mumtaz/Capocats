interface Props {
  label: string;
  placeholder: string;
  type: string;
  required?: boolean;
}
const InputField = ({ label, placeholder, type, required }: Props) => {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor='' className='flex gap-1 items-start'>
        <span className='text-[16px] leading-[18.78px]'>{label}</span>{' '}
        {required && <sub className='mt-1 text-[#F04141] w-[6px] h-[21px]'>*</sub>}
      </label>
      <input
        type={type}
        className='px-4 py-2 text-[#8C8C8C] placeholder-[#3A3A3A] w-full bg-transparent outline-none border border-[#8C8C8C] rounded-[8px]'
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
