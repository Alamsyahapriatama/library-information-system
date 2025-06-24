"use client"; // Required for client components in Next.js

import React, { useState, useEffect } from "react"; // Import useState dan useEffect untuk carousel
import Image from "next/image";
import Link from "next/link";
// Hapus icon yang tidak relevan dengan fasilitas jika halaman ini tidak lagi menampilkan fasilitas
// import { Book, Monitor, Wifi, Users, Coffee, Library, Handshake } from 'lucide-react';

export default function DataPegawaiPage() {
  // Mengganti nama komponen menjadi lebih spesifik
  // Data untuk carousel gambar (sesuai permintaan gambar ketiga)
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

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Otomatis ganti gambar carousel setiap beberapa detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length
      );
    }, 5000); // Ganti gambar setiap 5 detik
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Data untuk daftar pegawai
  const employees = [
    {
      photoSrc: "/images/alfina.png", // Placeholder, ganti dengan path gambar asli
      name: "Alifina Rusdiana S.Pd",
      position: "Kepala Perpustakaan",
      dob: "Muara Mantai Ulu, 22 Desember 1987",
      gender: "Perempuan",
      rank: "-",
    },
    {
      photoSrc: "/images/yudi.png", // Placeholder, ganti dengan path gambar asli
      name: "Yudi Setiyoningsih",
      position: "Teknis",
      dob: "Labanan, 14 Juni 1988",
      gender: "Perempuan",
      rank: "-",
    },
    {
      photoSrc: "/images/rizky.png", // Placeholder, ganti dengan path gambar asli
      name: "M. Rizky Saputra Djafar",
      position: "Teknis",
      dob: "Gunung Tabur, 18 Januari 1997",
      gender: "Laki-laki",
      rank: "-",
    },
    {
      photoSrc: "/images/yuli.png", // Placeholder, ganti dengan path gambar asli
      name: "Reni Andriani, S.I.P",
      position: "Teknis",
      dob: "Berau, 25 Februari 1989",
      gender: "Perempuan",
      rank: "-",
    },
    // Tambahkan data pegawai lain jika diperlukan
  ];

  const relatedLinks = [
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
    { name: "kemenkeu", logo: "/images/kemenkeu.png", href: "#" },
    { name: "Bank Indonesia", logo: "/images/bi.png", href: "#" },
    { name: "Otoritas Jasa Keuangan", logo: "/images/ojk.png", href: "#" },
    { name: "Bapennas", logo: "/images/bapennas.png", href: "#" },
    { name: "BPS", logo: "/images/bps.jpeg", href: "#" },
  ];


  return (
    <div className="min-h-screen bg-gray-100 pb-12">
      {/* Top Banner with Carousel - Increased Height */}
      <div className="relative w-full h-[400px] overflow-hidden">
        {carouselImages.map((img, index) => (
          <Image
            key={index}
            src={img.src}
            alt={img.alt}
            fill
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            priority={index === currentImageIndex} // Prioritaskan gambar yang sedang aktif
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center p-4">
          <div className="text-white">
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-wide">
              SELAMAT DATANG DI PERPUSTAKAAN SEKOLAH
            </h1>
            <p className="text-3xl md:text-5xl font-bold mt-2">SMAN 6 BERAU</p>
          </div>
        </div>
        {/* Carousel indicators/dots (optional) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentImageIndex ? "bg-white" : "bg-gray-400"
              } transition-colors duration-300`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Main Content Area - Grid Layout */}
      <div className="max-w-screen-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Left Column - DATA PEGAWAI */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2 mb-4">
            DATA PEGAWAI
          </h2>

          {employees.map((employee, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col sm:flex-row p-4 items-start border border-gray-200"
            >
              <div className="relative w-48 h-48 flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 rounded-lg overflow-hidden border border-gray-300"> {/* Increased photo size */}
                <Image
                  src={employee.photoSrc}
                  alt={employee.name}
                  fill
                  className="object-cover"
                />
                <button className="absolute bottom-0 left-0 w-full bg-blue-600 text-white text-xs py-1 text-center font-medium opacity-90">
                  Lihat Selengkapnya
                </button>
              </div>
              <div className="flex-grow text-sm">
                <p className="mb-2">
                  <strong className="text-gray-700">Nama:</strong>{" "}
                  <span className="text-gray-800 font-semibold">
                    {employee.name}
                  </span>
                </p>
                <p className="mb-2">
                  <strong className="text-gray-700">Jabatan:</strong>{" "}
                  <span className="text-gray-600">{employee.position}</span>
                </p>
                <p className="mb-2">
                  <strong className="text-gray-700">
                    Tempat Tanggal Lahir:
                  </strong>{" "}
                  <span className="text-gray-600">{employee.dob}</span>
                </p>
                <p className="mb-2">
                  <strong className="text-gray-700">Jenis Kelamin:</strong>{" "}
                  <span className="text-gray-600">{employee.gender}</span>
                </p>
                <p className="mb-2">
                  <strong className="text-gray-700">Pangkat Golongan:</strong>{" "}
                  <span className="text-gray-600">{employee.rank}</span>
                </p>
                {/* Tombol "Lihat Selengkapnya" di luar foto */}
                <Link
                  href="#"
                  className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition-colors mt-2"
                >
                  Lihat Selengkapnya
                </Link>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-200">
              &lt;
            </button>
            <button className="px-3 py-1 border border-blue-600 bg-blue-600 text-white rounded-md">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-200">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-200">
              3
            </button>
            <span className="text-gray-600">...</span>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-200">
              &gt;
            </button>
          </div>

          {/* Teks "Rearranged by" */}
          <div className="p-8 pt-4 text-right text-sm text-gray-400">
            <p>Rearranged by Tama</p>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* OLAHRAGA ITU IBADAH Poster Block */}
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

          {/* AGENDA Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-32">
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
        </div>
      </div>

      {/* LINK TERKAIT Section (restored to autoscroll version) */}
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
      {/* CSS for auto-scrolling animation (needed for LINK TERKAIT) */}
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