'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, BookOpen, Search } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null) // State ini tetap ada untuk level 1
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null) // Ref ini tetap ada untuk menutup dropdown level 1

  // Tambahkan state untuk mengelola dropdown bersarang (level 2 dan seterusnya)
  const [activeNestedDropdown, setActiveNestedDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Logic ini akan menutup dropdown level 1
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
        setActiveNestedDropdown(null); // Tutup juga nested dropdown saat klik di luar main menu
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
        { name: 'Pustakawan', href: '/profil/pustakawan' },
        { name: 'SOP Perpustakaan', href: '/profil/sop-perpustakaan' }
      ]
    },
    { name: 'PROGRAM', href: '/program' },
    {
      name: 'FASILITAS',
      dropdown: [
        { name: 'Titik Baca', href: '/fasilitas/titik-baca' },
        {
          name: 'Layanan', // Ini adalah item 'Layanan' yang Anda maksud
          dropdown: [ // Tambahkan properti dropdown di sini
            { name: 'Daftar Anggota Baru', href: '/layanan/daftar-anggota-baru'},
            { name: 'Reservasi Buku', href: '/layanan/reservasi-buku' },
            { name: 'Perpanjangan Online', href: '/layanan/perpanjangan-online' },
            { name: 'Permintaan Informasi', href: '/layanan/permintaan-informasi' },
            { name: 'Angket Usulan Koleksi', href: '/layanan/angket-usulan-koleksi' },
            { name: 'Polling Kepuasan Perpus', href: '/layanan/polling-kepuasan' },
            { name: 'Deposit', href: '/layanan/deposit' },
            { name: 'Koleksi', href: '/layanan/koleksi' },
            { name: 'Pengajuan Kunjungan Perpustakaan', href: '/layanan/kunjungan-perpustakaan' }
          ]
        },
        { name: 'Kebutuhan pemustaka', href: '/fasilitas/kebutuhan-pemustaka' },
        { name: 'Kepuasan Permadani', href: '/fasilitas/kepuasan-permadani' },
        // ... jika ada item lain di bawah Fasilitas yang bukan bagian dari Layanan
      ],
    },
    {
      name: 'KOLEKSI',
      dropdown: [
        { name: 'Ebook', href: '/koleksi/ebook' },
        {
          name: 'Aplikasi',
          // BEFORE: dropdowm: [
          dropdown: [ // AFTER: Corrected to 'dropdown'
            { name: 'Radar Berau', href: 'https://koran.radarberau.com/home.mu'},
            { name: 'Aplikasi Edoo', href: 'https://app.edoo.id/'},
            { name: 'Ikaltim', href: 'https://web-ikaltim.moco.co.id/'},
            { name: 'IBerau', href: 'https://iberau.moco.co.id/'},
            { name: 'Khastara', href: 'https://khastara.perpusnas.go.id/'},
            { name: 'Indonesia Onesearch', href: 'https://onesearch.id/'},
            { name: 'Ipunas', href: 'https://ipusnas.id/'},
            { name: 'Bintang Pusnas', href: 'https://bintangpusnas.perpusnas.go.id/konten/'},
          ]
        },
        
        { name: 'Jejaring Perpustakaan', href: '/koleksi/jejaring-perpustakaan' },
        { name: 'Artikel', href: '/koleksi/artikel' }
      ]
    },
    {
      name: 'INFORMASI',
      dropdown: [
        { name: 'Berita', href: '/informasi/berita' },
        { name: 'Pengumuman', href: '/informasi/pengumuman' },
        { name: 'Kerjasama', href: '/informasi/kerjasama' },
      ]
    },

    {
      name: 'INTERAKSI',
      dropdown: [
        { name: 'Buku Tamu', href: '/interaksi/buku-tamu' },
        { name: 'Masukan dan Saran', href: '/interaksi/masukan-saran' },
        { name: 'Survei', href: '/interaksi/survei' }
      ]
    }
  ]

  const handleDropdownToggle = (itemName: string) => {
    // Saat dropdown level 1 dibuka/ditutup, pastikan nested juga tertutup
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
    setActiveNestedDropdown(null); // Reset nested dropdown saat parent toggle
  }

  const handleNestedDropdownToggle = (itemName: string, e?: React.MouseEvent) => {
    // Stop propagation to prevent parent dropdown from closing
    if (e) {
      e.stopPropagation();
    }
    setActiveNestedDropdown(activeNestedDropdown === itemName ? null : itemName);
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
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Top Bar - Full Width with consistent padding */}
      <div className="bg-blue-600 text-white text-sm py-2">
        <div className="flex justify-between items-center px-2 sm:px-4 lg:px-8 xl:px-12 2xl:px-16">
          <div className="flex items-center space-x-6">
            <span>SITUS RESMI PERPUSTAKAAN SDIT MADANI - NPP: 6403051B2000001</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>{formattedDateTime.replace('PADA ', '')}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation - Full Width with consistent padding */}
      <div className="border-b border-gray-100">
        <div className="flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          {/* Logo - Stays on the left */}
          <Link href="/" className="flex items-center space-x-0 flex-shrink-0">
          <img src="/images/logo-perpus.png" // Ganti path ini dengan path logo Anda
               alt="Logo" 
                className="w-20 h-13 rounded-full object-cover" />
            <div className="">
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">PERMADANI</h1>
              <p className="text-sm text-gray-500">Perpustakaan Madani</p>
            </div>
          </Link>

          {/* Desktop Menu and Search - Pushed to the right */}
          <div className="hidden lg:flex items-center ml-auto" ref={dropdownRef}>
            <div className="flex items-center space-x-2">
              {menuItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    // Logic for top-level dropdown items
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="flex items-center space-x-6 text-gray-700 hover:text-blue-600 px-4 py-3 rounded-md text-base font-medium transition-colors whitespace-nowrap"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`h-5 w-5 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                          {item.dropdown.map((subItem) => (
                            <div key={subItem.name} className="relative"> {/* Tambahkan div relative untuk subItem */}
                               {subItem.dropdown ? (
                                // Logic for nested dropdown items
                                <div>
                                  <button
                                    onClick={(e) => handleNestedDropdownToggle(subItem.name, e)}
                                    className="flex items-center justify-between w-full px-5 py-3 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors whitespace-nowrap"
                                  >
                                    <span>{subItem.name}</span>
                                    <ChevronDown className={`h-5 w-5 transition-transform ${
                                      activeNestedDropdown === subItem.name ? 'rotate-180' : ''
                                    }`} />
                                  </button>
                                  {activeNestedDropdown === subItem.name && (
                                    <div className="absolute left-full top-0 mt-0 ml-2 w-72 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                                      {subItem.dropdown.map((nestedSubItem) => (
                                        <Link
                                          key={nestedSubItem.href}
                                          href={nestedSubItem.href || '#'} // Perbaikan: Tambahkan fallback '#'
                                          className="block px-5 py-3 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                          onClick={() => {
                                            setActiveDropdown(null);
                                            setActiveNestedDropdown(null); // Tutup semua dropdown
                                          }}
                                        >
                                          {nestedSubItem.name}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                               ) : (
                                // Logic for regular link within top-level dropdown
                                <Link
                                  key={subItem.href || subItem.name} // Gunakan name sebagai fallback key
                                  href={subItem.href || '#'} // Perbaikan: Tambahkan fallback '#'
                                  className="block px-5 py-3 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                  onClick={() => {
                                    setActiveDropdown(null);
                                    setActiveNestedDropdown(null); // Tutup semua dropdown
                                  }}
                                >
                                  {subItem.name}
                                </Link>
                               )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    // Logic for top-level link items (no dropdown)
                    <Link
                      href={item.href!}
                      className={`text-gray-700 hover:text-blue-600 px-4 py-3 rounded-md text-base font-medium transition-colors whitespace-nowrap ${
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
            <Search className="h-6 w-6 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors ml-8" />
          </div>

          {/* Mobile Menu Button - Stays on the right for mobile */}
          <div className="flex items-center lg:hidden">
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
                  // Logic for top-level dropdown items in mobile
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
                          <div key={subItem.name}> {/* Tambahkan div untuk subItem di mobile */}
                            {subItem.dropdown ? (
                              // Logic for nested dropdown items in mobile
                              <div>
                                <button
                                  onClick={(e) => handleNestedDropdownToggle(subItem.name, e)}
                                  className="flex items-center justify-between w-full text-gray-600 hover:text-blue-600 px-4 py-2 rounded-md text-sm transition-colors"
                                >
                                  <span>{subItem.name}</span>
                                  <ChevronDown className={`h-5 w-5 transition-transform ${
                                    activeNestedDropdown === subItem.name ? 'rotate-180' : ''
                                  }`} />
                                </button>
                                {activeNestedDropdown === subItem.name && (
                                  <div className="pl-6 space-y-1">
                                    {subItem.dropdown.map((nestedSubItem) => (
                                      <Link
                                        key={nestedSubItem.href || nestedSubItem.name} // Perbaikan: Tambahkan fallback '#'
                                        href={nestedSubItem.href || '#'}
                                        className="block text-gray-600 hover:text-blue-600 px-4 py-2 rounded-md text-sm transition-colors"
                                        onClick={() => {
                                          setIsOpen(false);
                                          setActiveDropdown(null);
                                          setActiveNestedDropdown(null); // Tutup semua
                                        }}
                                      >
                                        {nestedSubItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ) : (
                              // Logic for regular link within top-level dropdown in mobile
                              <Link
                                key={subItem.href || subItem.name} // Gunakan name sebagai fallback key
                                href={subItem.href || '#'} // Perbaikan: Tambahkan fallback '#'
                                className="block text-gray-600 hover:text-blue-600 px-4 py-2 rounded-md text-sm transition-colors"
                                onClick={() => {
                                  setIsOpen(false);
                                  setActiveDropdown(null);
                                  setActiveNestedDropdown(null); // Tutup semua dropdown
                                }}
                              >
                                {subItem.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // Logic for top-level link items in mobile (no dropdown)
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