"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function GuestBookAndNewsPage() {
 // Mengganti nama komponen agar lebih relevan

 // Data untuk gambar header (kali ini statis sesuai gambar terakhir)
 const headerImageSrc =
   "https://images.pexels.com/photos/4145353/pexels-photo-4145353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"; // Contoh gambar orang di perpustakaan
 const headerImageAlt = "Siswa dan Guru di Perpustakaan";

 // Data untuk bagian "BERITA TERPOPULER" / Artikel (hanya 4 yang terlihat di gambar)
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
       "Tugas utama seorang guru diislamkan atau disebut Quality System of Muslim Education (QSME) yaitu menyampakan ilmu, membentuk karakter...",
   },
   {
     imageSrc:
       "/images/pohon-kamboja.jpg", // Placeholder untuk bunga kamboja
     title: "POHON KAMBOJA JEPANG di Lingkungan SDIT Madani",
     date: "18 April 2024",
     summary:
       "Kamboja Jepang adalah tanaman hias meranggas, berbatang gemuk besar, akarnya menyerupai umbi, daunnya panjang, bunga berbentuk terompet...",
   },
   {
     imageSrc:
       "/images/pohon-mangga.jpg", // Placeholder untuk mangga
     title: "POHON MANGGA DI LINGKUNGAN SDIT Madani",
     date: "20 Mei 2024",
     summary:
       "Mangga adalah buah tropis yang terkenal dengan rasa manis dan aroma harum. Di SDIT Madani, pohon mangga tumbuh subur, memberikan teduh dan buah segar...",
   },
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
    name: "Perpustakaan Madani",
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
   <div className="min-h-screen bg-gray-100 pb-12">
     {/* Top Banner (gambar statis dengan overlay) - Increased Height */}
     <div className="relative w-full h-[400px] overflow-hidden">
       <Image
         src={headerImageSrc}
         alt={headerImageAlt}
         fill
         className="object-cover"
         priority
       />
       <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center p-4">
         <div className="text-white">
           <h1 className="text-2xl md:text-4xl font-extrabold tracking-wide">
             SELAMAT DATANG DI PERPUSTAKAAN SEKOLAH
           </h1>
           <p className="text-3xl md:text-5xl font-bold mt-2">MADANI</p>
         </div>
       </div>
     </div>

     {/* Main Content Area - Grid Layout */}
     <div className="max-w-screen-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
       {/* Left Column - BUKU TAMU & BERITA TERPOPULER */}
       <div className="lg:col-span-2 space-y-8">
         {/* BUKU TAMU Section */}
         <div className="bg-white rounded-xl shadow-lg p-6">
           <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2 mb-4">
             BUKU TAMU
           </h2>
           <form className="space-y-4">
             <div>
               <label
                 htmlFor="nama"
                 className="block text-sm font-medium text-gray-700 mb-1"
               >
                 Nama
               </label>
               <input
                 type="text"
                 id="nama"
                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                 placeholder="Nama Lengkap"
               />
             </div>
             <div>
               <label
                 htmlFor="no-hp"
                 className="block text-sm font-medium text-gray-700 mb-1"
               >
                 No. Hp
               </label>
               <input
                 type="tel"
                 id="no-hp"
                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                 placeholder="Nomor Telepon"
               />
             </div>
             <div>
               <label
                 htmlFor="instansi"
                 className="block text-sm font-medium text-gray-700 mb-1"
               >
                 Instansi
               </label>
               <input
                 type="text"
                 id="instansi"
                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                 placeholder="Nama Instansi/Sekolah"
               />
             </div>
             <div>
               <label
                 htmlFor="bidang"
                 className="block text-sm font-medium text-gray-700 mb-1"
               >
                 Bidang
               </label>
               <select
                 id="bidang"
                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
               >
                 <option>-- Pilih Bidang --</option>
                 <option>Pendidikan</option>
                 <option>Riset</option>
                 <option>Lainnya</option>
               </select>
             </div>
             <div>
               <label
                 htmlFor="keperluan"
                 className="block text-sm font-medium text-gray-700 mb-1"
               >
                 Keperluan
               </label>
               <textarea
                 id="keperluan"
                 rows={3}
                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                 placeholder="Jelaskan Keperluan Anda"
               ></textarea>
             </div>
             <div className="flex justify-end">
               <button
                 type="submit"
                 className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
               >
                 <svg
                   className="w-5 h-5 mr-2 -ml-1"
                   fill="currentColor"
                   viewBox="0 0 20 20"
                 >
                   <path
                     fillRule="evenodd"
                     d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                     clipRule="evenodd"
                   />
                 </svg>
                 Kirim
               </button>
             </div>
           </form>
         </div>

         {/* BERITA TERPOPULER Section */}
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
         <div className="text-center mt-6">
           <Link
             href="#"
             className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
           >
             Lihat Berita Lainnya
           </Link>
         </div>
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
                 src="/images/gambar-olahraga-ituibadah.jpg" // Placeholder for Infografis 1
                 alt="Infografis Digital"
                 fill
                 className="object-cover"
               />
             </div>
             <div className="relative w-full aspect-video rounded-lg overflow-hidden">
               <Image
                 src="/images/gambar-olahraga-ituibadah.jpg" // Placeholder for Infografis 2
                 alt="Infografis Pendidikan"
                 fill
                 className="object-cover"
               />
             </div>
           </div>
         </div>

         {/* OLAHRAGA ITU IBADAH Poster Block */}
         <div className="bg-white rounded-xl shadow-lg p-4">
           <div className="relative w-full aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden">
             <Image
               src="/images/gambar-olahraga-ituibadah.jpg" // Re-using placeholder for the poster
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
           {/* Contoh agenda kedua (jika ada) */}
           <div className="flex items-center space-x-4 mb-4">
             <div className="bg-blue-600 text-white p-3 rounded-lg text-center font-bold flex-shrink-0">
               <span className="block text-2xl leading-none">11</span>{" "}
               {/* Sesuai tanggal di gambar */}
               <span className="block text-xs uppercase">APRIL</span>{" "}
               {/* Sesuai bulan di gambar */}
               <span className="block text-xs">2025</span>
             </div>
             <div>
               <p className="text-gray-800 font-semibold">
                 Pembukaan Website Perpustakaan
               </p>
               <p className="text-sm text-gray-600">
                 Bersama Madani Tech Center
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

         {/* Quick Links */}
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
             SURVEI KEPUASAN
           </h3>{" "}
           <ul className="space-y-2 text-gray-700">
             <li>
               <Link href="#" className="hover:text-blue-600">
                 Isi Survei
               </Link>
             </li>
           </ul>
           <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
             AGENDA
           </h3>{" "}
           <ul className="space-y-2 text-gray-700">
             <li>
               <Link href="#" className="hover:text-blue-600">
                 Lihat Semua Agenda
               </Link>
             </li>
           </ul>
           <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
             PEGAWAI
           </h3>
           <ul className="space-y-2 text-gray-700">
             <li>
               <Link href="#" className="hover:text-blue-600">
                 Daftar Pegawai
               </Link>
             </li>
           </ul>
           <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
             STRUKTUR
           </h3>
           <ul className="space-y-2 text-gray-700">
             <li>
               <Link href="#" className="hover:text-blue-600">
                 Struktur Organisasi
               </Link>
             </li>
           </ul>
           <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
             VISI MISI
           </h3>
           <ul className="space-y-2 text-gray-700">
             <li>
               <Link href="#" className="hover:text-blue-600">
                 Visi & Misi Perpustakaan
               </Link>
             </li>
           </ul>
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

     {/* Teks "Rearranged by" */}
     <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-right text-sm text-gray-400 mt-8">
       <p>Rearranged by Tama</p>
     </div>
   </div>
 );
}