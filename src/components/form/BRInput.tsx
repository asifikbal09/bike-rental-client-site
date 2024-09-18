/* eslint-disable @typescript-eslint/no-explicit-any */
type TInputProps = {
  label: string;
  placeholder: string;
  name:string
  register:any
};

const BRInput = ({ label, placeholder ,register,name}: TInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        {...register(name, { required: true })}
        className="input border-0 border-dotted border-b-4 border-[#f4364f] focus:border-[#f4364f] max-w-lg"
      />
    </div>
  );
};
export default BRInput;
