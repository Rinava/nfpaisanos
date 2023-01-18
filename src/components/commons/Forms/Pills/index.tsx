import clsx from 'clsx';
import styles from './styles.module.css';

interface PillsProps {
  options: { value: string; label: string }[];
  selected: string;
  onChange: (value: string) => void;
}

const Pills = ({ options, selected, onChange }: PillsProps) => {
  return (
    <div className={styles.pills}>
      {options.map((option) => (
        <div
          key={option.value}
          className={clsx(styles.pill, {
            [styles.selected]: option.value === selected,
          })}>
          <label className={styles.label} htmlFor={option.value}>
            {option.label}
          </label>
          <input
            type='radio'
            name='radio'
            id={option.value}
            className={styles.pill_input}
            onClick={() => onChange(option.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default Pills;