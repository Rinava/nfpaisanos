import styles from './styles.module.css';
import Label from '../Label';
import { useState, useMemo } from 'react';
import playSound from '@/utils/playSound';

interface RangeProps {
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  label: string;
}

const Range = (props: RangeProps) => {
  const { value, min, max, step, onChange, label } = props;
  const [isFocused, setIsFocused] = useState(false);

  const percentage = useMemo(() => {
    return ((value - min) / (max - min)) * 100;
  }, [value, min, max]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    playSound('/sounds/slider.mp3')
    onChange(value);
  };

  return (
    <div className={styles.slider_container}>
      <Label htmlFor={`range-${label.replace(' ', '_')}`}>{label}</Label>
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
        id={`range-${label.replace(' ', '_')}`}
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
      <svg
        className={styles.svg}
        viewBox='0 0 256 17'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'>
        <path
          d='M0 8.5C0 7.38793 0.887686 6.47919 1.99945 6.45314L248.002 0.687449C252.389 0.584642 256 4.11237 256 8.5V8.5C256 12.8876 252.389 16.4154 248.002 16.3126L1.99945 10.5469C0.887686 10.5208 0 9.61207 0 8.5V8.5Z'
          fill='#353945'
        />
        <path
          mask='url(#mask_range)'
          d='M0 8.5C0 7.38793 0.887686 6.47919 1.99945 6.45314L248.002 0.687449C252.389 0.584642 256 4.11237 256 8.5V8.5C256 12.8876 252.389 16.4154 248.002 16.3126L1.99945 10.5469C0.887686 10.5208 0 9.61207 0 8.5V8.5Z'
          fill='#3772FF'
        />
        <defs>
          <mask id='mask_range'>
            <rect
              x='0'
              y='0'
              width={`${percentage}%`}
              height='100%'
              fill='white'
            />
          </mask>
        </defs>
      </svg>
      <div className={styles.slider_values}>
        <span>{min} ETH</span> <span>{max} ETH</span>
      </div>
    </div>
  );
};

export default Range;
