import React from 'react';
import Link from 'next/link';

const SidebarNav = () => {
  const periods = [
    "Before 1901",
    "Blue Period",
    "Rose Period",
    "African-influenced Period",
    "Cubism",
    "Neoclassicism and Surrealism",
    "Later Works",
    "Final Years"
  ];

  return (
    <nav className="bg-gray-100 p-4 rounded">
      <h2 className="text-xl font-bold mb-4">Artistic Periods</h2>
      <ul>
        {periods.map((period, index) => (
          <li key={index} className="mb-2">
            <Link href={`#${period.toLowerCase().replace(/ /g, '-')}`} className="text-blue-600 hover:underline">
              {period}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNav;