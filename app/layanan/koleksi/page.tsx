"use client"; // Add this line at the very top

import React, { useState } from 'react';
import Link from 'next/link'; // Assuming you are using Next.js for navigation

// If KoleksiDropdownMenu is defined in a separate file,
// ensure that file also has "use client"; at the top if it uses useState or other client-side hooks.
// For this example, I'll assume KoleksiDropdownMenu is defined directly in this page.tsx or
// that if it's external, it also has "use client".

const KoleksiDropdownMenu = () => {
  const [isKoleksiOpen, setIsKoleksiOpen] = useState(false);

  return (
    <li
      className="relative" // Parent li for positioning the dropdown
      onMouseEnter={() => setIsKoleksiOpen(true)}
      onMouseLeave={() => setIsKoleksiOpen(false)}
    >
      <Link
        href="#" // Or to a main Koleksi page if it exists
        className="block px-4 py-2 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors duration-200"
      >
        KOLEKSI
      </Link>
      {isKoleksiOpen && (
        <ul className="absolute left-full top-0 w-60 bg-white shadow-lg rounded-md overflow-hidden z-20 border border-gray-200">
          <li>
            <Link
              href="/koleksi/layanan-referensi-deposit"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              LAYANAN REFERENSI & DEPOSIT
            </Link>
          </li>
          <li>
            <Link
              href="/koleksi/layanan-loker"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              LAYANAN LOKER
            </Link>
          </li>
          <li>
            <Link
              href="/koleksi/layanan-non-buku"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              LAYANAN NON BUKU
            </Link>
          </li>
          <li>
            <Link
              href="/koleksi/layanan-ekstensi"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              LAYANAN EKSTENSI
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
};

// This is your actual Page component that uses KoleksiDropdownMenu
export default function KoleksiPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Halaman Koleksi Perpustakaan</h1>
      <p className="mb-4">
        Ini adalah halaman utama untuk menampilkan informasi terkait koleksi perpustakaan.
      </p>
      <nav className="bg-white p-4 rounded-lg shadow-md max-w-sm">
        <ul className="space-y-2">
          {/* Example of other menu items, if this page is part of a larger menu system */}
          <li>
            <Link href="/layanan/reservasi-buku" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              RESERVASI BUKU
            </Link>
          </li>
          <li>
            <Link href="/layanan/perpanjangan-online" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              PERPANJANGAN ONLINE
            </Link>
          </li>
          {/* Integrate your KoleksiDropdownMenu here */}
          <KoleksiDropdownMenu />
          {/* More menu items */}
          <li>
            <Link href="/layanan/pengaduan" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              PENGADUAN
            </Link>
          </li>
        </ul>
      </nav>
      {/* You can add more content relevant to the /layanan/koleksi page here */}
    </div>
  );
}