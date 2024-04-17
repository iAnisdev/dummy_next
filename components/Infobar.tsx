'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { Badge } from './ui/badge';

export default function InfoBar() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['solInfoData'],
    queryFn: () =>
      fetch('http://localhost:123').then((res) => res.json()),
  });

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <>
      <Link href="#">Price: {data.Price}</Link>
      <div className="border-l border-gray-200 h-6" />
      <Link href="#">UpTime: {data.Uptime}</Link>
      <div className="border-l border-gray-200 h-6" />
      <h4>
        One:
        <Badge
          className="rounded-full bg-blue-400 border-blue"
          variant="secondary"
        >
          {data.Dexes[0].Markets}
        </Badge>
      </h4>
      <h4>
        Two:
        <Badge
          className="rounded-full bg-green-400 border-blue"
          variant="secondary"
        >
          {data.Dexes[0].Listings}
        </Badge>
      </h4>
    </>
  );
}
