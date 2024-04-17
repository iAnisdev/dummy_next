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
import { Icons } from '@/components/icons';

export type Balance = {
  Name: string;
  Balance: string;
  Profit: number;
};

function getProfit(profit: number) {
  if (profit > 100) {
    return 'justify-center inline-block animate-pulse text-green-600';
  } else if (profit < 0) {
    return 'text-red-500';
  } else {
    return 'text-slate-200';
  }
}
function getStatusColor(status: string) {
  if (status === 'DORSIA') {
    return ' bg-green-600';
  } else if (status === 'REFUSED') {
    return 'bg-red-500';
  } else if (status === 'WAITING') {
    return 'bg-yellow-500';
  } else {
    return 'bg-blue-500';
  }
}
//Temporarily
const wallet = 11111;

export const columns: ColumnDef<Balance>[] = [
  {
    accessorKey: 'SecondaryAddress',
    header: 'SecondaryAddress',
    // cell: ({ row }) => {
    //   const value: string = row.getValue('Name');
    //   const color = getStatusColor(value);
    //   return (
    //     <div className={cn('rounded-full px-2 text-white', color)}>{value}</div>
    //   );
    // },
  },
  {
    accessorKey: 'Amount',
    header: 'Amount',
  },
  {
    accessorKey: 'Profit',
    header: 'Profit',
    cell: ({ row }) => {
      const value: number = row.getValue('Profit');
      const profit = getProfit(value);
      return (
        <>
          <div className={profit}>{value}%</div>
        </>
      );
    },
  },

  {
    id: 'actions',
    cell: ({ row }) => {
      const market = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Sell</DropdownMenuItem>
            <DropdownMenuItem>Buy</DropdownMenuItem>        
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
