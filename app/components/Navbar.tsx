'use client'

import Image from 'next/image'
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
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
          <Avatar className="w-12 h-12">
              <AvatarImage src="/contact/1516469448723.png" alt="User Avatar" />
              <AvatarFallback>MC</AvatarFallback>
            </Avatar>
          </Link>
          <div className="flex items-center">
            <Image 
              src="/Navbar/mc_logo.png" 
              alt="User Logo" 
              width={500} 
              height={500} 
              className="h-12 object-contain" // This will fit the image to the navbar height
            />
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
            <Link href="/naturopathy" className="hover:text-blue-600">Naturopathy</Link>
            <Link href="/sewing" className="hover:text-blue-600">Sewing</Link>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <Link href="/contact" className="hover:text-blue-600">Contact</Link>
              <Link href="/naturopathy" className="hover:text-blue-600">Naturopathy</Link>
              <Link href="/sewing" className="hover:text-blue-600">Sewing</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}