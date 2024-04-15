
type InputProps = {
    name: string;
    type: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

  const Input = (props: InputProps) => {
    const { name, type, value, onChange, placeholder } = props;
    return (
      <div className="p-[5px]">
        <input
          className="w-full bg-white !text-gray-700 form-control rounded-[5px] p-2"
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>

    );
  };
  
  
  export default Input;