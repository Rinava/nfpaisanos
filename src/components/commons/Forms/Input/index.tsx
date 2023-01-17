interface InputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const Input = (props: InputProps) => {
  return (
    <input
      type='text'
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
};

export default Input;
