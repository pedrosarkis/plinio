import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-800">
      <header className="py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-evenly">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/plinio/plinioMenu.png"
                alt="Artist Icon"
                width={45}
                height={48}
                className="rounded-full"
              />
            </Link>
            <ul className="flex space-x-6 items-center text-white">
              <li><Link href="/" className="hover:text-gray-300">Início</Link></li>
              <li><Link href="/masterpieces" className="hover:text-gray-300">Obras</Link></li>
              <li><Link href="/pinturas" className="hover:text-gray-300">Pinturas</Link></li>
              <li><Link href="/desenhos" className="hover:text-gray-300">Desenhos</Link></li>
              <li><Link href="/quotes" className="hover:text-gray-300">Citações</Link></li>
              <li><Link href="/art-periods" className="hover:text-gray-300">Arte</Link></li>
              <li><Link href="/fun-facts" className="hover:text-gray-300">Fatos</Link></li>
              <li><Link href="/biografia" className="hover:text-gray-300">Biografia</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow bg-white">
        {children}
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          &copy; {new Date().getFullYear()} Pablo Picasso Website. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;