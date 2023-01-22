import styles from './styles.module.css';
import clsx from 'clsx';
import playSound from '@/utils/playSound';

interface InputProps {
  placeholder: string;
  onChange: (value: string) => void;
  value?: string;
  className?: string;
}

const Input = ({ placeholder, onChange, value, className }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const randomSound = Math.random();
    playSound(
      randomSound < 0.25
        ? '/sounds/input-1.mp3'
        : randomSound < 0.5
        ? '/sounds/input-2.mp3'
        : randomSound < 0.75
        ? '/sounds/input-3.mp3'
        : '/sounds/input-4.mp3'
    );
    onChange(e.target.value);
  };

  return (
    <input
      type='text'
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
      className={clsx(styles.input, className)}
    />
  );
};

export default Input;
