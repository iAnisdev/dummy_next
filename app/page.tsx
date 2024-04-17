'use client';

import useFetchData from '@/api/useFetchData';
import Dashboard from '@/components/Dashboard2';
import BalanceCard from '@/components/BalanceCard';
import { columns } from '@/components/DataTables/DataTable_Markets/columns';
import { DataTableMarkets } from '@/components/DataTables/DataTable_Markets/data-table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

// interface Markets {
//   TokenAddress: string;
//   Name: string;
//   SinceToken: string;
//   MintDisabled: boolean;
//   HoldersCount: number;
//   HoldersDistr: string;
// }

// interface Listings {
//   TokenAddress: string;
//   Name: string;
//   SinceToken: string;
//   MarketCap: string;
//   PeakProfit: string;
//   MintDisabled: boolean;
//   HoldersCount: number;
//   HoldersDistr: string;
// }

export default function Home() {
  // const {
  //   isLoading,
  //   error,
  //   data: marketsData,
  // } = useQuery({
  //   queryKey: ['marketsData'],
  //   queryFn: () =>
  //     fetch(`${process.env.baseUrl}/solana/raydium/markets`).then((res) =>
  //       res.json()
  //     ),
  //   refetchInterval: 2000,
  //   retry: 5,
  // });

  return (
    // <>
    //   <Card className="p-4">
    //     <Tabs defaultValue="markets" className="w-[400px]">
    //       <TabsList className="grid w-full grid-cols-2">
    //         <TabsTrigger value="markets">Markets</TabsTrigger>
    //         <TabsTrigger value="listings">Listings</TabsTrigger>
    //       </TabsList>

    //       <TabsContent value="markets">
    //         <CardHeader>
    //           <CardTitle>Non-Swapable Pairs</CardTitle>
    //         </CardHeader>
    //         <CardContent>
    //           <div className="flex justify-between">
    //             <DataTableMarkets columns={columns} data={marketsData} />
    //             <div className="flex-nowrap"></div>
    //           </div>
    //         </CardContent>
    //       </TabsContent>
    //     </Tabs>
    //   </Card>
    // </>
    <div className="flex min-h-screen flex-col p-2 m-3">
      <Dashboard />
    </div>
  );
}
