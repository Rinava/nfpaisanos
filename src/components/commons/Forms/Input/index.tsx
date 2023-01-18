import styles from './styles.module.css';
import clsx from 'clsx';

interface InputProps {
  placeholder: string;
  onChange: (value: string) => void;
  value?: string;
  className?: string;
}

const Input = ({ placeholder, onChange, value, className }: InputProps) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      className={clsx(styles.input, className)}
    />
  );
};

export default Input;
