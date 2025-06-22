import React from 'react'
import Link from 'next/link'
import { BookOpen, Smartphone, Users, FileText, ArrowRight } from 'lucide-react'

const FeaturedServices = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'Reservasi Buku',
      description: 'Pesan buku favorit Anda secara online dan ambil sesuai jadwal',
      href: '/layanan/reservasi-buku',
      color: 'bg-blue-500'
    },
    {
      icon: Smartphone,
      title: 'Perpanjangan Online',
      description: 'Perpanjang masa peminjaman buku dengan mudah melalui sistem online',
      href: '/layanan/perpanjangan-online',
      color: 'bg-green-500'
    },
    {
      icon: Users,
      title: 'Konsultasi',
      description: 'Dapatkan bimbingan dari pustakawan untuk kebutuhan penelitian Anda',
      href: '/layanan/konsultasi',
      color: 'bg-purple-500'
    },
    {
      icon: FileText,
      title: 'Koleksi Digital',
      description: 'Akses ribuan e-book, jurnal, dan multimedia secara gratis',
      href: '/koleksi/ebook',
      color: 'bg-red-500'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Layanan Unggulan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nikmati berbagai layanan modern untuk mendukung kebutuhan literasi Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-medium">
                <span>Pelajari Lebih Lanjut</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedServices