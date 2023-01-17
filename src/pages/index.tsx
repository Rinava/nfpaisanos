import { getCurrentETHPrice, getPopularAuctions } from '@/lib/api';
import PopularAuctions from '@/components/PopularAuctions';
import Headline from '@/components/Headline';

interface Props {
  ethUsdPrice: {
    usd: number;
    eth: number;
  };
}

export default function Home({ ethUsdPrice, popularAuctions }: Props) {
  return (
    <>
      <Headline />
      <PopularAuctions auctions={popularAuctions.slice(0, 1)} />
    </>
  );
}

export const getStaticProps = async () => {
  const ethUsdPrice = await getCurrentETHPrice();
  const popularAuctions = await getPopularAuctions();

  return {
    props: {
      ethUsdPrice,
      popularAuctions,
    },
    revalidate: 10,
  };
};
