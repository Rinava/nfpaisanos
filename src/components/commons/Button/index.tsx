import clsx from 'clsx';
import styles from './styles.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const { children, onClick, type = 'submit', disabled, className } = props;

  return (
    <button
      className={clsx(styles.button, className)}
      onClick={onClick}
      type={type}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
