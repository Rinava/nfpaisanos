// @ts-nocheck
import Label from '../Label';
import styles from './styles.module.css';
import ReactSelect, { components, OptionProps } from 'react-select';
import clsx from 'clsx';

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

const ColorOption = ({ ...props }: OptionProps) => (
  <div
    className={clsx(
      styles.option_color,
      props.value === 'all' && styles.option_color_all
    )}
    style={{ ['--color']: colors[props.data.value as colors] }}>
    <div className={styles.option_icon_color} />
    <components.Option
      {...props}
      className={clsx(
        styles.option,
        props.isSelected && styles.option_selected
      )}
    />
  </div>
);

const Option = ({ ...props }: OptionProps) => (
  <components.Option
    {...props}
    className={clsx(styles.option, props.isSelected && styles.option_selected)}
  />
);

interface SelectProps {
  label: string;
  hiddenLabel?: boolean;
  options: {
    value: string;
    label: string;
  }[];
  onChange: (value: string) => void;
  value?: string;
  type?: 'default' | 'color';
  className?: string;
}

const Select = ({
  options,
  label,
  onChange,
  value,
  type = 'default',
  className,
  hiddenLabel = false,
}: SelectProps) => {
  return (
    <div className={clsx(styles.select_container, className)}>
      <Label
        id={`select-${label.replace(/\s/g, '')}`}
        className={clsx(hiddenLabel && styles.hidden_label)}>
        {label}
      </Label>
      <ReactSelect
        aria-labelledby={`select-${label.replace(/\s/g, '')}`}
        options={options}
        className={styles.select}
        defaultValue={options[0]}
        components={type === 'color' ? { Option: ColorOption } : { Option }}
        value={value ? options.find((option) => option.value === value) : null}
        onChange={(option: { value: string; label: string }) =>
          onChange(option?.value)
        }
        classNames={{
          control: (state) => styles.control,
          menu: (state) => styles.menu,
          valueContainer: (state) => styles.value_container,
          menuList: (state) => styles.menu_list,
          singleValue: (state) => styles.single_value,
          dropdownIndicator: (state) => styles.dropdown_indicator,
          indicatorSeparator: (state) => styles.indicator_separator,
        }}
      />
    </div>
  );
};

export default Select;
