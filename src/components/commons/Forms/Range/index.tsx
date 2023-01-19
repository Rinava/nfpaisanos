import styles from './styles.module.css';
import Label from '../Label';
import { useState } from 'react';

interface RangeProps {
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}

const Range = (props: RangeProps) => {
  const { value, min, max, step, onChange } = props;
  const [percentage, setPercentage] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const percentage = ((value - min) / (max - min)) * 100;
    setPercentage(percentage);
    onChange(value);
  };

  console.log('percentage', percentage);

  return (
    <div className={styles.slider_container}>
      <Label className={styles.label} htmlFor='range'>
        Price Range
      </Label>
      <span
        className={styles.tooltip}
        style={
          {
            ['--percentage']: `${percentage}%`,
            ['--fix-offset']: 24 * (percentage / 100 - 0.5) * -1 + 'px',
            display: isFocused ? 'block' : 'none',
          } as React.CSSProperties
        }>
        {value.toFixed(3)} ETH
      </span>
      <input
        id='slider'
        type='range'
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={handleChange}
        className={styles.slider}
        onMouseDown={() => setIsFocused(true)}
        onMouseUp={() => setIsFocused(false)}
        onMouseEnter={() => setIsFocused(true)}
        onMouseLeave={() => setIsFocused(false)}
      />
      <div className={styles.slider_values}>
        <span>{min} ETH</span> <span>{max} ETH</span>
      </div>
    </div>
  );
};

export default Range;
