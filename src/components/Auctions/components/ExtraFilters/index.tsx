import styles from './styles.module.css';
import { useContext } from 'react';
import { AuctionsContext } from '../..';
import { Select, Range } from '@/components/commons/Forms';
import Divider from '@/components/commons/Divider';

const rarityItems = [
  { value: 'all', label: 'All rarities' },
  { value: 'uncommon', label: 'Uncommon' },
  { value: 'rare', label: 'Rare' },
  { value: 'epic', label: 'Epic' },
  { value: 'legendary', label: 'Legendary' },
];

const colorItems = [
  { value: 'all', label: 'All colors' },
  { value: 'black', label: 'Black' },
  { value: 'blue', label: 'Blue' },
  { value: 'green', label: 'Green' },
  { value: 'orange', label: 'Orange' },
  { value: 'pink', label: 'Pink' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
];

interface ExtraFiltersProp {
  minAndMaxPrice: {
    min: number;
    max: number;
  };
}

const ExtraFilters = ({ minAndMaxPrice }: ExtraFiltersProp) => {
  const { setFilters, filters } = useContext(AuctionsContext);

  return (
    <div className={styles.extra_filters}>
      <Range
        min={minAndMaxPrice.min}
        max={minAndMaxPrice.max}
        step={(minAndMaxPrice.max - minAndMaxPrice.min) / 10}
        value={filters.price}
        label='Price range'
        onChange={(value) => setFilters({ type: 'price', payload: value })}
      />
      <Divider />
      <Select
        label='Rarity'
        options={rarityItems}
        onChange={(value) => setFilters({ type: 'rarity', payload: value })}
        value={filters.attributes.type}
      />
      <Select
        label='Color'
        options={colorItems}
        type='color'
        onChange={(value) => setFilters({ type: 'color', payload: value })}
        value={filters.attributes.color}
      />
    </div>
  );
};

export default ExtraFilters;
