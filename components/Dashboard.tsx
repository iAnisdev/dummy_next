'use client';
import { useQuery } from '@tanstack/react-query';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { DataTableMarkets } from './DataTables/DataTable_Markets/data-table';
import { DataTableListings } from './DataTables/DataTable_Listings/data-table';

import { Market, columns } from './DataTables/DataTable_Markets/columns';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { columnsListings } from './DataTables/DataTable_Listings/columns';
import BalanceCard from './BalanceCard2';
import BuySellCard from './BuySellCard';

export default function Dashboard() {
  const {
    isLoading,
    error,
    data: marketsData,
  } = useQuery({
    queryKey: ['marketsData'],
    queryFn: () =>
      fetch(`${process.env.baseUrl}/solana/raydium/markets`).then((res) =>
        res.json()
      ),
    refetchInterval: 2000,
    retry: 5,
  });

  const { data: listingsData } = useQuery({
    queryKey: ['listingsData'],
    queryFn: () =>
      fetch(`${process.env.baseUrl}/solana/raydium/listings`).then((res) =>
        res.json()
      ),
    refetchInterval: 2000,
    retry: 5,
  });

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <>
      <Card className="xl:col-span-2">
        <div className="flex flex-row p-4">
          <div className="w-2/3">
            <Tabs defaultValue="markets" className="w-[400px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="markets">Markets</TabsTrigger>
                <TabsTrigger value="listings">Listings</TabsTrigger>
              </TabsList>

              <TabsContent value="markets">
                <CardHeader>
                  <CardTitle>Non-Swapable Pairs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between">
                    <DataTableMarkets columns={columns} data={marketsData} />
                    <div className="flex-nowrap"></div>
                  </div>
                </CardContent>
              </TabsContent>

              <TabsContent value="listings">
                <CardHeader>
                  <CardTitle>Swapable Pairs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between">
                    <DataTableListings columns={columns} data={listingsData} />
                    <div className="flex-nowrap"></div>
                  </div>
                </CardContent>
              </TabsContent>
            </Tabs>
          </div>
          <div className="grid grid-cols-3 pt-8 w-full">
            <BalanceCard />
            <BuySellCard />
          </div>
        </div>
      </Card>
    </>
  );
}
