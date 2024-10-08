'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          {/* Desktop Links */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* First group of links */}
            <div className="flex space-x-8">
              <Link href="/" className="text-lg font-medium cursor-pointer hover:text-blue-600 transition duration-200">
                Home
              </Link>
              <Link href="/contact" className="text-lg font-medium cursor-pointer hover:text-blue-600 transition duration-200">
                Contact
              </Link>
              <Link href="/faq" className="text-lg font-medium cursor-pointer hover:text-blue-600 transition duration-200">
                FAQ
              </Link>
            </div>

            {/* Centered Avatar and Text */}
            <div className="flex items-center space-x-4">
              <Avatar className="w-14 h-14">
                <AvatarImage src="/contact/1516469448723.png" alt="User Avatar" />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
              <div className="text-xl font-semibold text-gray-900">
                Marieke Ceelaert
              </div>
            </div>
            
            {/* Second group of links */}
            <div className="flex space-x-8">
              <Link href="/naturopathy" className="text-lg font-medium cursor-pointer hover:text-blue-600 transition duration-200">
                Naturopathy
              </Link>
              <Link href="/sewing" className="text-lg font-medium cursor-pointer hover:text-blue-600 transition duration-200">
                Sewing
              </Link>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden flex justify-between items-center w-full">
            {/* Mobile menu button */}
            <button className="text-gray-900" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Avatar */}
            <div className="flex items-center space-x-2">
              <div className="text-lg font-semibold text-gray-900">
                Marieke Ceelaert
              </div>
              <Avatar className="w-10 h-10">
                <AvatarImage src="/contact/1516469448723.png" alt="User Avatar" />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4 text-lg font-medium">
              <Link href="/" className="cursor-pointer hover:text-blue-600 transition duration-200">Home</Link>
              <Link href="/contact" className="cursor-pointer hover:text-blue-600 transition duration-200">Contact</Link>
              <Link href="/faq" className="cursor-pointer hover:text-blue-600 transition duration-200">FAQ</Link>
              <Link href="/naturopathy" className="cursor-pointer hover:text-blue-600 transition duration-200">Naturopathy</Link>
              <Link href="/sewing" className="cursor-pointer hover:text-blue-600 transition duration-200">Sewing</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}