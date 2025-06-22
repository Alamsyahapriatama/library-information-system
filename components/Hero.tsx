'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Selamat Datang di Perpustakaan SMAN 6 Berau',
      subtitle: 'Gerbang Ilmu Pengetahuan dan Literasi',
      description: 'Temukan ribuan koleksi buku dan nikmati layanan perpustakaan modern untuk mendukung pembelajaran Anda.',
      hasVideo: false
    },
    {
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Visi & Misi Perpustakaan',
      subtitle: 'Mewujudkan Generasi Literat',
      description: 'Mengenal lebih dekat visi dan misi perpustakaan dalam mendukung pendidikan berkualitas.',
      hasVideo: true,
      videoUrl: '/videos/visi-misi.mp4'
    },
    {
      image: 'https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Layanan Digital Terdepan',
      subtitle: 'iPusnas, iBerau, dan E-book',
      description: 'Akses koleksi digital kapan saja, di mana saja melalui platform digital terintegrasi.',
      hasVideo: false
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden mt-20">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
          <div className="absolute inset-0 bg-black/50" />
          
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className="text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-4 text-blue-200 animate-fade-in-up delay-200">
                    {slide.subtitle}
                  </p>
                  <p className="text-lg md:text-xl mb-8 max-w-2xl animate-fade-in-up delay-400">
                    {slide.description}
                  </p>
                  <div className="space-x-4 animate-fade-in-up delay-600">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                      Jelajahi Koleksi
                    </button>
                    <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                      Layanan Digital
                    </button>
                  </div>
                </div>

                {/* Video/Media Section */}
                {slide.hasVideo && (
                  <div className="relative">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                      <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                        <Image
                          src={slide.image}
                          alt="Video thumbnail"
                          fill
                          className="object-cover opacity-50"
                        />
                        <button className="absolute inset-0 flex items-center justify-center group">
                          <div className="bg-blue-600 hover:bg-blue-700 rounded-full p-4 transition-colors group-hover:scale-110 transform duration-200">
                            <Play className="h-8 w-8 text-white ml-1" />
                          </div>
                        </button>
                      </div>
                      <div className="mt-4 text-center">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Video Profil Perpustakaan
                        </h3>
                        <p className="text-sm text-gray-200">
                          Tonton video untuk mengenal lebih dekat perpustakaan kami
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero