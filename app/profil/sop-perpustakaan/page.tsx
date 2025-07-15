'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FileText, ClipboardList, CheckCircle, Ban, BookOpen, CalendarDays } from 'lucide-react'; // Relevant icons for SOP

export default function SopPerpustakaanPage() { // Renamed component

  // Data for Standard Operating Procedures (SOPs)
  const sopSections = [
    {
      icon: FileText,
      title: 'Prosedur Peminjaman Buku',
      details: [
        'Setiap pemustaka wajib memiliki kartu anggota perpustakaan yang masih berlaku.',
        'Maksimal peminjaman 3 buku untuk jangka waktu 7 hari.',
        'Keterlambatan pengembalian akan dikenakan denda Rp 500,- per buku per hari.',
        'Buku referensi (misal: kamus, ensiklopedia) dan koleksi khusus tidak dapat dipinjamkan keluar perpustakaan.',
      ]
    },
    {
      icon: ClipboardList,
      title: 'Prosedur Pengembalian Buku',
      details: [
        'Buku dikembalikan langsung ke petugas perpustakaan pada jam operasional.',
        'Pastikan kondisi buku sama seperti saat dipinjam (tidak rusak atau hilang).',
        'Cek status denda (jika ada) dan lakukan pembayaran sesuai ketentuan.',
      ]
    },
    {
      icon: CheckCircle,
      title: 'Tata Tertib Penggunaan Ruang Baca',
      details: [
        'Jaga ketenangan dan kebersihan di dalam ruang baca.',
        'Dilarang makan dan minum di area koleksi buku.',
        'Gunakan fasilitas dengan bertanggung jawab dan tidak merusak.',
        'Atur volume suara perangkat elektronik agar tidak mengganggu.',
      ]
    },
    {
      icon: Ban,
      title: 'Larangan dan Sanksi',
      details: [
        'Dilarang merusak, mencoret, atau menghilangkan buku dan properti perpustakaan.',
        'Dilarang membawa senjata tajam/api, minuman keras, atau narkoba.',
        'Pelanggaran tata tertib akan dikenakan sanksi sesuai kebijakan sekolah dan perpustakaan (misal: denda, skorsing keanggotaan, penggantian barang).',
      ]
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
  // Manfaat dari bagian Video (context updated for SOP guide)
  const videoBenefits = [
    'Panduan Cepat & Mudah Dimengerti',
    'Visualisasi Prosedur',
    'Meminimalisir Kesalahan'
  ];

  // Current Date for Agenda (assuming the context is Bekasi Regency, West Java, Indonesia)
  const today = new Date();
  const options = { day: '2-digit', month: 'short', year: 'numeric' };

  // Adjust Agenda dates to be current or future relative to today
  const agendaItems = [
    {
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5), // 5 days from today
      title: 'Sosialisasi SOP Terbaru',
      time: 'Pukul 09:00 WIB',
      location: 'Aula SDIT Madani'
    },
    {
      date: new Date(today.getFullYear(), today.getMonth() + 1, 10), // 10th of next month
      title: 'Pemeriksaan Koleksi Berkala',
      time: 'Sepanjang Hari',
      location: 'Area Koleksi'
    }
  ].map(item => ({
    ...item,
    day: item.date.getDate(),
    month: item.date.toLocaleString('id-ID', { month: 'short' }).toUpperCase(),
    year: item.date.getFullYear()
  }));


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
          STANDAR OPERASIONAL PROSEDUR (SOP) PERPUSTAKAAN
          <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"></span>
        </h1>
      </div>

      {/* Main Content Area - Grid Layout */}
      <div className="max-w-screen-8xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8"> {/* Wider container */}

        {/* Left Column - SOP Details & Video */}
        <div className="lg:col-span-2 space-y-8">
          {/* Introduction to SOPs */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Panduan Lengkap Penggunaan Perpustakaan
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Untuk kenyamanan dan ketertiban bersama, kami menyediakan
              Standar Operasional Prosedur (SOP) yang wajib dipahami dan
              ditaati oleh seluruh pemustaka. SOP ini dirancang untuk
              memastikan layanan perpustakaan berjalan lancar dan optimal.
            </p>
          </div>
          
          {/* List of SOP Sections */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Daftar Prosedur Operasional Standar</h3>
            <div className="space-y-8">
              {sopSections.map((section, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full mr-3 flex-shrink-0">
                      <section.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    {section.title}
                  </h4>
                  <ul className="list-disc pl-12 text-gray-700 space-y-2">
                    {section.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-base">{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Teks "Rearranged by" */}
          <div className="p-8 pt-4 text-right text-sm text-gray-400">
            <p></p>
          </div>
        </div>

        {/* Right Column - "OLAHRAGA ITU IBADAH" Poster & Agenda (kept as is, but updated agenda dates) */}
        <div className="lg:col-span-1 space-y-8">
          {/* "OLAHRAGA ITU IBADAH" Poster Block */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="relative w-full aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/profil-perpus.jpeg" // Placeholder for "OLAHRAGA ITU IBADAH" poster
                alt="Olahraga Itu Ibadah Poster"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Agenda Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-32">
            <h3 className="text-xl font-bold text-gray-900 mb-4">AGENDA</h3>
            {agendaItems.map((agenda, index) => (
              <div key={index} className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-600 text-white p-3 rounded-lg text-center font-bold flex-shrink-0">
                  <span className="block text-2xl leading-none">{agenda.day}</span>
                  <span className="block text-xs uppercase">{agenda.month}</span>
                  <span className="block text-xs">{agenda.year}</span>
                </div>
                <div>
                  <p className="text-gray-800 font-semibold">{agenda.title}</p>
                  <p className="text-sm text-gray-600">{agenda.location} - {agenda.time}</p>
                </div>
              </div>
            ))}
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