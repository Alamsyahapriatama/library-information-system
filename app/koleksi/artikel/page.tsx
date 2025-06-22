'use client'; // Required for client components in Next.js

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BeritaPerpustakaanPage() { // Renamed component for clarity

  // Dummy data for news articles
  const newsArticles = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "SMAN 6 Berau Gelar Pesantren Kilat Ramadhan",
      excerpt: "SMAN 6 Berau berhasil menyelenggarakan Pesantren Kilat Ramadhan dengan lancar dan penuh hikmah. Kegiatan ini diikuti oleh seluruh siswa...",
      link: "#"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/110646/pexels-photo-110646.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Studi Tiru Perpustakaan oleh SMPN 1 Sambaliung",
      excerpt: "Perpustakaan SMAN 6 Berau menerima kunjungan studi tiru dari SMPN 1 Sambaliung dalam rangka peningkatan manajemen perpustakaan...",
      link: "#"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/159781/book-love-books-reading-159781.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Perlombaan Perahu Dayung Kelas 10 Dalam Rangka Memperingati Hari Buku",
      excerpt: "Antusiasme siswa kelas 10 terlihat jelas dalam perlombaan perahu dayung yang diadakan untuk memperingati Hari Buku Nasional...",
      link: "#"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Kegiatan Perpustakaan Tahun 2024",
      excerpt: "Sepanjang tahun 2024, perpustakaan SMAN 6 Berau telah melaksanakan berbagai kegiatan edukatif dan rekreatif...",
      link: "#"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/207601/pexels-photo-207601.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Perbaikan Waktu Terurai Sampah Laut",
      excerpt: "Sebagai bagian dari komitmen lingkungan, perpustakaan SMAN 6 Berau turut serta dalam kampanye pengurangan sampah plastik...",
      link: "#"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Asik Webinar di Angkringan Perpustakaan SMAN 6 Berau",
      excerpt: "Webinar tentang pentingnya literasi digital sukses digelar di Angkringan Perpustakaan, menarik banyak partisipan dari kalangan siswa...",
      link: "#"
    },
    {
      id: 7,
      image: "https://images.pexels.com/photos/305827/pexels-photo-305827.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Peringatan HUT Kemerdekaan RI ke-78",
      excerpt: "Perpustakaan SMAN 6 Berau turut memeriahkan HUT Kemerdekaan RI ke-78 dengan berbagai kegiatan lomba...",
      link: "#"
    },
    {
      id: 8,
      image: "https://images.pexels.com/photos/376889/pexels-photo-376889.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Perpustakaan SMAN 6 Berau Masuk Lima Besar Perlombaan Tingkat Nasional",
      excerpt: "Prestasi membanggakan diraih perpustakaan SMAN 6 Berau dengan masuk dalam lima besar lomba perpustakaan terbaik tingkat nasional...",
      link: "#"
    },
  ];

  // Dummy data for sidebar links
  const layananLinks = [
    { name: 'PERPANJANGAN BUKU', href: '#' },
    { name: 'LAYANAN MULTIMEDIA', href: '#' },
    { name: 'LAYANAN DEPOSIT', href: '#' },
    { name: 'INFORMASI & ADUAN', href: '#' },
    { name: 'USULAN KOLEKSI', href: '#' },
    { name: 'SURVEI KEPUASAN', href: '#' },
  ];

  const strukturLinks = [
    { name: 'STRUKTUR', href: '#' },
    { name: 'PEGAWAI', href: '#' },
  ];

  const relatedLinks = [
    // --- PENTING: Ganti '/images/logo-*.png' dengan path gambar Anda yang sebenarnya ---
    { name: 'Facebook', logo: '/images/logo-facebook.png', href: '#' }, // Example placeholder, replace with actual logos
    { name: 'Instagram', logo: '/images/logo-instagram.png', href: '#' },
    { name: 'Iberau', logo: '/images/logo-iberau.png', href: '#' },
    { name: 'IKaltim', logo: '/images/logo-ikaltim.png', href: '#' },
    { name: 'iPusnas', logo: '/images/logo-ipusnas.png', href: '#' },
    { name: 'SINE', logo: '/images/logo-sine.png', href: '#' },
    { name: 'RI-One', logo: '/images/logo-rione.png', href: '#' },
  ];


  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Top Banner (Header) */}
      <div className="relative w-full h-[250px] md:h-[300px] overflow-hidden bg-gradient-to-r from-blue-700 to-blue-900 text-white pt-28">
        <Image
          src="https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Background image for header
          alt="Perpustakaan Sekolah Banner"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-2 uppercase tracking-wide">Selamat Datang di</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            PERPUSTAKAAN SEKOLAH
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mt-2">
            SMAN 6 BERAU
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - News Articles */}
        <div className="lg:col-span-2 space-y-8">
          {newsArticles.map((article) => (
            <Link href={article.link} key={article.id} className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-1/3 h-48 md:h-auto flex-shrink-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2 mt-10">
            <Link href="#" className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200">
              &laquo;
            </Link>
            {[1, 2, 3].map(page => (
              <Link
                href="#"
                key={page}
                className={`px-3 py-1 border border-gray-300 rounded-md ${page === 1 ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
              >
                {page}
              </Link>
            ))}
            <span className="px-3 py-1 text-gray-700">...</span>
            <Link href="#" className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200">
              &raquo;
            </Link>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          {/* Infografis Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">INFOGRAFIS</h3>
            <div className="relative w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/5926392/pexels-photo-5926392.jpeg?auto=compress&cs=tinysrgb&w=800" // Placeholder Infografis image
                alt="Infografis Perpustakaan"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              Informasi visual tentang layanan dan statistik perpustakaan.
            </p>
          </div>

          {/* Layanan Section */}
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-32">
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">LAYANAN</h3>
            <ul className="space-y-3">
              {layananLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-blue-600 hover:text-blue-800 text-base font-medium transition-colors">
                    &raquo; {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Struktur Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">STRUKTUR</h3>
            <ul className="space-y-3">
              {strukturLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-blue-600 hover:text-blue-800 text-base font-medium transition-colors">
                    &raquo; {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* LINK TERKAIT Section (Footer-like) */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 relative pb-2">
          LINK TERKAIT
          <span className="absolute left-0 bottom-0 w-16 h-1 bg-blue-600 rounded-full"></span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-center">
          {relatedLinks.map((link, index) => (
            <Link href={link.href} key={index} className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="relative w-16 h-16 mb-2">
                <Image
                  src={link.logo} // Ensure these paths are correct in your project
                  alt={link.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-center text-gray-700 font-medium">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}