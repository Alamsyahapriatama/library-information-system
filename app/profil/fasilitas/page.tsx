'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Book, Monitor, Wifi, Users, Coffee, Library, Handshake } from 'lucide-react'; // Relevant icons for facilities

export default function FasilitasPerpustakaanPage() { // Renamed component
    // Data untuk carousel gambar
    const carouselImages = [
      { src: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Siswa di perpustakaan belajar" },
      { src: "https://images.pexels.com/photos/110646/pexels-photo-110646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Rak buku penuh di perpustakaan" },
      { src: "https://images.pexels.com/photos/159781/book-love-books-reading-159781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Siswa membaca buku bersama" },
    ];
  

  // Data for Library Facilities
  const facilities = [
    {
      icon: Book,
      title: 'Area Koleksi Buku',
      description: 'Ribuan koleksi buku fiksi, non-fiksi, referensi, dan pelajaran terbaru.'
    },
    {
      icon: Monitor,
      title: 'Ruang Komputer & Internet',
      description: 'Akses ke komputer modern dan internet berkecepatan tinggi untuk riset dan belajar.'
    },
    {
      icon: Wifi,
      title: 'Akses Wi-Fi Gratis',
      description: 'Jaringan Wi-Fi stabil tersedia di seluruh area perpustakaan untuk kenyamanan belajar.'
    },
    {
      icon: Users,
      title: 'Ruang Diskusi Kelompok',
      description: 'Area khusus yang nyaman untuk kolaborasi dan diskusi antar siswa.'
    },
    {
      icon: Library,
      title: 'Area Baca Nyaman',
      description: 'Meja dan kursi ergonomis, serta pencahayaan yang optimal untuk suasana baca yang kondusif.'
    },
    {
      icon: Coffee, // Can be interpreted as a small pantry/lounge area
      title: 'Pojok Santai / Kafe Mini',
      description: 'Area relaksasi dengan minuman ringan dan suasana tenang untuk istirahat.'
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
      name: "SMAN 6 Berau",
      logo: "/images/youtube.jpeg",
      href: "#",
    },
    {
      name: "sman6berauofficial",
      logo: "/images/sman.jpeg",
      href: "#",
    },
    // Adding more links for better scrolling effect if needed
    { name: "kemenkeu", logo: "/images/kemenkeu.png", href: "#" },
    { name: "Bank Indonesia", logo: "/images/bi.png", href: "#" },
    { name: "Otoritas Jasa Keuangan", logo: "/images/ojk.png", href: "#" },
    { name: "Bapennas", logo: "/images/bapennas.png", href: "#" },
    { name: "BPS", logo: "/images/bps.jpeg", href: "#" },
  ];

  // Manfaat dari bagian Video (context updated for facilities tour)
  const videoBenefits = [
    'Melihat Langsung Fasilitas Kami',
    'Menjelajahi Berbagai Zona Belajar',
    'Merencanakan Kunjungan Lebih Baik'
  ];

  // Values (kept, but can be adapted or removed if not relevant)
  const values = [
    { title: 'Aksesibilitas', description: 'Memastikan semua fasilitas mudah dijangkau dan digunakan.' },
    { title: 'Kenyamanan', description: 'Menciptakan lingkungan yang nyaman dan mendukung belajar.' },
    { title: 'Keamanan', description: 'Menjamin keamanan bagi pengguna dan koleksi.' },
    { title: 'Inovasi', description: 'Terus mengembangkan fasilitas dan teknologi perpustakaan.' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-28 pb-12"> {/* pt-28 untuk mengosongkan ruang Navbar yang fixed */}

      {/* Top Banner Image */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/110646/pexels-photo-110646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Image relevant to facilities
          alt="Interior Perpustakaan Modern"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Fasilitas Perpustakaan Header */}
      <div className="bg-white py-4 mb-8 relative z-10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 relative pb-2">
            FASILITAS PERPUSTAKAAN
            <span className="absolute left-0 bottom-0 w-24 h-1 bg-blue-600 rounded-full"></span>
          </h1>
        </div>
      </div>

      {/* Main Content Area - Grid Layout */}
      <div className="max-w-screen-8xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Column - Facilities List & Video */}
        <div className="lg:col-span-2 space-y-8">
          {/* Introduction to Facilities */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lingkungan Belajar yang Modern dan Nyaman
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Perpustakaan SMAN 6 Berau dilengkapi dengan berbagai fasilitas
              untuk mendukung proses belajar, riset, dan pengembangan minat
              baca siswa dan guru. Kami berkomitmen menyediakan sarana
              terbaik untuk kenyamanan dan produktivitas Anda.
            </p>
          </div>

          {/* Virtual Tour Video */}
          <div className="bg-white rounded-xl shadow-lg pb-4">
            <div className="relative w-full aspect-video bg-gray-800 rounded-t-xl overflow-hidden mb-6">
              <Image
                src="https://images.pexels.com/photos/159781/book-love-books-reading-159781.jpeg?auto=compress&cs=tinysrgb&w=800" // Video thumbnail for facilities tour
                alt="Video Tur Virtual Perpustakaan"
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tur Virtual Fasilitas Perpustakaan</h3>
              <p className="text-lg text-gray-600 mb-6">
                Ikuti tur virtual untuk menjelajahi setiap sudut dan fasilitas
                yang kami sediakan, mulai dari ruang baca hingga area diskusi.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Apa yang Akan Anda Lihat:</h4>
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

          {/* List of Facilities */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Daftar Fasilitas Utama</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5 border border-gray-200 flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <facility.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">{facility.title}</h4>
                    <p className="text-sm text-gray-600">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section (Context slightly adjusted for facilities) */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Prinsip Pelayanan Fasilitas Kami</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-5 text-center shadow-sm border border-gray-200">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">{value.title[0]}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Teks "Rearranged by" */}
          <div className="p-8 pt-4 text-right text-sm text-gray-400">
            <p>Rearranged by Tama</p>
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
                <p className="text-sm text-gray-600">Perpustakaan SMAN 6 Berau - Pukul 14:00 WIB</p>
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