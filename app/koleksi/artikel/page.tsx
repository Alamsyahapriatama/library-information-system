// app/koleksi/artikel/page.tsx
'use client'; // Pastikan ini ada di baris pertama

import Link from 'next/link';
import Image from 'next/image';
// Menggunakan alias jalur (@/) menunjuk ke root proyek Anda.
// Jalur yang benar dari root ke file JSON Anda.
import artikelData from '@/app/data/artikel.json'; 

interface Artikel {
  slug: string;
  title: string;
  content: string;
  image: string;
}

export default function ArtikelListPage() { // Nama komponen yang lebih deskriptif
  const articles: Artikel[] = artikelData as Artikel[];

  // Dummy data untuk sidebar, disesuaikan agar relevan dengan artikel
  const layananLinks = [
    { name: 'USULAN ARTIKEL', href: '#' }, 
    { name: 'KONSULTASI PENULISAN', href: '#' },
    { name: 'ARSIP ARTIKEL', href: '#' }, 
    { name: 'KONTRIBUSI ARTIKEL', href: '#' },
  ];
  const strukturLinks = [ // Contoh, bisa diganti dengan kategori artikel atau tag
    { name: 'KATEGORI BERITA', href: '#' }, 
    { name: 'ANALISIS', href: '#' },
    { name: 'OPINI', href: '#' },
  ];
  const relatedLinks = [
    { name: 'Youtube', logo: '/images/youtube.jpeg', href: '#' }, 
    { name: 'BANK INDONESIA', logo: '/images/bi.png', href: '#' },
    { name: 'KEMENKEU', logo: '/images/kemenkeu.png', href: '#' }, 
    { name: 'BINTANG PUSNAS', logo: '/images/bintang-pusnas.png', href: '#' },
    { name: 'BAPENAS', logo: '/images/bapennas.png', href: '#' }, 
    { name: 'SDIT MADANI', logo: '/images/sman.jpeg', href: '#' },
    { name: 'BPS', logo: '/images/bps.jpeg', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Top Banner Image (Mirip E-book Page) */}
      <div className="relative w-full h-[250px] md:h-[300px] overflow-hidden bg-gradient-to-r from-blue-700 to-blue-900 text-white pt-28">
        <Image 
          src="https://images.pexels.com/photos/3394336/pexels-photo-3394336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Koleksi Artikel Banner" 
          fill 
          className="object-cover opacity-20" 
          priority 
          sizes="(max-width: 768px) 100vw, 100vw"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-2 uppercase tracking-wide">Jelajahi</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">KOLEKSI ARTIKEL</h1>
          <p className="text-2xl md:text-3xl font-semibold mt-2">Perpustakaan Madani</p>
        </div>
      </div>

      <div className="max-w-screen-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content: Article List */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Daftar Artikel Terbaru</h2>
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((artikel) => (
                <Link
                  href={`/koleksi/artikel/${artikel.slug}`}
                  key={artikel.slug}
                  className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
                >
                  <div className="relative w-full h-60"> {/* Tinggi gambar yang konsisten */}
                    <Image 
                      src={artikel.image || 'https://via.placeholder.com/200x300?text=No+Image'} 
                      alt={artikel.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-300" 
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 mb-1 line-clamp-2">{artikel.title}</h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-3">
                      {artikel.content.length > 100 // Tampilkan lebih banyak teks untuk preview
                        ? artikel.content.substring(0, 100) + '...'
                        : artikel.content}
                    </p>
                    <p className="text-blue-600 text-sm font-medium mt-2">Baca Selengkapnya &rarr;</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 text-lg">Tidak ada Artikel tersedia saat ini.</p>
          )}

          {/* Pagination (Dummy, seperti E-book Page) */}
          <div className="flex justify-center items-center space-x-2 mt-10">
            <Link href="#" className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200">&laquo;</Link>
            {[1, 2, 3].map(page => (
              <Link href="#" key={page} className={`px-3 py-1 border border-gray-300 rounded-md ${page === 1 ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}>
                {page}
              </Link>
            ))}
            <span className="px-3 py-1 text-gray-700">...</span>
            <Link href="#" className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200">&raquo;</Link>
          </div>
        </div>

        {/* Right Sidebar (Mirip E-book Page) */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">INFOGRAFIS</h3>
            <div className="relative w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <Image src="/images/gambar-olahraga-ituibadah.jpg" alt="Infografis Perpustakaan" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw"/>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">Informasi visual tentang layanan dan statistik perpustakaan.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 sticky top-32">
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">LAYANAN ARTIKEL</h3>
            <ul className="space-y-3">{layananLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="text-blue-600 hover:text-blue-800 text-base font-medium transition-colors">
                  &raquo; {item.name}
                </Link>
              </li>
            ))}</ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">KATEGORI ARTIKEL</h3>
            <ul className="space-y-3">{strukturLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="text-blue-600 hover:text-blue-800 text-base font-medium transition-colors">
                  &raquo; {item.name}
                </Link>
              </li>
            ))}</ul>
          </div>
        </div>
      </div>

      {/* Related Links Section (sama seperti E-book Page) */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 relative pb-2">LINK TERKAIT<span className="absolute left-0 bottom-0 w-16 h-1 bg-blue-600 rounded-full"></span></h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-center">
          {relatedLinks.map((link, index) => (
            <Link href={link.href} key={index} className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="relative w-16 h-16 mb-2">
                <Image src={link.logo} alt={link.name} fill className="object-contain" sizes="64px"/>
              </div>
              <span className="text-sm text-center text-gray-700 font-medium">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
