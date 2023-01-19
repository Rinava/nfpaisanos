import styles from './styles.module.css';
import { createContext, forwardRef, useMemo, useReducer } from 'react';
import Search from './components/Search';
import Auction from './components/Auction';
import Button from '@/components/commons/Button';
import Divider from '../commons/Divider';
import { LoadingIcon, CloseIcon } from '@/components/commons/Icons';
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
  const minAndMaxPrice = useMemo(() => {
    return auctions.reduce(
      (minAndMax, auction) => {
        const price = parseFloat(auction.instantPrice);

        if (price < minAndMax.min) {
          minAndMax.min = price;
        }
        if (price > minAndMax.max) {
          minAndMax.max = price;
        }
        return minAndMax;
      },
      { min: Infinity, max: 0 }
    );
  }, [auctions]);

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
        case 'type':
          return {
            ...state,
            type: action.payload,
          };
        case 'price':
          return {
            ...state,
            price: action.payload,
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
            type: 'all',
          };

        default:
          return state;
      }
    },
    {
      search: '',
      sortBy: 'newest',
      price: minAndMaxPrice.max,
      type: 'all',
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
    auc = auc.filter(
      (auction) => parseFloat(auction.instantPrice) <= filters.price
    );

    for (const key in filters.attributes) {
      if (filters.attributes[key] !== 'all') {
        auc = auc.filter(
          (auction) => auction.attributes[key] === filters.attributes[key]
        );
      }
    }

    if (filters.type !== 'all') {
      auc = auc.filter((auction) => auction.type === filters.type);
    }

    return auc;
  }, [auctions, filters]);

  return (
    <AuctionsContext.Provider value={{ setFilters, filters }}>
      <section className={styles.section} ref={ref}>
        <Search className={styles.search} />
        <Filters className={styles.filters} />
        <div className={styles.container}>
          <aside className={styles.sidebar}>
            <ExtraFilters minAndMaxPrice={minAndMaxPrice} />
            <Divider />
            <Button
              variant='text'
              className={styles.reset}
              onClick={() => setFilters({ type: 'reset' })}>
              <span className={styles.icon}>
                <CloseIcon />
              </span>
              Reset Filters
            </Button>
          </aside>
          <div className={styles.auctions}>
            {filteredAuctions.map((auction) => (
              <Auction key={auction.id} auction={auction} />
            ))}
          </div>
        </div>
        <Button onClick={() => {}}>
          <span className={styles.icon}>
            <LoadingIcon />
          </span>
          Load more
        </Button>
      </section>
    </AuctionsContext.Provider>
  );
});

Auctions.displayName = 'Auctions';

export default Auctions;
