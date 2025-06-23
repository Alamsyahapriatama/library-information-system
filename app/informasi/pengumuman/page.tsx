"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
// Hapus icon yang tidak relevan dengan fasilitas jika halaman ini berubah menjadi homepage
// import { Book, Monitor, Wifi, Users, Coffee, Library, Handshake } from 'lucide-react';

export default function HomePageContent() {
  // Mengganti nama komponen menjadi lebih umum
  // Data untuk bagian "BERITA TERPOPULER" / Artikel
  const popularArticles = [
    {
      imageSrc:
        "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800", // Placeholder untuk hardware
      title: "Mengenal Motherboard, Processor, Hardisk dan RAM",
      date: "14 Februari 2024",
      summary:
        "Pelajari lebih lanjut tentang komponen dasar komputer seperti motherboard, processor, hardisk, dan RAM yang penting untuk kinerja perangkat Anda.",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/4571992/pexels-photo-4571992.jpeg?auto=compress&cs=tinysrgb&w=800", // Placeholder untuk guru
      title: "Seperti Apa Kedudukan dan Profesi Guru Dalam Islam",
      date: "25 Januari 2024",
      summary:
        "Tugas utama seorang guru diislamkan atau disebut Quality System of Muslim Education (QSME) yaitu menyampakan ilmu, membentuk karakter...", // Disadur dari teks gambar
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/1684347/pexels-photo-1684347.jpeg?auto=compress&cs=tinysrgb&w=800", // Placeholder untuk bunga kamboja
      title: "POHON KAMBOJA JEPANG di Lingkungan SMAN 6 Berau",
      date: "18 April 2024",
      summary:
        "Kamboja Jepang adalah tanaman hias meranggas, berbatang gemuk besar, akarnya menyerupai umbi, daunnya panjang, bunga berbentuk terompet...",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/1031201/pexels-photo-1031201.jpeg?auto=compress&cs=tinysrgb&w=800", // Placeholder untuk mangga
      title: "POHON MANGGA DI LINGKUNGAN SMAN 6 BERAU",
      date: "20 Mei 2024",
      summary:
        "Mangga adalah buah tropis yang terkenal dengan rasa manis dan aroma harum. Di SMAN 6 Berau, pohon mangga tumbuh subur, memberikan teduh dan buah segar...",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/11267866/pexels-photo-11267866.jpeg?auto=compress&cs=tinysrgb&w=800", // Placeholder untuk sri rejeki
      title: "SRI REJEKI di Lingkungan SMAN 6 Berau",
      date: "05 Juni 2024",
      summary:
        "Sri Rejeki (Aglaonema) adalah tanaman hias populer dari suku talas-talasan (Araceae). Tanaman ini sangat mudah dirawat dan daunnya indah...",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/11181827/pexels-photo-11181827.jpeg?auto=compress&cs=tinysrgb&w=800", // Placeholder untuk alpukat
      title: "TANAMAN ALPUKAT yang ada dilingkungan SMAN 6 Berau",
      date: "10 Juni 2024",
      summary:
        "Alpukat adalah buah yang berasal dari Amerika Tengah dan Meksiko. Di lingkungan sekolah kami, tanaman alpukat tumbuh subur dan berbuah lebat...",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/7901193/pexels-photo-7901193.jpeg?auto=compress&cs=tinysrgb&w=800", // Placeholder untuk kelor
      title: "POHON KELOR",
      date: "15 Juni 2024",
      summary:
        "Pohon kelor (Moringa oleifera) dikenal sebagai 'pohon ajaib' karena kandungan nutrisinya yang melimpah. Daunnya kaya akan vitamin, mineral, dan antioksidan...",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/1577908/pexels-photo-1577908.jpeg?auto=compress&cs=tinysrgb&w=800", // Placeholder untuk bunga tanjung
      title: "POHON BUNGA TANJUNG",
      date: "18 Juni 2024",
      summary:
        "Bunga Tanjung (Mimusops elengi) adalah pohon penghasil rempah-rempah dari Sri Lanka dan Burma...",
    },
  ];

  const relatedLinks = [
    // --- PENTING: Ganti '/images/logo-*.png' dengan path gambar Anda yang sebenarnya ---
    // Asumsi logo ada di public/images/
    { name: "PSB Sekolah", logo: "/images/logo-psb-sekolah.png", href: "#" },
    { name: "Portal Garuda", logo: "/images/logo-garuda.png", href: "#" },
    {
      name: "Bintang Pusnas",
      logo: "/images/logo-bintang-pusnas.png",
      href: "#",
    },
    {
      name: "Khasara Perpusnas",
      logo: "/images/logo-khasara-perpusnas.png",
      href: "#",
    },
    { name: "SIBI", logo: "/images/logo-sibi.png", href: "#" },
    {
      name: "Youtube SMAN 6 Berau",
      logo: "/images/logo-youtube.png",
      href: "#",
    },
    {
      name: "@sman6berauofficial",
      logo: "/images/logo-instagram.png",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pb-12">
      {/* Bagian Atas: Header Utama (Disini Hanya Placeholder) */}
      {/* Asumsi ini adalah bagian dari layout yang lebih besar atau navbar terpisah */}
      <div className="bg-blue-800 text-white p-4">
        {/* Ini adalah placeholder untuk Navbar. Di aplikasi Next.js nyata, ini akan menjadi komponen terpisah */}
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <Link href="#" className="hover:underline">
              SEMUA
            </Link>
            <Link href="#" className="hover:underline">
              PERPUSTAKAAN
            </Link>
          </div>
          {/* Placeholder untuk bagian kanan navbar */}
          <div>
            <button className="bg-white text-blue-800 px-4 py-2 rounded">
              LOGIN
            </button>
          </div>
        </div>
      </div>

      {/* Banner Selamat Datang */}
      <div className="relative w-full bg-blue-700 py-6 text-white text-center">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl md:text-2xl font-bold">
            SELAMAT DATANG DI PERPUSTAKAAN SMA NEGERI 6 BERAU
          </h1>
        </div>
      </div>

      {/* Main Content Area - Grid Layout */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Left Column - Berita Terpopuler */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2 mb-4">
            BERITA TERPOPULER
          </h2>

          {popularArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row p-4 items-start"
            >
              <div className="relative w-full md:w-40 h-32 md:h-28 flex-shrink-0 mb-4 md:mb-0 md:mr-4 rounded-md overflow-hidden">
                <Image
                  src={article.imageSrc}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-tight">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-500 mb-2">{article.date}</p>
                <p className="text-sm text-gray-700 line-clamp-3">
                  {article.summary}
                </p>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 block"
                >
                  Baca Selengkapnya &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* INFOGRAFIS Block */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
              INFOGRAFIS
            </h3>
            <div className="space-y-4">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/4006132/pexels-photo-4006132.jpeg?auto=compress&cs=tinysrgb&w=800" // Placeholder for Infografis 1
                  alt="Infografis Digital"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/6803276/pexels-photo-6803276.jpeg?auto=compress&cs=tinysrgb&w=800" // Placeholder for Infografis 2
                  alt="Infografis Pendidikan"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* OLAHRAGA ITU IBADAH Poster Block (dari gambar Anda) */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="relative w-full aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/4006132/pexels-photo-4006132.jpeg?auto=compress&cs=tinysrgb&w=800" // Re-using placeholder for the poster
                alt="Olahraga Itu Ibadah Poster"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* AGENDA Section (dari kode asli Anda) */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">AGENDA</h3>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-600 text-white p-3 rounded-lg text-center font-bold flex-shrink-0">
                <span className="block text-2xl leading-none">21</span>
                <span className="block text-xs uppercase">JUNI</span>
                <span className="block text-xs">2025</span>
              </div>
              <div>
                <p className="text-gray-800 font-semibold">
                  Workshop Penulisan Kreatif
                </p>
                <p className="text-sm text-gray-600">
                  Perpustakaan SMAN 6 Berau - Pukul 14:00 WIB
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-600 text-white p-3 rounded-lg text-center font-bold flex-shrink-0">
                <span className="block text-2xl leading-none">15</span>
                <span className="block text-xs uppercase">JULI</span>
                <span className="block text-xs">2025</span>
              </div>
              <div>
                <p className="text-gray-800 font-semibold">
                  Peluncuran Koleksi Ebook Terbaru
                </p>
                <p className="text-sm text-gray-600">
                  Online via Website Perpustakaan
                </p>
              </div>
            </div>
            <Link
              href="/informasi/pengumuman"
              className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Lihat Semua Agenda &rarr;
            </Link>
          </div>

          {/* Quick Links (dari gambar, tambahkan sesuai yang ada di gambar) */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">LAYANAN</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Peminjaman
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Pengembalian
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Kunjungan
                </Link>
              </li>
            </ul>
            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
              SUMBER DAYA
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Koleksi Digital
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Jurnal & Database
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Ebook
                </Link>
              </li>
            </ul>
            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
              MENU LAIN
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="#" className="hover:text-blue-600">
                  KEPEGAWAIAN
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  STRUKTUR
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* LINK TERKAIT Section (tetap, karena sudah mirip) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 relative pb-2">
          LINK TERKAIT
          <span className="absolute left-0 bottom-0 w-16 h-1 bg-blue-600 rounded-full"></span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-center">
          {relatedLinks.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="relative w-16 h-16 mb-2">
                <Image
                  src={link.logo}
                  alt={link.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-center text-gray-700 font-medium">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Teks "Rearranged by" - Sesuaikan posisinya jika diperlukan */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-right text-sm text-gray-400 mt-8">
        <p>Rearranged by Tama</p>
      </div>
    </div>
  );
}
