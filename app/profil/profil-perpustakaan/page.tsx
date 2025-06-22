'use client' // WAJIB ADA DI BARIS PALING ATAS UNTUK CLIENT COMPONENT

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Book, History, Lightbulb, LibraryBig, CalendarDays, Eye, Users } from 'lucide-react'; // Menggunakan ikon yang relevan

export default function ProfilPerpustakaanPage() { // Nama komponen diubah agar lebih deskriptif
  // Data untuk carousel gambar
  const carouselImages = [
    { src: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Siswa di perpustakaan belajar" },
    { src: "https://images.pexels.com/photos/110646/pexels-photo-110646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Rak buku penuh di perpustakaan" },
    { src: "https://images.pexels.com/photos/159781/book-love-books-reading-159781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Siswa membaca buku bersama" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Efek untuk slide otomatis
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
    }, 5000); // Ganti gambar setiap 5 detik

    return () => clearInterval(slideInterval); // Membersihkan interval saat komponen dilepas
  }, [carouselImages.length]);


  // Manfaat dari bagian Video Profil (digunakan dalam kartu video)
  const videoBenefits = [
    'Fasilitas modern dan lengkap',
    'Koleksi buku yang beragam',
    'Layanan digital terintegrasi'
  ];

  // --- KONTEN BARU UNTUK PROFIL PERPUSTAKAAN ---
  const profilSections = [
    {
      icon: History,
      title: 'Sejarah Singkat',
      description: 'Didirikan bersamaan dengan SMAN 6 Berau, perpustakaan ini telah berkembang menjadi pusat sumber daya penting bagi siswa dan guru. Berawal dari koleksi terbatas, kini kami memiliki ribuan koleksi fisik dan digital yang mendukung proses belajar mengajar.'
    },
    {
      icon: Eye, // Menggunakan ikon Eye dari visiPoints sebelumnya
      title: 'Visi & Misi Kami',
      description: 'Visi kami adalah menjadi pusat informasi dan literasi yang unggul, mendukung terciptanya generasi cerdas, berkarakter, dan berwawasan global. Misi kami meliputi penyediaan koleksi berkualitas, pengembangan layanan berbasis teknologi, peningkatan budaya literasi, layanan prima, dan program kreatif.'
    },
    {
      icon: Book,
      title: 'Koleksi Unggulan',
      description: 'Kami menawarkan beragam koleksi, mulai dari buku pelajaran, fiksi dan non-fiksi, referensi, hingga koleksi digital seperti e-book dan jurnal ilmiah. Kami berkomitmen untuk selalu memperbarui koleksi agar relevan dengan kebutuhan kurikulum dan minat siswa.'
    },
    {
      icon: Users, // Menggunakan ikon Users dari misiPoints sebelumnya
      title: 'Target Pemustaka',
      description: 'Layanan kami ditujukan untuk seluruh civitas akademika SMAN 6 Berau, meliputi siswa, guru, staf, serta alumni. Kami berupaya menciptakan lingkungan yang inklusif dan ramah bagi semua pemustaka.'
    },
  ];

  const layananUnggulan = [
    { title: 'Peminjaman & Pengembalian', description: 'Sistem yang mudah dan cepat untuk akses koleksi kami.' },
    { title: 'Reservasi Online', description: 'Pesan buku favorit Anda kapan saja dan di mana saja melalui platform digital.' },
    { title: 'Akses Digital', description: 'Akses e-book, jurnal, dan multimedia dari perangkat Anda melalui jaringan perpustakaan.' },
    { title: 'Bimbingan Literasi', description: 'Program bimbingan dan lokakarya untuk meningkatkan kemampuan membaca, menulis, dan riset.' }
  ];

  const relatedLinks = [
    // --- PENTING: Ganti '/images/logo-*.png' dengan path gambar Anda yang sebenarnya ---
    { name: 'PSB Sekolah', logo: '/images/logo-psb-sekolah.png', href: '#' },
    { name: 'Portal Garuda', logo: '/images/logo-garuda.png', href: '#' },
    { name: 'Bintang Pusnas', logo: '/images/logo-bintang-pusnas.png', href: '#' },
    { name: 'Khasara Perpusnas', logo: '/images/logo-khasara-perpusnas.png', href: '#' },
    { name: 'SIBI', logo: '/images/logo-sibi.png', href: '#' },
    { name: 'Youtube SMAN 6 Berau', logo: '/images/logo-youtube.png', href: '#' },
    { name: '@sman6berauofficial', logo: '/images/logo-instagram.png', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-28 pb-12"> {/* pt-28 untuk mengosongkan ruang Navbar yang fixed */}

      {/* Top Banner Carousel */}
      <div className="relative w-full h-[300px] overflow-hidden">
        {carouselImages.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            fill
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            priority={index === 0} // Prioritize first image for LCP
          />
        ))}
        {/* Indikator slide (dots) - opsional */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-gray-400'
              }`}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Profil Perpustakaan Header */}
      <div className="bg-white py-4 mb-8 relative z-10">
        <div className="max-w-screen-1xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-5xl font-extrabold text-blue-800 relative pb-2">
            PROFIL PERPUSTAKAAN
            <span className="absolute left-0 bottom-0 w-24 h-1 bg-blue-800 rounded-full"></span>
          </h1>
        </div>
      </div>

      {/* Main Content Area - Grid Layout */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Column - Profil Perpustakaan Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Bagian pengantar Profil Perpustakaan */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Selamat Datang di Perpustakaan SMAN 6 Berau
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Perpustakaan kami adalah jantungnya ilmu pengetahuan di SMAN 6 Berau,
              menyediakan lingkungan yang kondusif dan sumber daya yang melimpah
              untuk mendukung proses belajar mengajar serta pengembangan diri.
              Kami berkomitmen untuk menjadi pusat literasi dan inovasi bagi seluruh
              civitas akademika.
            </p>
          </div>

          {/* Video Profil Perpustakaan (diintegrasikan ke dalam kartu utama) */}
          <div className="bg-white rounded-xl shadow-lg pb-4">
            <div className="relative w-full aspect-video bg-gray-800 rounded-t-xl overflow-hidden mb-6">
              <Image
                src="https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=800" // Gambar thumbnail video
                alt="Video Profil Perpustakaan"
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Video Profil Perpustakaan</h3>
              <p className="text-lg text-gray-600 mb-6">
                Tonton video untuk mengenal lebih dekat visi, misi, dan komitmen
                perpustakaan SMAN 6 Berau dalam mendukung pendidikan berkualitas.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Sorotan Utama:</h4>
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

          {/* Bagian-bagian Profil Perpustakaan (mengganti Visi/Misi lama) */}
          {profilSections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                  <section.icon className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{section.description}</p>
              </div>
            </div>
          ))}

          {/* Bagian Layanan Unggulan (mengganti Misi lama, disesuaikan) */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Layanan Unggulan Kami</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {layananUnggulan.map((layanan, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{layanan.title}</h4>
                  <p className="text-sm text-gray-600">{layanan.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Teks "Rearranged by" */}
          <div className="p-8 pt-4 text-right text-sm text-gray-400">
            <p>Rearranged by Tama</p>
          </div>

        </div>

        {/* Right Column - Konten Samping (Disesuaikan untuk Profil Perpustakaan) */}
        <div className="lg:col-span-1 space-y-8">
          {/* Bagian Berita & Pengumuman Terbaru (mengganti poster Olahraga) */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Berita & Pengumuman Terbaru</h3>
            <div className="relative w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden mb-4">
              <Image
                src="https://images.pexels.com/photos/5926392/pexels-photo-5926392.jpeg?auto=compress&cs=tinysrgb&w=800" // Gambar berita/pengumuman umum
                alt="Berita Perpustakaan"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-700 text-sm">
              Temukan informasi terkini seputar kegiatan, koleksi baru, dan jadwal penting di perpustakaan kami.
            </p>
            <Link href="/informasi/news" className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium">
              Baca Selengkapnya &rarr;
            </Link>
          </div>

          {/* Agenda Section (Tetap ada, cocok untuk profil) */}
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-32">
            <h3 className="text-xl font-bold text-gray-900 mb-4">AGENDA PERPUSTAKAAN</h3>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-600 text-white p-3 rounded-lg text-center font-bold flex-shrink-0">
                <span className="block text-2xl leading-none">21</span>
                <span className="block text-xs uppercase">JUNI</span>
                <span className="block text-xs">2025</span>
              </div>
              <div>
                <p className="text-gray-800 font-semibold">Workshop Penulisan Kreatif</p>
                <p className="text-sm text-gray-600">Pukul 14:00 WIB</p>
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

      {/* LINK TERKAIT Section (Tetap ada) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 relative pb-2">
          LINK TERKAIT
          <span className="absolute left-0 bottom-0 w-16 h-1 bg-blue-600 rounded-full"></span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-center">
          {relatedLinks.map((link, index) => (
            <Link href={link.href} key={index} className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="relative w-16 h-16 mb-2">
                <Image
                  src={link.logo}
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