import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import { Copy, Truck } from 'lucide-react';
import { DataTableBalance } from './DataTables/DataTables_Balance/data-table';
import { columns } from './DataTables/DataTables_Balance/columns';

// Assuming Shadcn provides components like 'Card', 'Table', 'Thead', etc., similar to how you might find in libraries such as Material-UI, Ant Design, etc.
// Since Shadcn is hypothetical, we simulate these with basic HTML and Tailwind for styling.

const BalanceCard = () => {
  const data: any = [
    { SecondaryAddress: 'vnksdssjCK7sERLre8BAaFmu43Zd', Amount: '12', Profit: 455 },
    { SecondaryAddress: 'sERLre8BjCK7sERLre8BAaFmu3Zt', Amount: '16', Profit: 99 },
    { SecondaryAddress: 'fesfdsf3jCK7sERLre8BAaFfdsdd', Amount: '01', Profit: 120 },
    { SecondaryAddress: 'iopppJ3jCK7sERLre8BAaFmklb4e', Amount: '03', Profit: -90 },
  ];

  return (
    <>
      <h3 className="text-slate-500 text-xl px-4">Balance</h3>
      <DataTableBalance columns={columns} data={data} />
    </>
  );
};

export default BalanceCard;
