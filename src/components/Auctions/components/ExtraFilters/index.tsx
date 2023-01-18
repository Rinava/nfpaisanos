import styles from './styles.module.css';
import { useContext } from 'react';
import { AuctionsContext } from '../..';
import { Select, Range } from '@/components/commons/Forms';

interface ExtraFiltersProp {}

const ExtraFilters = (props: ExtraFiltersProp) => {
  const { setFilters, filters } = useContext(AuctionsContext);

  return (
    <>
      <Range />
      <Select
        label='Rarity'
        options={[
          { value: 'all', label: 'All rarities' },
          { value: 'uncommon', label: 'Uncommon' },
          { value: 'rare', label: 'Rare' },
          { value: 'epic', label: 'Epic' },
          { value: 'legendary', label: 'Legendary' },
        ]}
        onChange={(value) => setFilters({ type: 'rarity', payload: value })}
        value={filters.attributes.type}
      />
      <Select
        label='Color'
        options={[
          { value: 'all', label: 'All colors' },
          { value: 'black', label: 'Black' },
          { value: 'blue', label: 'Blue' },
          { value: 'green', label: 'Green' },
          { value: 'orange', label: 'Orange' },
          { value: 'pink', label: 'Pink' },
          { value: 'purple', label: 'Purple' },
          { value: 'red', label: 'Red' },
        ]}
        type='color'
        onChange={(value) => setFilters({ type: 'color', payload: value })}
        value={filters.attributes.color}
      />
    </>
  );
};

export default ExtraFilters;
