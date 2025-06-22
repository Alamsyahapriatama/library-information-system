import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, ArrowRight } from 'lucide-react'

const LatestNews = () => {
  const news = [
    {
      id: 1,
      title: 'Perpustakaan SMAN 6 Berau Raih Penghargaan Perpustakaan Terbaik',
      excerpt: 'Perpustakaan sekolah meraih penghargaan sebagai perpustakaan sekolah terbaik tingkat provinsi Kalimantan Timur.',
      author: 'Admin Perpustakaan',
      date: '2024-02-15',
      image: 'https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Prestasi'
    },
    {
      id: 2,
      title: 'Koleksi Buku Baru Telah Tiba - 500 Judul Terbaru',
      excerpt: 'Perpustakaan menambah koleksi dengan 500 judul buku baru dari berbagai kategori untuk mendukung pembelajaran.',
      author: 'Tim Perpustakaan',
      date: '2024-02-12',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Koleksi'
    },
    {
      id: 3,
      title: 'Festival Literasi 2024 - Ajang Kreativitas Siswa',
      excerpt: 'Festival literasi tahunan akan diselenggarakan dengan berbagai kompetisi menarik untuk meningkatkan minat baca.',
      author: 'Panitia Festival',
      date: '2024-02-10',
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Event'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Berita Terbaru
            </h2>
            <p className="text-xl text-gray-600">
              Informasi dan update terkini dari perpustakaan
            </p>
          </div>
          <Link
            href="/informasi/news"
            className="hidden md:flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <span>Lihat Semua Berita</span>
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <article
              key={item.id}
              className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{item.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(item.date).toLocaleDateString('id-ID')}</span>
                  </div>
                </div>
                <Link
                  href={`/informasi/news/${item.id}`}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link
            href="/informasi/news"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <span>Lihat Semua Berita</span>
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LatestNews