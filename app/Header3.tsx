'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { Badge } from '@/components/ui/badge';

export default function Header() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['solInfoData'],
    queryFn: () =>
      fetch('http://localhost:12345/solana').then((res) => res.json()),
  });

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <nav className="flex flex-row items-center h-16 px-4 border-b border-gray-200 shrink-0 gap-4 md:px-6">
      <div className="flex flex-1 items-center justify-start space-x-4">
        <Link
          className="flex items-center gap-2 text-lg font-semibold"
          href="#"
        >
          <PackageIcon className="w-5 h-5" />
          <span>Dummy</span>
        </Link>
        <div className="border-l border-gray-200 h-6" />
        <div className="flex items-center gap-2 text-sm font-medium">
          <BookIcon className="w-4 h-4" />
          <Link href="#">New Pairs</Link>
        </div>
      </div>
      <Link href="#">Sol price: {data.Price}</Link>
      <div className="border-l border-gray-200 h-6" />
      <Link href="#">UpTime: {data.Uptime}</Link>
      <div className="border-l border-gray-200 h-6" />
      <h4>
        Markets:
        <Badge
          className="rounded-full bg-blue-400 border-blue"
          variant="secondary"
        >
          {data.Dexes[0].Markets}
        </Badge>
      </h4>
      <h4>
        Listings:
        <Badge
          className="rounded-full bg-green-400 border-blue"
          variant="secondary"
        >
          {data.Dexes[0].Listings}
        </Badge>
      </h4>
      <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-8 flex-1 justify-end">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Link className="underline" href="#">
            Sol price
          </Link>
          <Link className="underline" href="#">
            Blog
          </Link>
          <Link className="underline" href="#">
            Showcase
          </Link>
          <BookIcon className="w-4 h-4" />
        </div>
      </div>
    </nav>
  );
}

function BookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function PackageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}
