import {
  IconGitHub,
} from '@/components/ui/icons';
import { Button } from '@/components/ui/button';

export async function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full px-4 border-b h-31 shrink-0 dark:bg-slate-800 bg-white backdrop-blur-xl" style={{ height: 'calc(100% + 10%)' }}>
      <span className="inline-flex items-center home-links whitespace-nowrap">
        <a href="https://www.freight-companion.com" rel="noopener" target="_blank">
          <span className="block sm:inline text-lg sm:text-xl lg:text-2xl font-semibold dark:text-white text-black">Freight Companion Search</span>
        </a>
      </span>
      <div className="flex items-center justify-end space-x-2">
        <Button variant="outline" asChild>
          <a
            target="_blank"
            href="https://freight-companion.com"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-black dark:text-white font-semibold py-2 px-4 rounded shadow"
          >
            <img src="/freightcompanionlogo.png" alt="Freight Companion Logo" style={{ maxWidth: '1500px', maxHeight: '50px' }} />
          </a>
        </Button>
      </div>
    </header>
  );
}
