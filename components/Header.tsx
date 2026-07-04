'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="section-container flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Areeb Ahmad
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#about" className="text-gray-700 hover:text-blue-600 transition">
            About
          </Link>
          <Link href="#experience" className="text-gray-700 hover:text-blue-600 transition">
            Experience
          </Link>
          <Link href="#skills" className="text-gray-700 hover:text-blue-600 transition">
            Skills
          </Link>
          <Link href="#contact" className="btn-primary">
            Contact
          </Link>
        </div>
        
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-gray-50 px-4 py-4 flex flex-col gap-4">
          <Link href="#about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link href="#experience" className="text-gray-700 hover:text-blue-600">
            Experience
          </Link>
          <Link href="#skills" className="text-gray-700 hover:text-blue-600">
            Skills
          </Link>
          <Link href="#contact" className="btn-primary text-center">
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}
