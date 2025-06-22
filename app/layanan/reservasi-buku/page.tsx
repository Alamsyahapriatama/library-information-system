'use client'

import React, { useState } from 'react'
import { BookOpen, Calendar, Clock, User, Search, Filter } from 'lucide-react'

export default function ReservaBukuPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('semua')
  const [reservationForm, setReservationForm] = useState({
    nama: '',
    kelas: '',
    nisn: '',
    email: '',
    telepon: '',
    tanggalAmbil: '',
    catatan: ''
  })

  const categories = [
    { id: 'semua', name: 'Semua Kategori' },
    { id: 'fiksi', name: 'Fiksi' },
    { id: 'non-fiksi', name: 'Non-Fiksi' },
    { id: 'sains', name: 'Sains & Teknologi' },
    { id: 'sejarah', name: 'Sejarah' },
    { id: 'sastra', name: 'Sastra Indonesia' }
  ]

  const availableBooks = [
    {
      id: 1,
      title: 'Laskar Pelangi',
      author: 'Andrea Hirata',
      category: 'fiksi',
      stock: 3,
      isbn: '978-602-291-000-1',
      cover: 'https://images.pexels.com/photos/1261180/pexels-photo-1261180.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 2,
      title: 'Sapiens: A Brief History of Humankind',
      author: 'Yuval Noah Harari',
      category: 'non-fiksi',
      stock: 2,
      isbn: '978-602-291-000-2',
      cover: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 3,
      title: 'Fisika untuk SMA',
      author: 'Tim Penulis',
      category: 'sains',
      stock: 5,
      isbn: '978-602-291-000-3',
      cover: 'https://images.pexels.com/photos/1261180/pexels-photo-1261180.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ]

  const filteredBooks = availableBooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'semua' || book.category === selectedCategory
    return matchesSearch && matchesCategory && book.stock > 0
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setReservationForm({
      ...reservationForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Reservation submitted:', reservationForm)
    alert('Reservasi berhasil dikirim! Kami akan menghubungi Anda untuk konfirmasi.')
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <BookOpen className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Reservasi Buku
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Pesan buku favorit Anda secara online dan ambil sesuai jadwal yang telah ditentukan
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Book Search and List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cari Buku</h2>
              
              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Cari judul buku atau nama pengarang..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Book List */}
              <div className="space-y-4">
                {filteredBooks.map((book) => (
                  <div key={book.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-16 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{book.title}</h3>
                        <p className="text-gray-600 text-sm">oleh {book.author}</p>
                        <p className="text-gray-500 text-xs">ISBN: {book.isbn}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm text-green-600">Stok: {book.stock} tersedia</span>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm transition-colors">
                            Pilih Buku
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredBooks.length === 0 && (
                <div className="text-center py-8">
                  <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Tidak ada buku ditemukan</h3>
                  <p className="text-gray-500">Coba ubah kata kunci pencarian atau kategori</p>
                </div>
              )}
            </div>
          </div>

          {/* Reservation Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Form Reservasi</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="nama"
                    required
                    value={reservationForm.nama}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kelas *
                  </label>
                  <select
                    name="kelas"
                    required
                    value={reservationForm.kelas}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Pilih Kelas</option>
                    <option value="X IPA 1">X IPA 1</option>
                    <option value="X IPA 2">X IPA 2</option>
                    <option value="X IPS 1">X IPS 1</option>
                    <option value="XI IPA 1">XI IPA 1</option>
                    <option value="XI IPA 2">XI IPA 2</option>
                    <option value="XI IPS 1">XI IPS 1</option>
                    <option value="XII IPA 1">XII IPA 1</option>
                    <option value="XII IPA 2">XII IPA 2</option>
                    <option value="XII IPS 1">XII IPS 1</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    NISN *
                  </label>
                  <input
                    type="text"
                    name="nisn"
                    required
                    value={reservationForm.nisn}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={reservationForm.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    No. Telepon/WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="telepon"
                    value={reservationForm.telepon}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tanggal Pengambilan *
                  </label>
                  <input
                    type="date"
                    name="tanggalAmbil"
                    required
                    value={reservationForm.tanggalAmbil}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Catatan Tambahan
                  </label>
                  <textarea
                    name="catatan"
                    rows={3}
                    value={reservationForm.catatan}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Catatan khusus untuk reservasi..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                >
                  Kirim Reservasi
                </button>
              </form>

              {/* Info Box */}
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900">Informasi Penting</h4>
                    <ul className="text-sm text-blue-700 mt-1 space-y-1">
                      <li>• Reservasi berlaku maksimal 3 hari</li>
                      <li>• Konfirmasi via WhatsApp/Email</li>
                      <li>• Bawa kartu pelajar saat pengambilan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}