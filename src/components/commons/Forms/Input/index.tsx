import styles from './styles.module.css';

interface InputProps {
  placeholder: string;
  onChange: (value: string) => void;
  value?: string;
}

const Input = ({ placeholder, onChange, value }: InputProps) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      className={styles.input}
    />
  );
};

export default Input;
