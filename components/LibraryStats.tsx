import React from 'react'
import { BookOpen, Users, Calendar, Award } from 'lucide-react'

const LibraryStats = () => {
  const stats = [
    {
      icon: BookOpen,
      number: '5,247',
      label: 'Total Koleksi Buku',
      color: 'bg-blue-500'
    },
    {
      icon: Users,
      number: '1,234',
      label: 'Anggota Aktif',
      color: 'bg-green-500'
    },
    {
      icon: Calendar,
      number: '156',
      label: 'Kegiatan Literasi',
      color: 'bg-purple-500'
    },
    {
      icon: Award,
      number: '23',
      label: 'Penghargaan',
      color: 'bg-yellow-500'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Statistik Perpustakaan
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Pencapaian dan kontribusi perpustakaan dalam mendukung pendidikan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300"
            >
              <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-blue-100 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LibraryStats