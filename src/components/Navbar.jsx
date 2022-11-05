import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdVerified } from 'react-icons/md';

const Navbar = ({ active }) => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between">
        <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="ml-3 text-xl">Entertainer</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/movies" className={`mr-5 hover:text-white ${active === 'Movies' && 'text-white'}`}>
            Movies / Series
          </Link>
          <Link href="/anime" className={`mr-5 hover:text-white ${active === 'Anime' && 'text-white'}`}>
            Anime
          </Link>
          {/* <a className="mr-5 hover:text-white">Third Link</a>
          <a className="mr-5 hover:text-white">Fourth Link</a> */}
        </nav>
        <div className="inline-flex items-end bg-gray-700 border-0 py-1 pb-1.5 px-3 focus:outline-none hover:bg-gray-600 rounded text-sm mt-4 md:mt-0 justify-center text-white font-semibold gap-1.5">
          Pinaki Bhattacharjee
          <MdVerified className="mb-0.5" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
