import clsx from 'clsx';
import styles from './styles.module.css';

interface LabelProps {
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
}

const Label = (props: LabelProps) => {
  const { children, className, ...rest } = props;
  return (
    <label className={clsx(styles.label, className)} {...rest}>
      {children}
    </label>
  );
};
export default Label;
