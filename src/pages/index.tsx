import styles from './styles.module.css';
import { useRef } from 'react';
import { getPopularAuctions, getAuctions } from '@/lib/api';
import Headline from '@/components/Headline';
import PopularAuctions from '@/components/PopularAuctions';
import Auctions from '@/components/Auctions';

interface Props {
  popularAuctions: any[];
  auctions: any[];
}

export default function Home({ popularAuctions, auctions }: Props) {
  const auctionsRef = useRef<HTMLDivElement>(null);

  const handleScrollToAuctions = () => {
    window.scrollTo({
      top: (auctionsRef?.current?.offsetTop || 0) - 100,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Headline
        callToAction={handleScrollToAuctions}
        className={styles.headline}
      />
      <PopularAuctions auctions={popularAuctions} />
      <Auctions
        auctions={auctions}
        ref={auctionsRef}
        className={styles.auctions}
      />
    </>
  );
}

export const getStaticProps = async () => {
  const popularAuctions = await getPopularAuctions();
  const auctions = await getAuctions();

  return {
    props: {
      popularAuctions,
      auctions,
    },

    revalidate: 10,
  };
};
