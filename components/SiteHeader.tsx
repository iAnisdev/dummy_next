import Link from 'next/link';
import { Button } from './ui/button';
import { Icons } from './icons';
import InfoBar from './Infobar';

export function SiteHeader() {
  return (
    <header className=" top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex items-center space-x-4 lg:space-x-6">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Icons.logo className="h-6 w-6" />
            <span className="font-bold">Dummy</span>
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <InfoBar />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Link href="/settings" className="mr-6 flex items-center space-x-2">
              <span>Settings</span>
            </Link>

          </nav>
        </div>
      </div>
    </header>
  );
}
