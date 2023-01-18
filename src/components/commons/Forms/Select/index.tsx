// @ts-nocheck

import styles from './styles.module.css';
import ReactSelect, { components, OptionProps } from 'react-select';

type colors = 'red' | 'blue' | 'green' | 'orange' | 'pink' | 'purple' | 'black';

const colors: Record<colors, string> = {
  red: '#e74c3c',
  blue: '#233e68',
  green: '#45b36b',
  orange: '#ff8c37',
  pink: '#ef466f',
  purple: '#9757d7',
  black: '#141416',
};

const ColorOption = ({ ...props }: OptionProps) => {
  return (
    <div className={styles.option}>
      <div
        className={styles.option_icon}
        style={{ backgroundColor: colors[props.data.value as colors] }}
      />
      <components.Option {...props} />
    </div>
  );
};

interface SelectProps {
  label: string;
  options: {
    value: string;
    label: string;
  }[];
  onChange: (value: string) => void;
  value?: string;
  type?: 'default' | 'color';
}

const Select = ({
  options,
  label,
  onChange,
  value,
  type = 'default',
}: SelectProps) => {
  return (
    <>
<div className={styles.selectContainer}>
<label className={styles.label} id={`select-${label.replace(/\s/g, '')}`}>
        {label}
      </label>
      <ReactSelect
        aria-labelledby={`select-${label.replace(/\s/g, '')}`}
        options={options}
        className={styles.select}
        defaultValue={options[0]}
        components={type === 'color' ? { Option: ColorOption } : {}}
        value={value ? options.find((option) => option.value === value) : null}
        onChange={(option: { value: string; label: string }) =>
          onChange(option?.value || '')
        }
      />
</div>
    </>
  );
};

export default Select;
