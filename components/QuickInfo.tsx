import React from 'react'
import { Clock, MapPin, Phone, Mail } from 'lucide-react'

const QuickInfo = () => {
  const infos = [
    {
      icon: Clock, // Icon untuk jam buka tetap Clock
      title: 'Jam Kunjungan',
      details: [
        'Senin - Kamis: 07:00 - 16:00', 
        'Jumat: 07:00 - 11:00'
      ],
      color: 'bg-blue-500'
    },
    {
      icon: MapPin, // Icon lokasi tetap MapPin
      title: 'Alamat', 
      details: [
        'Jl. Murjani II, Gg Berkah,',
        'Kelurahan Karang Ambun,',
        'Kecamatan Tanjung Redeb'
      ],
      color: 'bg-green-500'
    },
    {
      icon: Phone, // Icon telepon tetap Phone
      title: 'No. Telepon/WhatsApp', 
      details: [
        'Kepala Perpustakaan: +62 822-5401-7726',
        'Teknis: +62 821-5727-5761',
        'IT: +62 852-5076-8024'
      ],
      color: 'bg-purple-500'
    },
    {
      icon: Mail, // Icon email tetap Mail
      title: 'Email', // Judul tetap Email
      details: ['permadanisditmadani@gmail.com'], // Data email
      color: 'bg-red-500'
    }
  ];

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