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
      src: "/images/gamber-perpus.jpg",
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
      photoSrc: "/images/pusatakawan-1.png", 
      name: "Khoirul Ngibad, S.Pd., M.Pd",
      position: "Kepala sekolah",
      dob: "Magetan, 29 Mei 1989",
      gender: "Laki-laki",
    },
    {
      photoSrc: "/images/pusatakawan-2.png", 
      name: "Suwesty Rahayu, S.Pd.,Gr",
      position: "Kepala Perpustakaan",
      dob: "Samarinda, 10 Juni 1982",
      gender: "Perempuan",
    }, {
      photoSrc: "/images/pusatakawan-3.png", 
      name: "Ety Nor Anisa, S.Pd",
      position: "Layanan Teknis",
      dob: "Berau, 15 Oktober 1993",
      gender: "Perempuan",
    }, {
      photoSrc: "/images/pusatakawan-4.png", 
      name: "Sulistyo Nugraheny R.A, S.Pd",
      position: "Layanan Teknis",
      dob: "Lamongan, 23 April 1978",
      gender: "Perempuan",
    }, {
      photoSrc: "/images/pusatakawan-5.png", 
      name: "Mas'ani, S.Pd",
      position: "Layanan TIK",
      dob: "Balukang, 02 Agustus 1977",
      gender: "Perempuan",
    },
    {
      photoSrc: "/images/pusatakawan-6.png", 
      name: "Paridah, S.Sos",
      position: "Layanan TIK",
      dob: "Berau, 09 Mei 2000",
      gender: "Perempuan",
    },
    {
      photoSrc: "/images/pusatakawan-7.png", 
      name: "Tiara Elmi",
      position: "Layanan Pemustaka",
      dob: "Berau, 10 Mei 2002",
      gender: "Perempuan",
    },
    {
      photoSrc: "/images/pusatakawan-8.png", 
      name: "Diari Bagaskoro P.H",
      position: "Layanan Pemustaka",
      dob: "Kudus, 30 September 1998",
      gender: "Laki-laki",
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
      name: "SDIT Madani",
      logo: "/images/youtube.jpeg",
      href: "#",
    },
    {
      name: "Madaniofficial",
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
    <div className="min-h-screen bg-gray-100 pt-28 pb-12">
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
          Pustakawan
          <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"></span>
        </h1>
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
              </div>
              <div className="flex-grow text-sm mt-8">
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
              </div>
            </div>
          ))}
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
                  Perpustakaan Madani - Pukul 14:00 WIB
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