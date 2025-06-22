import React from 'react'
import { Clock, MapPin, Phone, Mail } from 'lucide-react'

const QuickInfo = () => {
  const infos = [
    {
      icon: Clock,
      title: 'Jam Buka',
      details: ['Senin - Jumat: 07:00 - 15:00', 'Sabtu: 07:00 - 12:00'],
      color: 'bg-blue-500'
    },
    {
      icon: MapPin,
      title: 'Lokasi',
      details: ['Jl. Pendidikan No. 123', 'Berau, Kalimantan Timur'],
      color: 'bg-green-500'
    },
    {
      icon: Phone,
      title: 'Kontak',
      details: ['(0554) 123-4567', 'WhatsApp: 0812-3456-7890'],
      color: 'bg-purple-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['perpus@sman6berau.sch.id', 'info@sman6berau.sch.id'],
      color: 'bg-red-500'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infos.map((info, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`${info.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <info.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 text-sm">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuickInfo