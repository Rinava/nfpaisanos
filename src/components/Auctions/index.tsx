import styles from './styles.module.css';
import clsx from 'clsx';
import { createContext, forwardRef, useMemo, useReducer } from 'react';
import Auction from './components/Auction';
import Search from './components/Search';
import Filters from './components/Filters';
import ExtraFilters from './components/ExtraFilters';
import Button from '@/components/commons/Button';
import Divider from '@/components/commons/Divider';
import sortBy from '@/utils/sortAuctionBy';
import { LoadingIcon, CloseIcon } from '@/components/commons/Icons';

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
  className?: string;
}

const Auctions = forwardRef(
  ({ auctions, className }: AuctionsProps, ref: any) => {
    const minAndMaxPrice = useMemo(
      () =>
        auctions.reduce(
          (minAndMax, auction) => {
            const price = parseFloat(auction.instantPrice);

            if (price < minAndMax.min) minAndMax.min = price;

            if (price > minAndMax.max) minAndMax.max = price;

            return minAndMax;
          },
          { min: Infinity, max: 0 }
        ),
      [auctions]
    );

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
              price: minAndMaxPrice.max,
              type: 'all',
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

      // Search
      if (filters.search !== '') {
        auc = auc.filter((auction) =>
          auction.author.toLowerCase().includes(filters.search.toLowerCase())
        );
      }

      // Price
      auc = auc.filter(
        (auction) => parseFloat(auction.instantPrice) <= filters.price
      );

      // Type
      if (filters.type !== 'all') {
        auc = auc.filter((auction) => auction.type === filters.type);
      }

      // Rarity and Color
      for (const key in filters.attributes) {
        if (filters.attributes[key] !== 'all') {
          auc = auc.filter(
            (auction) => auction.attributes[key] === filters.attributes[key]
          );
        }
      }

      // SortBy
      auc = sortBy(auc, filters.sortBy);

      return auc;
    }, [auctions, filters]);

    return (
      <AuctionsContext.Provider value={{ setFilters, filters }}>
        <section className={clsx(styles.section, className)} ref={ref}>
          <Search />
          <Filters />
          <div className={styles.container}>
            <aside className={styles.sidebar}>
              <ExtraFilters minAndMaxPrice={minAndMaxPrice} />
              <Divider />
              <Button
                variant='text'
                className={styles.reset}
                onClick={() => setFilters({ type: 'reset' })}>
                <span className={styles.close_icon}>
                  <CloseIcon />
                </span>
                Reset Filters
              </Button>
            </aside>
            <div className={styles.auctions_container}>
              <div className={styles.auctions}>
                {filteredAuctions.map((auction) => (
                  <Auction key={auction.id} auction={auction} />
                ))}
              </div>
              {filteredAuctions.length === 0 ? (
                <div className={styles.no_auctions}>
                  <h3 className={styles.no_auctions_heading}>
                    No auctions found that match your filters
                  </h3>
                  <p>Try to search for something else</p>
                </div>
              ) : (
                <Button onClick={() => {}} className={styles.load_more}>
                  <span className={styles.loading_icon}>
                    <LoadingIcon />
                  </span>
                  Load more
                </Button>
              )}
            </div>
          </div>
        </section>
      </AuctionsContext.Provider>
    );
  }
);

Auctions.displayName = 'Auctions';

export default Auctions;
