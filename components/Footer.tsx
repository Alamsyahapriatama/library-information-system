import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  BookOpen,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Globe,
  Youtube
} from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/share/1AgsTs4mMH/',
      name: 'Facebook SMAN 6 Berau',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/perpustakaan_permadani?igsh=MTc3bWRmZGllNHA1MQ==',
      name: 'Instagram @perpustakaan_permadani',
    },
    {
      icon: Youtube,
      href: 'https://youtube.com/@perpustakaanpermadanisditmadan?si=nVCqBlaQCRagy-Uc',
      name: 'YouTube Perdani',
    },
    {
      icon: Globe,
      href: '#',
      name: 'Website Sekolah',
    },
  ]

  const externalLinks = [
    { name: 'iPusnas', href: '#', description: 'Perpustakaan Digital Nasional' },
    { name: 'iBerau', href: '#', description: 'Portal Digital Berau' },
    { name: 'iKaltim', href: '#', description: 'Portal Kalimantan Timur' },
    { name: 'Kemdikbud', href: '#', description: 'Kementerian Pendidikan' },
  ]

  const quickLinks = [
    { name: 'Profil Perpustakaan', href: '/profil/profil-perpustakaan' },
    { name: 'Layanan', href: '/layanan/reservasi-buku' },
    { name: 'Koleksi Digital', href: '/koleksi/ebook' },
    { name: 'Berita', href: '/informasi/news' },
    { name: 'Kontak', href: '/interaksi/buku-tamu' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Library Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Perpustakaan</h3>
                <p className="text-sm text-gray-300">Perpustakaan Permadani</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Gerbang ilmu pengetahuan dan literasi untuk menciptakan generasi cerdas, 
              berkarakter, dan berwawasan global.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  title={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Informasi Kontak</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Jl. Pendidikan No. 123</p>
                  <p className="text-gray-300">Berau, Kalimantan Timur 77311</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">(0554) 123-4567</p>
                  <p className="text-gray-300">WA: 0812-3456-7890</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">perpus@sman6berau.sch.id</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Senin - Jumat: 07:00 - 15:00</p>
                  <p className="text-gray-300">Sabtu: 07:00 - 12:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Tautan Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Link Terkait</h4>
            <div className="grid grid-cols-2 gap-4">
              {externalLinks.map((link, index) => (
                <div key={index} className="text-center">
                  <a
                    href={link.href}
                    className="block bg-gray-800 hover:bg-gray-700 rounded-lg p-3 transition-colors"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-xs font-medium text-gray-300">{link.name}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Perpustakaan Permadani. Semua hak cipta dilindungi.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              NPP: 6403091E1000001
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
