import { useQuery } from '@tanstack/react-query';
// import { Markets, Listings } from '../interfaces/page';

interface Markets {
  TokenAddress: string;
  Name: string;
  SinceToken: string;
  MintDisabled: boolean;
  HoldersCount: number;
  HoldersDistr: string;
}

interface Listings {
  TokenAddress: string;
  Name: string;
  SinceToken: string;
  MarketCap: string;
  PeakProfit: string;
  MintDisabled: boolean;
  HoldersCount: number;
  HoldersDistr: string;
}

const fetchFromEndpoint = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useFetchData = () => {
  const marketsQuery = useQuery<Markets[]>(['markets'], () =>
    fetchFromEndpoint('/api/users')
  );
  const listingsQuery = useQuery<Listings[]>(['listings'], () =>
    fetchFromEndpoint('/api/posts')
  );

  return { marketsQuery, listingsQuery };
};
