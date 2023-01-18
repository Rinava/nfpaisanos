import styles from './styles.module.css';
import clsx from 'clsx';

interface DividerProps {
  className?: string;
}

const Divider = ({ className }: DividerProps) => {
  return <hr className={clsx(styles.divider, className)} />;
};

export default Divider;
