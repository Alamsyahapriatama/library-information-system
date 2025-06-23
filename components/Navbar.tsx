'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, BookOpen, Search } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const menuItems = [
    { name: 'BERANDA', href: '/' },
    {
      name: 'PROFIL',
      dropdown: [
        { name: 'Profil Perpustakaan', href: '/profil/profil-perpustakaan' },
        { name: 'Visi dan Misi', href: '/profil/visi-misi' },
        { name: 'Struktur Organisasi', href: '/profil/struktur-organisasi' },
        { name: 'Fasilitas', href: '/profil/fasilitas' },
        { name: 'Web SMAN 6 Berau', href: '/profil/web-sekolah' },
        { name: 'SOP Perpustakaan', href: '/profil/sop-perpustakaan' }
      ]
    },
    {
      name: 'LAYANAN',
      dropdown: [
        { name: 'Reservasi Buku', href: '/layanan/reservasi-buku' },
        { name: 'Perpanjangan Online', href: '/layanan/perpanjangan-online' },
        { name: 'Permintaan Informasi', href: '/layanan/permintaan-informasi' },
        { name: 'Angket Usulan Koleksi', href: '/layanan/angket-usulan-koleksi' },
        { name: 'Polling Kepuasan Perpus', href: '/layanan/polling-kepuasan' },
        { name: 'Konsultasi', href: '/layanan/konsultasi' },
        { name: 'Deposit', href: '/layanan/deposit' },
        { name: 'Aduan', href: '/layanan/aduan' },
        { name: 'Koleksi', href: '/layanan/koleksi' },
        { name: 'Pengajuan Pendampingan Akreditasi', href: '/layanan/pendampingan-akreditasi' }
      ]
    },
    {
      name: 'KOLEKSI',
      dropdown: [
        { name: 'Ebook', href: '/koleksi/ebook' },
        { name: 'Aplikasi', href: '/koleksi/aplikasi' },
        { name: 'Multimedia', href: '/koleksi/multimedia' },
        { name: 'Artikel', href: '/koleksi/artikel' }
      ]
    },
    {
      name: 'PEMBUDAYAAN GEMAR MEMBACA',
      dropdown: [
        { name: 'Jurnal Literasi', href: '/pembudayaan/jurnal-literasi' },
        { name: 'Survei Index Membaca', href: '/pembudayaan/survei-index-membaca' },
        { name: 'Gerakan Gemar Membaca', href: '/pembudayaan/gerakan-gemar-membaca' },
        { name: 'Festival Literasi', href: '/pembudayaan/festival-literasi' }
      ]
    },
    {
      name: 'INFORMASI',
      dropdown: [
        { name: 'News', href: '/informasi/news' },
        { name: 'Pengumuman', href: '/informasi/pengumuman' },
        { name: 'Kerjasama', href: '/informasi/kerjasama' },
        { name: 'Transparansi', href: '/informasi/transparansi' }
      ]
    },
    { name: 'PUSTAKAWAN', href: '/pustakawan' },
    {
      name: 'INTERAKSI',
      dropdown: [
        { name: 'Login', href: '/interaksi/login' },
        { name: 'Buku Tamu', href: '/interaksi/buku-tamu' },
        { name: 'Masukan dan Saran', href: '/interaksi/masukan-saran' },
        { name: 'Survei', href: '/interaksi/survei' }
      ]
    }
  ]

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  // Get current date and time in WIB (Western Indonesia Time)
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Asia/Jakarta' // WIB timezone
  };
  const formattedDateTime = new Intl.DateTimeFormat('id-ID', options).format(now).toUpperCase();

  return (
    // The fixed positioning is here. Ensure no parent element is interfering.
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${ // Added top-0 for explicit positioning
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Top Bar - Full Width with consistent padding */}
      <div className="bg-blue-600 text-white text-sm py-2">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16"> {/* Increased padding for wider screens */}
          <div className="flex items-center space-x-6">
            <span>SITUS RESMI PERPUSTAKAAN SMAN 6 BERAU - NPP: 6403091E1000001</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>{formattedDateTime.replace('PADA ', '')}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation - Full Width with consistent padding */}
      <div className="border-b border-gray-100">
        <div className="flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16"> {/* Increased padding for wider screens */}
          {/* Logo - Stays on the left */}
          <Link href="/" className="flex items-center space-x-4 flex-shrink-0"> {/* flex-shrink-0 prevents logo from shrinking */}
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
              <BookOpen className="h-7 w-7 text-blue-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Perpustakaan</h1>
              <p className="text-sm text-gray-500">SMAN 6 Berau</p>
            </div>
          </Link>

          {/* Desktop Menu and Search - Pushed to the right */}
          {/* Use ml-auto on this wrapper div to push it all the way to the right */}
          <div className="hidden lg:flex items-center" ref={dropdownRef}> {/* Changed hidden lg:block to hidden lg:flex items-center */}
            <div className="flex items-center space-x-4"> {/* Increased space-x between main menu items */}
              {menuItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="flex items-center space-x-5 text-gray-700 hover:text-blue-600 px-4 py-3 rounded-md text-base font-medium transition-colors whitespace-nowrap" // Added whitespace-nowrap
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`h-5 w-5 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-5 py-3 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      className={`text-gray-700 hover:text-blue-600 px-4 py-3 rounded-md text-base font-medium transition-colors whitespace-nowrap ${ // Added whitespace-nowrap
                        pathname === item.href ? 'text-blue-600 bg-blue-50' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            {/* Search icon for desktop */}
            <Search className="h-6 w-6 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors ml-8" /> {/* Added ml-8 for spacing */}
          </div>

          {/* Mobile Menu Button - Stays on the right for mobile */}
          <div className="flex items-center lg:hidden"> {/* Only show for lg screens and below */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-4 pb-4 space-y-2 max-h-96 overflow-y-auto">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 px-4 py-3 rounded-md text-base font-medium transition-colors"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`h-5 w-5 transition-transform ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-6 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block text-gray-600 hover:text-blue-600 px-4 py-2 rounded-md text-sm transition-colors"
                            onClick={() => {
                              setIsOpen(false)
                              setActiveDropdown(null)
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    className={`block text-gray-700 hover:text-blue-600 px-4 py-3 rounded-md text-base font-medium transition-colors ${
                      pathname === item.href ? 'text-blue-600 bg-blue-50' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar