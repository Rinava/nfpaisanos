import { getPopularAuctions, getAuctions } from '@/lib/api';
import PopularAuctions from '@/components/PopularAuctions';
import Headline from '@/components/Headline';
import Auctions from '@/components/Auctions';

interface Props {
  popularAuctions: any[];
  auctions: any[];
}

export default function Home({ popularAuctions, auctions }: Props) {
  return (
    <>
      <Headline />
      <PopularAuctions auctions={popularAuctions} />
      <Auctions auctions={auctions} />
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
