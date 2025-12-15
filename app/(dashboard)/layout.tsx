'use client';

import Link from 'next/link';
import { use, useState, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { CircleIcon, Home, LogOut, Menu as MenuIcon, X as CloseIcon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { signOut } from '@/app/(login)/actions';
import { useRouter } from 'next/navigation';
import { User } from '@/lib/db/schema';
import useSWR, { mutate } from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function UserMenu({ vertical = false }: { vertical?: boolean } = {}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: user } = useSWR<User>('/api/user', fetcher);
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    mutate('/api/user');
    router.push('/');
  }

  if (!user) {
    return null;
  }

  // For authenticated users, only show avatar and dropdown for account actions
  return (
    <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <DropdownMenuTrigger>
        <Avatar className="cursor-pointer size-9">
          <AvatarImage alt={user.name || ''} />
          <AvatarFallback className='capitalize'>
            {user.name != null
              ? user.name!
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
              : user.email!
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="flex flex-col gap-1">
        <DropdownMenuItem className="cursor-pointer">
          <Link href="/dashboard/general" className="flex w-full items-center">
            <Home className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <form action={handleSignOut} className="w-full">
          <button type="submit" className="flex w-full">
            <DropdownMenuItem className="w-full flex-1 cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sign out</span>
            </DropdownMenuItem>
          </button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: user } = useSWR<User>('/api/user', fetcher);
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <CircleIcon className="h-6 w-6 text-orange-500 animate-pulse" />
          <span className="ml-2 text-xl font-semibold text-gray-900">ConversionCore.AI</span>
        </Link>
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/skip-tracing"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Skip Tracing
          </Link>
          <Link
            href="/realtor-automation"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Realtor Automation
          </Link>
          {!user ? (
            <Button asChild className="rounded-full ml-4">
              <Link href="/sign-in">Sign In</Link>
            </Button>
          ) : (
            <Suspense fallback={<div className="h-9" />}>
              <UserMenu />
            </Suspense>
          )}
        </div>
        {/* Hamburger icon for mobile */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </div>
      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg px-4 py-4">
          <Link
            href="/skip-tracing"
            className="block text-sm font-medium text-gray-700 hover:text-gray-900 mb-2"
          >
            Skip Tracing
          </Link>
          <Link
            href="/realtor-automation"
            className="block text-sm font-medium text-gray-700 hover:text-gray-900 mb-2"
          >
            Realtor Automation
          </Link>
          {!user ? (
            <Button asChild className="rounded-full w-full mt-2">
              <Link href="/sign-in">Sign In</Link>
            </Button>
          ) : (
            <Suspense fallback={<div className="h-9" />}>
              <UserMenu vertical />
            </Suspense>
          )}
        </div>
      )}
    </header>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      {children}
    </section>
  );
}
