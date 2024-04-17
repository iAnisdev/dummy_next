import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';

// Assuming Shadcn provides components like 'Card', 'Table', 'Thead', etc., similar to how you might find in libraries such as Material-UI, Ant Design, etc.
// Since Shadcn is hypothetical, we simulate these with basic HTML and Tailwind for styling.

const BuySellCard = () => {
  const data = [
    { column1: 'Row 1 Col 1', column2: 'Row 1 Col 2' },
    { column1: 'Row 2 Col 1', column2: 'Row 2 Col 2' },
    { column1: 'Row 3 Col 1', column2: 'Row 3 Col 2' },
    { column1: 'Row 4 Col 1', column2: 'Row 4 Col 2' },
    { column1: 'Row 5 Col 1', column2: 'Row 5 Col 2' },
  ];

  return (
    <>
      <Tabs defaultValue="buy">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="buy">Buy</TabsTrigger>
          <TabsTrigger value="sell">Sell</TabsTrigger>
        </TabsList>
        <p className="text-slate-400 text-sm">Secondary Address: XXXXXX</p>
        <TabsContent value="buy">
          <Card>
            <CardContent className="space-y-2">
              <div className="grid">
                <ToggleGroup
                  type="single"
                  defaultValue="0.01"
                  variant="outline"
                  className="grid grid-cols-2 mt-4"
                >
                  <ToggleGroupItem value="0.01" className="">
                    0.01
                  </ToggleGroupItem>
                  <ToggleGroupItem value="0.05">0.05</ToggleGroupItem>
                  <ToggleGroupItem value="0.1">0.1</ToggleGroupItem>
                  <ToggleGroupItem value="0.2">0.2</ToggleGroupItem>
                  <ToggleGroupItem value="0.5">0.5</ToggleGroupItem>
                  <ToggleGroupItem value="1">1</ToggleGroupItem>
                </ToggleGroup>
                <Input
                  className="rounded-full mt-3"
                  type="amount"
                  placeholder="Custom amount"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button className="rounded-full border border-t items-center bg-green-800 text-white">
                Buy
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="sell">
          <Card>
            <CardContent className="space-y-2">
              <div className="grid">
                <ToggleGroup
                  type="single"
                  defaultValue="25"
                  variant="outline"
                  className="grid grid-cols-2 mt-4 space-x-2"
                >
                  <ToggleGroupItem value="10">10%</ToggleGroupItem>
                  <ToggleGroupItem value="15">15%</ToggleGroupItem>
                  <ToggleGroupItem value="25">25%</ToggleGroupItem>
                  <ToggleGroupItem value="50">50%</ToggleGroupItem>
                  <ToggleGroupItem value="75">75%</ToggleGroupItem>
                  <ToggleGroupItem value="100">100%</ToggleGroupItem>
                </ToggleGroup>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button className="rounded-full border border-t items-center bg-red-800 text-white">
                Sell
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </>
    // <div className="w-1/3 h-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
    //   <div className="p-5">
    //     <h2 className="text-xl font-semibold text-gray-800 mb-4">Data Table</h2>
    //     <div className="overflow-x-auto">
    //       <table className="w-full text-sm text-left text-gray-500">
    //         <thead className="text-xs text-gray-700 uppercase bg-gray-50">
    //           <tr>
    //             <th className="py-3 px-5">Column 1</th>
    //             <th className="py-3 px-5">Column 2</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {data.map((row, index) => (
    //             <tr key={index} className="bg-white border-b hover:bg-gray-50">
    //               <td className="py-4 px-5">{row.column1}</td>
    //               <td className="py-4 px-5">{row.column2}</td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    // </div>
  );
};

export default BuySellCard;
