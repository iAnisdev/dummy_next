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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { DataTableMarkets } from './DataTables/DataTable_Markets/data-table';
import { DataTableListings } from './DataTables/DataTable_Listings/data-table';

import { Market, columnsMarket } from './DataTables/DataTable_Markets/columns';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Listing, columnsListing } from './DataTables/DataTable_Listings/columns';
import BalanceCard from './BalanceCard2';
import BuySellCard from './BuySellCard';
import { DropdownMenu, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { ListFilter } from 'lucide-react';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Quickbuy } from '../Dashboard/Quickbuy';
import { Autobuy } from '../Dashboard/Autobuy';
import ButtonLink from '../Dashboard/ButtonLink';
import { useEffect } from 'react';

const marketsData = [
  
  {
    "Address": "6hPYhkgSVmRcBChevQEhamvJ9MdWs2evQKbJuR7S",
    "SecondaryAddress": "WxtJA23jCK7sERLre8BAaFmu43ZdU",
    "Name": "Apple",
    "SecName": "Macbook pro",
    "Time": "2024-04-16T15:18:08-04:00",
    "Peak": "10",
    "testData": true,
    "TimeData": {
        "Timestamp": 1713208730620278000,
    }
},
{
  "Address": "6hPYhkgSVmRcBChevQEhamvJ9MdWs2evQKbJuR7S",
  "SecondaryAddress": "WxtJA23jCK7sERLre8BAaFmu43ZdU",
  "Name": "Microsoft",
  "SecName": "Whatever",
  "Time": "2024-04-16T15:18:08-04:00",
  "Peak": "7",
  "testData": false,
  "TimeData": {
      "Timestamp": 1713208730620278000,
  }
},
{
  "Address": "6hPYhkgSVmRcBChevQEhamvJ9MdWs2evQKbJuR7S",
  "SecondaryAddress": "WxtJA23jCK7sERLre8BAaFmu43ZdU",
  "Name": "Lenovo",
  "SecName": "notebook",
  "Time": "2024-04-16T15:18:08-04:00",
  "Peak": "10",
  "testData": false,
  "TimeData": {
      "Timestamp": 1713208730620278000,
  }
},
{
  "Address": "6hPYhkgSVmRcBChevQEhamvJ9MdWs2evQKbJuR7S",
  "SecondaryAddress": "WxtJA23jCK7sERLre8BAaFmu43ZdU",
  "Name": "asus",
  "SecName": "laptop",
  "Time": "2024-04-16T15:18:08-04:00",
  "Peak": "15",
  "testData": true,
  "TimeData": {
      "Timestamp": 1713208730620278000,
  }
},
{
  "Address": "6hPYhkgSVmRcBChevQEhamvJ9MdWs2evQKbJuR7S",
  "SecondaryAddress": "WxtJA23jCK7sERLre8BAaFmu43ZdU",
  "Name": "HP",
  "SecName": "laptop",
  "Time": "2024-04-16T15:18:08-04:00",
  "Peak": "2",
  "testData": true,
  "TimeData": {
      "Timestamp": 1713208730620278000,
  }
},
  
];

const listingData = [
  
  {
    "Address": "6hPYhkgSVmRcBChevQEhamvJ9MdWs2evQKbJuR7S",
    "SecondaryAddress": "WxtJA23jCK7sERLre8BAaFmu43ZdU",
    "Name": "Apple",
    "SecName": "Macbook pro",
    "Time": "2024-04-16T15:18:08-04:00",
    "Peak": "50",
    "testData": null,
    "TimeData": {
        "Timestamp": 1713208730620278000,
    }
},
{
  "Address": "6hPYhkgSVmRcBChevQEhamvJ9MdWs2evQKbJuR7S",
  "SecondaryAddress": "WxtJA23jCK7sERLre8BAaFmu43ZdU",
  "Name": "Microsoft",
  "SecName": "Whatever",
  "Time": "2024-04-16T15:18:08-04:00",
  "Peak": "3",
  "testData": null,
  "TimeData": {
      "Timestamp": 1713208730620278000,
  }
},
{
  "Address": "6hPYhkgSVmRcBChevQEhamvJ9MdWs2evQKbJuR7S",
  "SecondaryAddress": "WxtJA23jCK7sERLre8BAaFmu43ZdU",
  "Name": "Lenovo",
  "SecName": "notebook",
  "Time": "2024-04-16T15:18:08-04:00",
  "Peak": "27",
  "testData": null,
  "TimeData": {
      "Timestamp": 1713208730620278000,
  }
},
{
  "Address": "6hPYhkgSVmRcBChevQEhamvJ9MdWs2evQKbJuR7S",
  "SecondaryAddress": "WxtJA23jCK7sERLre8BAaFmu43ZdU",
  "Name": "asus",
  "SecName": "laptop",
  "Time": "2024-04-16T15:18:08-04:00",
  "Peak": "1",
  "testData": null,
  "TimeData": {
      "Timestamp": 1713208730620278000,
  }
},
{
  "Address": "6hPYhkgSVmRcBChevQEhamvJ9MdWs2evQKbJuR7S",
  "SecondaryAddress": "WxtJA23jCK7sERLre8BAaFmu43ZdU",
  "Name": "HP",
  "SecName": "laptop",
  "Time": "2024-04-16T15:18:08-04:00",
  "Peak": "10",
  "testData": null,
  "TimeData": {
      "Timestamp": 1713208730620278000,
  }
},
  
];

export default function Dashboard() {
  // const {
  //   isLoading,
  //   error,
  //   data: marketsData,
  // } = useQuery({
  //   queryKey: ['marketsData'],
  //   queryFn: () =>
  //     fetch(`${process.env.baseUrl}/markets`).then((res) =>
  //       res.json()
  //     ),
  //   refetchInterval: 2000,
  //   retry: 5,
  // });

  // const { data: listingsData } = useQuery({
  //   queryKey: ['listingsData'],
  //   queryFn: () =>
  //     fetch(`${process.env.baseUrl}/listings`).then((res) =>
  //       res.json()
  //     ),
  //   refetchInterval: 2000,
  //   retry: 5,
  // });

  // if (isLoading) return 'Loading...';

  // if (error) return 'An error has occurred: ' + error.message;

  return (
    <>
      <div className="grid grid-cols-4 p-1 gap-6">
        <div className="glass-container col-1 col-span-3 row-span-2 rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-4">
          <Tabs defaultValue="market">
            {/* filterSection */}
            <div className="glass-container border border-t rounded-lg p-4 mb-12">
              <div className="flex items-center">
                <div className="flex flex-1 gap-2 items-center">
                  <TabsList>
                    <TabsTrigger value="market">market</TabsTrigger>
                    <TabsTrigger value="listing">listing</TabsTrigger>
                  </TabsList>
                  <Quickbuy />
                  <ButtonLink>Test</ButtonLink>
                  {/* <Button className="glass-container rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-2 focus:ring-offset-3 relative inline-flex h-fit w-fit rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2">
                    <Autobuy />
                  </Button> */}

                  <div className="flex flex-1 items-center justify-end space-x-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 gap-1 text-sm"
                        >
                          <ListFilter className="h-3.5 w-3.5" />
                          <span className="sr-only sm:not-sr-only">Filter</span>
                        </Button>
                      </DropdownMenuTrigger>
                      {/* <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Fulfilled
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Declined
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Refunded
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent> */}
                    </DropdownMenu>
                    {/* <Button
                  size="sm"
                  variant="outline"
                  className="h-7 gap-1 text-sm"
                >
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only">Export</span>
                </Button> */}
                  </div>
                </div>
              </div>
            </div>
            <TabsContent value="market">
              
              <CardHeader>
                <CardTitle>Markets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <DataTableMarkets columns={columnsMarket} data={marketsData} />
                  <div className="flex-nowrap"></div>
                </div>
              </CardContent>
            </TabsContent>
            <TabsContent value="listing">
              <p>listing</p>
              <CardHeader>
                <CardTitle>Swapable Pairs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <DataTableListings columns={columnsListing} data={listingData} />
                  <div className="flex-nowrap"></div>
                </div>
              </CardContent>
            </TabsContent>
          </Tabs>
        </div>

        <div className="glass-container col-2 rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-2">
          <BalanceCard />
        </div>
        <div className="glass-container col-2 rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-2">
          <BuySellCard />
        </div>
      </div>
    </>
  );
}
