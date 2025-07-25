"use client"; // WAJIB ADA DI BARIS PALING ATAS UNTUK CLIENT COMPONENT

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Book,
  History,
  Lightbulb,
  LibraryBig,
  CalendarDays,
  Eye,
  Users,
} from "lucide-react"; // Menggunakan ikon yang relevan

export default function ProfilPerpustakaanPage() {
  // Nama komponen diubah agar lebih deskriptif
  // Data untuk carousel gambar
  const carouselImages = [
    {
      src: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Siswa di perpustakaan belajar",
    },
    {
      src: "https://images.pexels.com/photos/110646/pexels-photo-110646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Rak buku penuh di perpustakaan",
    },
    {
      src: "https://images.pexels.com/photos/159781/book-love-books-reading-159781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Siswa membaca buku bersama",
    },
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
    "Fasilitas modern dan lengkap",
    "Koleksi buku yang beragam",
    "Layanan digital terintegrasi",
  ];

  // --- KONTEN BARU UNTUK PROFIL PERPUSTAKAAN ---
  const profilSections = [
    {
      icon: History,
      title: "Sejarah Singkat",
      description:
        "Didirikan bersamaan dengan SDIT MADANI, perpustakaan ini telah berkembang menjadi pusat sumber daya penting bagi siswa dan guru. Berawal dari koleksi terbatas, kini kami memiliki ribuan koleksi fisik dan digital yang mendukung proses belajar mengajar.",
    },
    {
      icon: Eye, // Menggunakan ikon Eye dari visiPoints sebelumnya
      title: "Visi & Misi Kami",
      description:
        "Visi kami adalah menjadi pusat informasi dan literasi yang unggul, mendukung terciptanya generasi cerdas, berkarakter, dan berwawasan global. Misi kami meliputi penyediaan koleksi berkualitas, pengembangan layanan berbasis teknologi, peningkatan budaya literasi, layanan prima, dan program kreatif.",
    },
    {
      icon: Book,
      title: "Koleksi Unggulan",
      description:
        "Kami menawarkan beragam koleksi, mulai dari buku pelajaran, fiksi dan non-fiksi, referensi, hingga koleksi digital seperti e-book dan jurnal ilmiah. Kami berkomitmen untuk selalu memperbarui koleksi agar relevan dengan kebutuhan kurikulum dan minat siswa.",
    },
    {
      icon: Users, // Menggunakan ikon Users dari misiPoints sebelumnya
      title: "Target Pemustaka",
      description:
        "Layanan kami ditujukan untuk seluruh civitas akademika SDIT MADANI, meliputi siswa, guru, staf, serta alumni. Kami berupaya menciptakan lingkungan yang inklusif dan ramah bagi semua pemustaka.",
    },
  ];

  const layananUnggulan = [
    {
      title: "Peminjaman & Pengembalian",
      description: "Sistem yang mudah dan cepat untuk akses koleksi kami.",
    },
    {
      title: "Reservasi Online",
      description:
        "Pesan buku favorit Anda kapan saja dan di mana saja melalui platform digital.",
    },
    {
      title: "Akses Digital",
      description:
        "Akses e-book, jurnal, dan multimedia dari perangkat Anda melalui jaringan perpustakaan.",
    },
    {
      title: "Bimbingan Literasi",
      description:
        "Program bimbingan dan lokakarya untuk meningkatkan kemampuan membaca, menulis, dan riset.",
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
      name: "Perpustakaan Madani",
      logo: "/images/youtube.jpeg",
      href: "#",
    },
    {
      name: "Madaniofficial",
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

  return (
    <div className="min-h-screen bg-gray-100 pt-28 pb-12">
      <div className="relative w-full h-[300px] overflow-hidden bg-black/50 flex items-center justify-center flex-col">
        <Image
          src="/images/slider-2.jpg"
          alt="Perpustakaan"
          fill
          className="object-cover absolute inset-0 opacity-50"
          priority
        />
        <h1 className="text-white text-center text-3xl md:text-4xl font-extrabold relative pb-2 z-10">
          PROFIL PERPUSTAKAAN
          <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"></span>
        </h1>
      </div>
      {/* Main Content Area - Grid Layout */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
        {/* Left Column - Profil Perpustakaan Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Bagian pengantar Profil Perpustakaan */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Selamat Datang di Perpustakaan Madani
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Perpustakaan kami adalah jantungnya ilmu pengetahuan di Madani
              , menyediakan lingkungan yang kondusif dan sumber daya yang
              melimpah untuk mendukung proses belajar mengajar serta
              pengembangan diri. Kami berkomitmen untuk menjadi pusat literasi
              dan inovasi bagi seluruh civitas akademika.
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
                  <svg
                    className="w-8 h-8 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-8 pt-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Video Profil Perpustakaan
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Tonton video untuk mengenal lebih dekat visi, misi, dan komitmen
                perpustakaan Madani dalam mendukung pendidikan
                berkualitas.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Sorotan Utama:
              </h4>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {section.title}
              </h3>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                  <section.icon className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          ))}

          {/* Bagian Layanan Unggulan (mengganti Misi lama, disesuaikan) */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Layanan Unggulan Kami
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {layananUnggulan.map((layanan, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-5 border border-gray-200"
                >
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {layanan.title}
                  </h4>
                  <p className="text-sm text-gray-600">{layanan.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Teks "Rearranged by" */}
          <div className="p-8 pt-4 text-right text-sm text-gray-400">
            <p></p>
          </div>
        </div>

        {/* Right Column - Konten Samping (Disesuaikan untuk Profil Perpustakaan) */}
        <div className="lg:col-span-1 space-y-8">
          {/* Bagian Berita & Pengumuman Terbaru (mengganti poster Olahraga) */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Berita & Pengumuman Terbaru
            </h3>
            <div className="relative w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden mb-4">
              <Image
                src="/images/profil-perpus.jpeg" // Gambar berita/pengumuman umum
                alt="Berita Perpustakaan"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-700 text-sm">
              Temukan informasi terkini seputar kegiatan, koleksi baru, dan
              jadwal penting di perpustakaan kami.
            </p>
            <Link
              href="/informasi/news"
              className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Baca Selengkapnya &rarr;
            </Link>
          </div>

          {/* Agenda Section (Tetap ada, cocok untuk profil) */}
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-32">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              AGENDA PERPUSTAKAAN
            </h3>
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
        </div>
      </div>
      ---
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