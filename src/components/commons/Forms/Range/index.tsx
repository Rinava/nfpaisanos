import styles from './styles.module.css';

interface RangeProps {}

const Range = (props: RangeProps) => {
  return (
    <div className={styles.slider_container}>
      <label htmlFor='range'>Price Range</label>
      <input
        type='range'
        min='0'
        max='10'
        className={styles.slider}
        id='slider'
      />
      <div className={styles.slider_values}>
        <span>0.000 ETH</span> <span>10 ETH</span>
      </div>
    </div>
  );
};

export default Range;
