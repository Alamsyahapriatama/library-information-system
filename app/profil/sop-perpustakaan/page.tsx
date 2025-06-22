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
    { name: 'PSB Sekolah', logo: '/images/logo-psb-sekolah.png', href: '#' },
    { name: 'Portal Garuda', logo: '/images/logo-garuda.png', href: '#' },
    { name: 'Bintang Pusnas', logo: '/images/logo-bintang-pusnas.png', href: '#' },
    { name: 'Khasara Perpusnas', logo: '/images/logo-khasara-perpusnas.png', href: '#' },
    { name: 'SIBI', logo: '/images/logo-sibi.png', href: '#' },
    { name: 'Youtube SMAN 6 Berau', logo: '/images/logo-youtube.png', href: '#' },
    { name: '@sman6berauofficial', logo: '/images/logo-instagram.png', href: '#' },
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
      location: 'Aula SMAN 6 Berau'
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
      <div className="relative w-full h-[300px] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Image relevant to rules/procedures
          alt="Perpustakaan: Aturan dan Prosedur"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* SOP Perpustakaan Header */}
      <div className="bg-white py-4 mb-8 relative z-10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Wider container */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 relative pb-2">
            STANDAR OPERASIONAL PROSEDUR (SOP) PERPUSTAKAAN
            <span className="absolute left-0 bottom-0 w-24 h-1 bg-blue-600 rounded-full"></span>
          </h1>
        </div>
      </div>

      {/* Main Content Area - Grid Layout */}
      <div className="max-w-screen-8xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8"> {/* Wider container */}

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

          {/* Video Guide for SOPs */}
          <div className="bg-white rounded-xl shadow-lg pb-4">
            <div className="relative w-full aspect-video bg-gray-800 rounded-t-xl overflow-hidden mb-6">
              <Image
                src="https://images.pexels.com/photos/716107/pexels-photo-716107.jpeg?auto=compress&cs=tinysrgb&w=800" // Video thumbnail for a guide/tutorial
                alt="Video Panduan SOP Perpustakaan"
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Video Panduan SOP Perpustakaan</h3>
              <p className="text-lg text-gray-600 mb-6">
                Tonton video panduan ini untuk memahami setiap prosedur dengan
                lebih mudah dan cepat, dari peminjaman hingga pengembalian buku.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Manfaat Menonton Video:</h4>
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
            <p>Rearranged by Tama</p>
          </div>
        </div>

        {/* Right Column - "OLAHRAGA ITU IBADAH" Poster & Agenda (kept as is, but updated agenda dates) */}
        <div className="lg:col-span-1 space-y-8">
          {/* "OLAHRAGA ITU IBADAH" Poster Block */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="relative w-full aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/4006132/pexels-photo-4006132.jpeg?auto=compress&cs=tinysrgb&w=800" // Placeholder for "OLAHRAGA ITU IBADAH" poster
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

      {/* LINK TERKAIT Section (kept as is, but container width updated for consistency) */}
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