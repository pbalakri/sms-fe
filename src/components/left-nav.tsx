"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (path: string) => pathname.startsWith(path);
  console.log(pathname);

  return (
    <nav className="w-9/10 sm:w-1/2 md:w-1/2 lg:w-1/4 h-full min-h-screen flex flex-col gap-2 bg-black z-10 shadow-lg">
      <div className="fixed top-0 left-0 sm:hidden p-4 z-20">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-500 hover:text-white focus:outline-none focus:text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
      <div className={`sm:flex p-4 pt-10 flex-col gap-2 ${isOpen ? "block" : "hidden"}  z-10 bg-black`}>
        <div className="relative mb-4 p-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
          <FaSearch className="absolute top-7 right-6 text-gray-500" />
        </div>
        <Link href="/" className="block text-gray-500 text-large hover:text-white">
            Home
          </Link>
        <div className="group">
          <Link href="/students" className={`block text-large hover:text-white ${isActive("/students") ? "text-white" : "text-gray-500"}`}>
            Students
          </Link>  
          <div className={`pl-4 ${isActive("/students") ? "block" : "hidden"}`}>
            <Link href="/students/create" className="block text-gray-500 text-medium hover:text-white">
              New
            </Link>
          </div>
        </div>
        
        <div className="group">
          <Link href="/departments" className={`block text-large hover:text-white ${isActive("/departments") ? "text-white" : "text-gray-500"}`}>
            Departments
          </Link>
          <div className={`pl-4 ${isActive("/departments") ? "block" : "hidden"}`}>
            <Link href="/home/sub1" className="block text-gray-500 text-medium hover:text-white">
              English
            </Link>
            <Link href="/departments/1" className="block text-gray-500 text-medium hover:text-white">
              Mathematics
            </Link>
          </div>
          </div>
        <div className="group">
          <Link href="/staff" className={`block text-large hover:text-white ${isActive("/staff") ? "text-white" : "text-gray-500"}`}>
            Staff
          </Link>
          <div className={`pl-4 ${isActive("/staff") ? "block" : "hidden"}`}>
            <Link href="/home/sub1" className="block text-gray-500 text-medium hover:text-white">
              Absence
            </Link>
          </div>
        </div>
        <Link href="/courses" className="block text-gray-500 text-large hover:text-white">
          Courses
        </Link>
        <Link href="/resources" className="block text-gray-500 text-large hover:text-white">
          Resources
        </Link>
        <Link href="/tuition" className="block text-gray-500 text-large hover:text-white">
          Tuition
        </Link>
        <Link href="/payroll" className="block text-gray-500 text-large hover:text-white">
          Payroll
        </Link>
        <div className="py-4">
          <button
            onClick={() => signOut({ callbackUrl: 'http://localhost:3001/login' })}
            className="block w-full text-left text-gray-500 text-large hover:text-white"
          >
            Logout
          </button>
      </div>
      </div>
      
    </nav>
  );
}