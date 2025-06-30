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
      name: 'Bpk. Dr. H. Slamet, M.Pd.',
      image: '/images/yudi.png', // Placeholder image
      description: 'Pemimpin tertinggi dan penanggung jawab seluruh kegiatan sekolah dan perpustakaan.'
    },
    {
      role: 'Kepala Perpustakaan',
      name: 'Ibu Ani Wijaya, S.Hum.',
      image: '/images/yuli.png', // Placeholder image
      description: 'Bertanggung jawab atas pengelolaan operasional dan pengembangan perpustakaan secara keseluruhan.'
    },
    {
      role: 'Staf Layanan Teknis',
      name: 'Bpk. Budi Santoso',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400', // Placeholder image
      description: 'Mengelola pengadaan, pengolahan, dan pemeliharaan koleksi perpustakaan.'
    },
    {
      role: 'Staf Layanan Teknis',
      name: 'Bpk. Budi Santoso',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400', // Placeholder image
      description: 'Mengelola pengadaan, pengolahan, dan pemeliharaan koleksi perpustakaan.'
    },
    {
      role: 'Staf Layanan Pemustaka',
      name: 'Ibu Siti Aminah',
      image: '/images/alfina.png', // Placeholder image
      description: 'Melayani peminjaman, pengembalian, dan membantu pemustaka dalam pencarian informasi.'
    },
    {
      role: 'Koordinator Program Literasi',
      name: 'Sdr. Cahyo Nugroho',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400', // Placeholder image
      description: 'Merancang dan melaksanakan program-program untuk meningkatkan minat baca dan literasi.'
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
      <div className="relative w-full h-[300px] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Perpustakaan"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Organizational Structure Header */}
      <div className="bg-white py-4 mb-8 relative z-10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Changed to max-w-screen-xl for wider container */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 relative pb-2">
            STRUKTUR ORGANISASI PERPUSTAKAAN
            <span className="absolute left-0 bottom-0 w-24 h-1 bg-blue-600 rounded-full"></span>
          </h1>
        </div>
      </div>

      {/* Main Content Area - Grid Layout */}
      <div className="max-w-screen-8xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8"> {/* Changed to max-w-screen-xl for wider container */}

        {/* Left Column - Organizational Structure Details & Video */}
        <div className="lg:col-span-2 space-y-8">
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

          {/* Video Profil (Context updated for Org Structure) */}
          <div className="bg-white rounded-xl shadow-lg pb-4">
            <div className="relative w-full aspect-video bg-gray-800 rounded-t-xl overflow-hidden mb-6">
              <Image
                src="https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=800" // Video thumbnail
                alt="Video Profil Tim Perpustakaan"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 rounded-full p-4 transition-colors">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-8 pt-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Video Perkenalan Tim Perpustakaan</h3>
              <p className="text-lg text-gray-600 mb-6">
                Saksikan video singkat untuk mengenal lebih dekat individu-individu di balik layar
                perpustakaan, serta peran mereka dalam melayani Anda.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Manfaat Video Ini:</h4>
              <ul className="space-y-2">
                {videoBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Organizational Chart/Personnel Display */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Struktur dan Tim Kami</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

        {/* Right Column - "OLAHRAGA ITU IBADAH" Poster & Agenda (kept as is) */}
        <div className="lg:col-span-1 space-y-8">
          {/* "OLAHRAGA ITU IBADAH" Poster Block */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="relative w-full aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/gambar-olahraga-ituibadah.jpg" // Placeholder for "OLAHRAGA ITU IBADAH" poster
                alt="Olahraga Itu Ibadah Poster"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Agenda Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-32">
            <h3 className="text-xl font-bold text-gray-900 mb-4">AGENDA</h3>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-600 text-white p-3 rounded-lg text-center font-bold flex-shrink-0">
                <span className="block text-2xl leading-none">21</span>
                <span className="block text-xs uppercase">JUNI</span>
                <span className="block text-xs">2025</span>
              </div>
              <div>
                <p className="text-gray-800 font-semibold">Workshop Penulisan Kreatif</p>
                <p className="text-sm text-gray-600">Perpustakaan Madani - Pukul 14:00 WIB</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-600 text-white p-3 rounded-lg text-center font-bold flex-shrink-0">
                <span className="block text-2xl leading-none">15</span>
                <span className="block text-xs uppercase">JULI</span>
                <span className="block text-xs">2025</span>
              </div>
              <div>
                <p className="text-gray-800 font-semibold">Peluncuran Koleksi Ebook Terbaru</p>
                <p className="text-sm text-gray-600">Online via Website Perpustakaan</p>
              </div>
            </div>
            <Link href="/informasi/pengumuman" className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium">
              Lihat Semua Agenda &rarr;
            </Link>
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