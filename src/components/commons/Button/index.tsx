import styles from './styles.module.css';
import clsx from 'clsx';
import playSound from '@/utils/playSound';
import { motion } from 'framer-motion';

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
  const handleClick = () => {
    playSound('/sounds/button.mp3');
    onClick();
  };

  return (
    <motion.button
      className={clsx(styles.button, variations[variant], className)}
      onClick={handleClick}
      type={type}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}>
      {children}
    </motion.button>
  );
};

export default Button;
