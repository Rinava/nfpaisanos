import styles from './styles.module.css';
import clsx from 'clsx';

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
