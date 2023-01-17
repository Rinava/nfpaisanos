import clsx from 'clsx';
import styles from './styles.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'text';
  className?: string;
}

const variations = {
  primary: styles.primary,
  secondary: styles.secondary,
  text: styles.text,
};

const Button = (props: ButtonProps) => {
  const {
    children,
    onClick,
    type = 'submit',
    disabled,
    variant = 'secondary',
    className,
  } = props;

  return (
    <button
      className={clsx(styles.button, variations[variant], className)}
      onClick={onClick}
      type={type}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
