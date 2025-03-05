"use client";

import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import BookFreeTrialButton from "./BookFreeTrialButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#003366] text-white p-4">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" passHref>
          <h1 className="text-3xl text-[#FFBC36] font-bold font-batangas cursor-pointer">
            Study<span className="text-[#0097B2] font-bold">Cubs</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-16 uppercase">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/#our-courses" className="hover:text-gray-300">
            Courses
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
          <Link href="/#about" className="hover:text-gray-300">
            About
          </Link>
        </div>

        <div className="hidden md:flex sm:hidden">
          <BookFreeTrialButton className="bg-[#0097B2] px-6 py-4 rounded-lg text-white hover:bg-[#007a90]" />
        </div>

        <div className="md:hidden flex items-center space-x-4 ">
          <BookFreeTrialButton className="bg-[#0097B2] px-3 py-2 rounded-lg text-white hover:bg-[#007a90] sm:hidden max-[415px]:hidden" />
          <button onClick={() => setIsOpen(!isOpen)}>
            <GiHamburgerMenu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#003366] space-y-4 py-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/#our-courses" className="hover:text-gray-300">
            Courses
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
          <Link href="/#about" className="hover:text-gray-300">
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
