import styles from './styles.module.css';

interface RangeProps {}

const Range = (props: RangeProps) => {
  return <input type='range' className={styles.range} />;
};

export default Range;
