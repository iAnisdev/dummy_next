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
  const { data: marketsData } = useQuery({
    queryKey: ['marketsData'],
    queryFn: () =>
      fetch(`${process.env.baseUrl}/solana/raydium/markets`).then((res) =>
        res.json()
      ),
    refetchInterval: 2000,
    retry: 5,
  });
  const { data: listingsData } = useQuery({
    queryKey: ['marketsData'],
    queryFn: () =>
      fetch(`${process.env.baseUrl}/solana/raydium/listings`).then((res) =>
        res.json()
      ),
    refetchInterval: 2000,
    retry: 5,
  });

  return { marketsData, listingsData };
};

export default useFetchData;
