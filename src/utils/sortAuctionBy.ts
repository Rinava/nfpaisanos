import { auctionType } from '../types/auctionType';

type sortType =
  | 'newest'
  | 'oldest'
  | 'mostLiked'
  | 'leastLiked'
  | 'highestBid'
  | 'lowestBid'
  | 'highestPrice'
  | 'lowestPrice';

type sortersType = {
  [key in sortType]: (auctions: Array<auctionType>) => Array<auctionType>;
};

const sorters: sortersType = {
  newest: (auctions) => {
    return auctions.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  },
  oldest: (auctions) => {
    return auctions.sort((a, b) => {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });
  },
  mostLiked: (auctions) => {
    return auctions.sort((a, b) => {
      return b.likes - a.likes;
    });
  },
  leastLiked: (auctions) => {
    return auctions.sort((a, b) => {
      return a.likes - b.likes;
    });
  },
  highestBid: (auctions) => {
    return auctions.sort((a, b) => {
      return parseFloat(b.highestBid) - parseFloat(a.highestBid);
    });
  },
  lowestBid: (auctions) => {
    return auctions.sort((a, b) => {
      return parseFloat(a.highestBid) - parseFloat(b.highestBid);
    });
  },
  highestPrice: (auctions) => {
    return auctions.sort((a, b) => {
      return parseFloat(b.instantPrice) - parseFloat(a.instantPrice);
    });
  },
  lowestPrice: (auctions) => {
    return auctions.sort((a, b) => {
      return parseFloat(a.instantPrice) - parseFloat(b.instantPrice);
    });
  },
};

const sortAuctionBy = (auctions: Array<auctionType>, sortType: sortType) => {
  return sorters[sortType](auctions);
};

export default sortAuctionBy;
