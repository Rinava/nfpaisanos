import styles from './styles.module.css';
import { createContext, forwardRef, useMemo, useReducer } from 'react';
import Search from './components/Search';
import Auction from './components/Auction';
import Button from '@/components/commons/Button';
import { LoadingIcon } from '@/components/commons/Icons';
import Filters from './components/Filters';
import ExtraFilters from './components/ExtraFilters';

interface AuctionsContextProps {
  setFilters: (filters: any) => void;
  filters: any;
}

export const AuctionsContext = createContext<AuctionsContextProps>({
  setFilters: () => {},
  filters: {},
});

interface AuctionsProps {
  auctions: any[];
}

const Auctions = forwardRef(({ auctions }: AuctionsProps, ref: any) => {
  const [filters, setFilters] = useReducer(
    (state: any, action: any) => {
      switch (action.type) {
        case 'search':
          return {
            ...state,
            search: action.payload,
          };
        case 'sortBy':
          return {
            ...state,
            sortBy: action.payload,
          };
        case 'rarity':
          return {
            ...state,
            attributes: {
              ...state.attributes,
              type: action.payload,
            },
          };
        case 'color':
          return {
            ...state,
            attributes: {
              ...state.attributes,
              color: action.payload,
            },
          };
        case 'reset':
          return {
            search: '',
            sortBy: 'newest',
            attributes: {
              type: 'all',
              color: 'all',
            },
          };

        default:
          return state;
      }
    },
    {
      search: '',
      sortBy: 'newest',
      attributes: {
        type: 'all',
        color: 'all',
      },
    }
  );

  const filteredAuctions = useMemo(() => {
    let auc = [...auctions];

    if (filters.search !== '') {
      auc = auc.filter((auction) =>
        auction.author.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    for (const key in filters.attributes) {
      if (filters.attributes[key] !== 'all') {
        auc = auc.filter(
          (auction) => auction.attributes[key] === filters.attributes[key]
        );
      }
    }

    return auc;
  }, [auctions, filters]);

  return (
    <AuctionsContext.Provider value={{ setFilters, filters }}>
      <div className={styles.auctions} ref={ref}>
        <Search />
        <Filters />
        <ExtraFilters />
        <Button onClick={() => setFilters({ type: 'reset' })}>
          Reset Filters
        </Button>
        {filteredAuctions.map((auction) => (
          <Auction key={auction.id} auction={auction} />
        ))}
        <Button onClick={() => {}}>
          <span className={styles.icon}>
            <LoadingIcon />
          </span>
          Load more
        </Button>
      </div>
    </AuctionsContext.Provider>
  );
});

Auctions.displayName = 'Auctions';

export default Auctions;
