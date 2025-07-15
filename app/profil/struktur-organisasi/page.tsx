'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Briefcase, UserPlus, ArrowLeft } from 'lucide-react'; // Changed icons to be more relevant for org structure

export default function StrukturOrganisasiPage() { // Renamed component

  // Placeholder data for Organizational Structure
  const organizationalStructure = [
    {
      role: 'Kepala Sekolah',
      name: 'Khoirul Ngibad, S.Pd., M.Pd',
      image: '/images/pusatakawan-1.png',
      description: 'Penanggung jawab seluruh kegiatan sekolah dan perpustakaan'
    },
    {
      role: 'Kepala perpustakaan',
      name: 'Suwesti Rahayu S.Pd.I',
      image: '/images/pusatakawan-2.png',
      description: 'Bertanggung jawab atas pengelolaan operasional dan pengembangan perpustakaan secara keseluruhan'
    },
    {
      role: 'Layanan Teknis',
      name: 'Ety Nor Anisa, S.Pd',
      image: '/images/pusatakawan-3.png',
      description: 'Mengelola pengadaan, pengolahan, dan pemeliharaan koleksi perpustakaan.'
    },
    {
      role: 'Layanan Teknis',
      name: 'Sulistyo Nugraheny Ratri Astuti, S.Pd',
      image: '/images/pusatakawan-4.png',
      description: 'Mengelola pengadaan, pengolahan, dan pemeliharaan koleksi perpustakaan.'
    },
    {
      role: 'Layanan Pemustaka',
      name: 'Tiara Elmi',
      image: '/images/pusatakawan-7.png',
      description: 'Melayani peminjaman, pengembalian, dan membantu pemustaka dalam pencarian informasi.'
    },
    {
      role: 'Layanan Pemustaka',
      name: 'Diari Bagaskoro Pramudji Haryono',
      image: '/images/pusatakawan-8.png',
      description: 'Melayani peminjaman, pengembalian, dan membantu pemustaka dalam pencarian informasi.'
    },
    {
      role: 'Layanan TIK',
      name: 'Mas’ani,S.Pd',
      image: '/images/pusatakawan-5.png',
      description: 'Bertanggungjawab mengelola jaringan layanan perpustakaan, jaringan internet, media sosial, media promosi dan berbagai layanan secara daring.'
    },
    {
      role: 'Layanan TIK',
      name: 'Paridah,S.Sos',
      image: '/images/pusatakawan-6.png',
      description: 'Bertanggungjawab mengelola jaringan layanan perpustakaan, jaringan internet, media sosial, media promosi dan berbagai layanan secara daring.'
    },
  ];

  const relatedLinks = [
    // --- PENTING: Ganti '/images/logo-*.png' dengan path gambar Anda yang sebenarnya ---
    { name: "PSB Sekolah", logo: "/images/logo-psb-sekolah.png", href: "#" },
    {
      name: "Portal Garuda",
      logo: "/images/portal-garuda.png",
      href: "https://garuda.kemdikbud.go.id/publisher/view/2960",
    },
    {
      name: "Bintang Pusnas",
      logo: "/images/bintang-pusnas.png",
      href: "https://bintangpusnas.perpusnas.go.id/konten/",
    },
    {
      name: "Khasara Perpusnas",
      logo: "/images/khasara-pusnas.jpeg",
      href: "https://khastara.perpusnas.go.id/",
    },
    { name: "SIBI", 
      logo: "/images/sibi.jpeg", 
      href: "https://buku.kemdikbud.go.id/" },
    {
      name: "SDIT Madani",
      logo: "/images/youtube.jpeg",
      href: "#",
    },
    {
      name: "Madaniofficial",
      logo: "/images/logo-perpus.png",
      href: "#",
    },
    // Adding more links for better scrolling effect if needed
    { name: "kemenkeu", logo: "/images/kemenkeu.png", href: "#" },
    { name: "Bank Indonesia", logo: "/images/bi.png", href: "#" },
    { name: "Otoritas Jasa Keuangan", logo: "/images/ojk.png", href: "#" },
    { name: "Bapennas", logo: "/images/bapennas.png", href: "#" },
    { name: "BPS", logo: "/images/bps.jpeg", href: "#" },
  ];
  // Manfaat dari bagian Video (keeping this for consistency, though content context will change)
  const videoBenefits = [
    'Mengenal Tim Pengelola',
    'Memahami Alur Pelayanan',
    'Transparansi dan Akuntabilitas'
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-28 pb-12"> {/* pt-28 untuk mengosongkan ruang Navbar yang fixed */}

      {/* Top Banner Image */}
      <div className="relative w-full h-[300px] overflow-hidden bg-black/50 flex items-center justify-center flex-col">
        <Image
          src="/images/slider-2.jpg"
          alt="Perpustakaan"
          fill
          className="object-cover absolute inset-0 opacity-50"
          priority
        />
        <h1 className="text-white text-center text-3xl md:text-4xl font-extrabold relative pb-2 z-10">
          STRUKTUR ORGANISASI PERPUSTAKAAN
          <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"></span>
        </h1>
      </div>
      {/* Main Content Area - Grid Layout */}
      <div className="max-w-screen-8xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8"> {/* Changed to max-w-screen-xl for wider container */}

        {/* Left Column - Organizational Structure Details & Video */}
        <div className="lg:col-span-3 space-y-8">
          {/* Introduction to Organizational Structure */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengenal Tim Perpustakaan Madani
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Struktur organisasi perpustakaan dirancang untuk memastikan efisiensi layanan
              dan optimalisasi pengelolaan sumber daya. Setiap anggota tim memiliki peran
              penting dalam mewujudkan visi perpustakaan sebagai pusat literasi dan inovasi.
            </p>
          </div>

          {/* Organizational Chart/Personnel Display */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Struktur dan Tim Kami</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {organizationalStructure.map((person, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-blue-600">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">{person.name}</h4>
                  <p className="text-blue-600 font-medium mb-2">{person.role}</p>
                  <p className="text-gray-700 text-sm">{person.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Teks "Rearranged by" */}
          <div className="p-8 pt-4 text-right text-sm text-gray-400">
            <p></p>
          </div>
        </div>

      </div>

 {/* LINK TERKAIT Section (Autoscroll) */}
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 relative pb-2">
          LINK TERKAIT
          <span className="absolute left-0 bottom-0 w-16 h-1 bg-blue-600 rounded-full"></span>
        </h2>
        {/* Container for the scrolling links */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll-left">
            {/* Duplicate the links to create a seamless loop for scrolling */}
            {relatedLinks.concat(relatedLinks).map((link, index) => (
              <Link
                href={link.href}
                key={`${link.name}-${index}`} // Using a combination for a more unique key
                className="flex flex-shrink-0 flex-col items-center p-3 rounded-lg hover:bg-gray-100 transition-colors mx-4" // Added mx-4 for spacing
                style={{ width: '120px' }} // Fixed width for consistent spacing and scrolling
              >
                <div className="relative w-16 h-16 mb-2">
                  <Image
                    src={link.logo}
                    alt={link.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm text-center text-gray-700 font-medium whitespace-nowrap">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Add this style block to your global CSS file (e.g., globals.css) or directly within a <style jsx> tag if using Next.js */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%); /* Scrolls half of the duplicated content */
          }
        }

        .animate-scroll-left {
          animation: scrollLeft 30s linear infinite; /* Adjust duration as needed */
        }

        .animate-scroll-left:hover {
          animation-play-state: paused; /* Pause on hover */
        }
      `}</style>
    </div>
  );
}