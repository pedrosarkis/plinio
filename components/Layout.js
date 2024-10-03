import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 flex items-center">
          <Link href="/" className="mr-8">
            <img src="/images/plinio/plinioMenu.png" alt="Artist Icon" className="w-12 h-12 rounded-full" />
          </Link>
          <nav className="flex-grow">
            <ul className="flex justify-between">
              <li><Link href="/" className="hover:text-gray-300">Início</Link></li>
              <li><Link href="/obras" className="hover:text-gray-300">Obras</Link></li>
              <li><Link href="/pinturas" className="hover:text-gray-300">Pinturas</Link></li>
              <li><Link href="/desenhos" className="hover:text-gray-300">Desenhos</Link></li>
              <li><Link href="/quotes" className="hover:text-gray-300">Quotes</Link></li>
              <li><Link href="/art-periods" className="hover:text-gray-300">Art Periods</Link></li>
              <li><Link href="/fun-facts" className="hover:text-gray-300">Fatos</Link></li>
              <li><Link href="/biografia" className="hover:text-gray-300">Biografia</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          &copy; {new Date().getFullYear()} Your Artist Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;