'use-client';

import { cn } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../ui/dropdown-menu';
import { Button } from '../../ui/button';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

export type Listing = {
  Address: string;
  SecondaryAddress: string;
  Name: string;
  SecName: string;
  Time: number;
  Peak: number;
  testData: string;
  TimeData: boolean;
};

function getStatusColor(name: string) {
  if (name === 'asus') {
    return 'bg-green-600';
  }
    return 'bg-blue-500';
  }


export const columnsListing: ColumnDef<Listing>[] = [
  {
    accessorKey: 'Address',
    header: 'Address',
    cell: ({ row }) => {
      const value: string = row.getValue('Name');
      const color = getStatusColor(value);
      return (
        <div className={cn('rounded-full px-2 text-white', color)}>{value}</div>
      );
    },
  },
  {
    accessorKey: 'SecondaryAddress',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          SecondaryAddress
          <ArrowUpDown className="ml-1 h-3 w-3" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'Name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown className="ml-1 h-3 w-3" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'Peak',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Peak
          <ArrowUpDown className="ml-1 h-3 w-3" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'testData',
    header: 'testData',
  },
  {
    accessorKey: 'TimeData.Timestamp',
    header: 'TimeData Timestamp',
    // cell: ({ row }) => {
    //   const value: string = row.getValue('Name');
    //   console.log(value);

    // },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const listing = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(listing.Name)}
            >
              Copy Name
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={(event) => {
                if (event.metaKey || event.ctrlKey) {
                  setTimeout(() =>
                    window.open(
                      `https://www.dexscreener.com/solana/${market.TokenAddress}?maker=${wallet}>`
                    )
                  );
                } else {
                  window.open(
                    `https://www.dexscreener.com/solana/${market.TokenAddress}`
                  );
                }
              }}
            >
              Dexscreener
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                window.open(`https://solscan.io/token/${market.TokenAddress}`);
              }}
            >
              Solscan
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
