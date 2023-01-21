import styles from './styles.module.css';
import clsx from 'clsx';

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

const Button = ({
  children,
  onClick,
  type = 'submit',
  disabled,
  variant = 'secondary',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, variations[variant], className)}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
