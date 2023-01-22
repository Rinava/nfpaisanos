import styles from './styles.module.css';
import { useRef } from 'react';
import { getPopularAuctions, getAuctions } from '@/lib/api';
import Headline from '@/components/Headline';
import PopularAuctions from '@/components/PopularAuctions';
import Auctions from '@/components/Auctions';
import { motion } from 'framer-motion';

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
      <motion.div
        initial={{ translateY: 100, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50 }}
        viewport={{
          once: true,
        }}>
        <Headline
          callToAction={handleScrollToAuctions}
          className={styles.headline}
        />
      </motion.div>
      <motion.div
        initial={{ translateY: 100, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.5 }}
        viewport={{
          once: true,
        }}>
        <PopularAuctions auctions={popularAuctions} />
      </motion.div>

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
