'use client'; // Required for client components in Next.js

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  BookOpen, // Icon for reading
  Coffee, // Icon for a cozy spot
  Speaker, // Icon for storytelling/events
  Users, // Icon for community
  BookMarked, // Icon for curated collections
} from 'lucide-react'; // Icons relevant to reading spots and engagement

export default function TitikBacaPage() { // Renamed component
  // Data for carousel images (can be re-themed for reading spots)
  const carouselImages = [
    {
      src: "https://images.pexels.com/photos/159781/book-love-books-reading-159781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Siswa membaca buku bersama di titik baca",
    },
    {
      src: "https://images.pexels.com/photos/4145353/pexels-photo-4145353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Ruang baca yang nyaman dengan banyak buku",
    },
    {
      src: "https://images.pexels.com/photos/4090126/pexels-photo-4090126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Anak-anak membaca buku cerita di sudut baca",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Effect for auto-sliding carousel
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(slideInterval); // Clean up interval on component unmount
  }, [carouselImages.length]);

  // Content for Titik Baca sections
  const titikBacaSections = [
    {
      icon: BookOpen,
      title: "Apa Itu Titik Baca?",
      description:
        "Titik Baca adalah area khusus di lingkungan sekolah atau perpustakaan yang dirancang untuk menjadi tempat nyaman dan inspiratif bagi siswa dan guru untuk membaca, belajar, dan berdiskusi. Ini adalah ruang untuk menumbuhkan minat literasi dan kegemaran membaca.",
    },
    {
      icon: Coffee, // Representing comfort
      title: "Desain dan Suasana",
      description:
        "Kami menyediakan Titik Baca dengan desain yang menarik dan suasana yang kondusif. Dilengkapi dengan tempat duduk yang nyaman, pencahayaan yang memadai, dan dekorasi yang menstimulasi, Titik Baca kami adalah tempat ideal untuk tenggelam dalam dunia buku.",
    },
    {
      icon: BookMarked,
      title: "Koleksi Pilihan di Titik Baca",
      description:
        "Setiap Titik Baca dilengkapi dengan koleksi buku-buku pilihan yang relevan dan menarik, mulai dari fiksi populer, non-fiksi informatif, hingga komik edukatif. Koleksi ini selalu diperbarui untuk menjaga minat baca pemustaka.",
    },
    {
      icon: Speaker,
      title: "Program dan Aktivitas",
      description:
        "Titik Baca bukan hanya tempat membaca, tapi juga pusat aktivitas literasi. Kami rutin mengadakan kegiatan seperti bedah buku, sesi mendongeng, diskusi literasi, hingga workshop menulis kreatif untuk menginspirasi dan melibatkan pemustaka.",
    },
    {
      icon: Users,
      title: "Membangun Komunitas Pembaca",
      description:
        "Lebih dari sekadar membaca, Titik Baca kami bertujuan membangun komunitas pembaca yang aktif. Ini adalah ruang di mana siswa dapat berbagi ide, merekomendasikan buku, dan berinteraksi dalam suasana yang mendukung pengembangan literasi bersama.",
    },
  ];

  const featuredActivities = [
    {
      title: "Klub Buku",
      description: "Bergabunglah dengan klub kami untuk diskusi buku bulanan.",
      icon: BookOpen,
      href: "#", // Placeholder
    },
    {
      title: "Sesi Mendongeng",
      description: "Dengarkan cerita-cerita menarik setiap minggu.",
      icon: Speaker,
      href: "#", // Placeholder
    },
    {
      title: "Workshop Menulis",
      description: "Asah kemampuan menulismu dengan panduan para ahli.",
      icon: BookMarked,
      href: "#", // Placeholder
    },
  ];

  const relatedLinks = [
    // --- IMPORTANT: Replace '/images/logo-*.png' with your actual image paths ---
    { name: "PSB Sekolah", logo: "/images/logo-psb-sekolah.png", href: "#" },
    {
      name: "Portal Garuda",
      logo: "/images/portal-garuda.png",
      href: "https://garuda.kemdikbud.go.id/publisher/view/2960",
    },
    {
      name: "Bintang Pusnas",
      logo: "/images/bintang-pusnas.png",
      href: "https://bintangpusnas.perpusnas.go.id/konten/",
    },
    {
      name: "Khasara Perpusnas",
      logo: "/images/khasara-pusnas.jpeg",
      href: "https://khastara.perpusnas.go.id/",
    },
    { name: "SIBI",
      logo: "/images/sibi.jpeg",
      href: "https://buku.kemdikbud.go.id/" },
    {
      name: "SMAN 6 Berau",
      logo: "/images/youtube.jpeg",
      href: "#",
    },
    {
      name: "sman6berauofficial",
      logo: "/images/sman.jpeg",
      href: "#",
    },
    // Adding more links for better scrolling effect if needed
    { name: "kemenkeu", logo: "/images/kemenkeu.png", href: "#" },
    { name: "Bank Indonesia", logo: "/images/bi.png", href: "#" },
    { name: "Otoritas Jasa Keuangan", logo: "/images/ojk.png", href: "#" },
    { name: "Bapennas", logo: "/images/bapennas.png", href: "#" },
    { name: "BPS", logo: "/images/bps.jpeg", href: "#" },
  ];

  // Benefits for the video section
  const videoBenefits = [
    "Melihat suasana nyaman Titik Baca kami",
    "Mengenal berbagai aktivitas literasi",
    "Mengetahui cara bergabung dalam komunitas pembaca",
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-28 pb-12">
      {/* Top Banner Carousel */}
      <div className="relative w-full h-[300px] overflow-hidden">
        {carouselImages.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            fill
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0} // Prioritize first image for LCP
          />
        ))}
        {/* Slide indicators (dots) - opsional */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white" : "bg-gray-400"
              }`}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Titik Baca Header */}
      <div className="bg-white py-4 mb-8 relative z-10">
        <div className="max-w-screen-1xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-5xl font-extrabold text-blue-800 relative pb-2">
            TITIK BACA
            <span className="absolute left-0 bottom-0 w-24 h-1 bg-blue-800 rounded-full"></span>
          </h1>
        </div>
      </div>

      {/* Main Content Area - Grid Layout */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Titik Baca Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Introduction to Titik Baca */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Jelajahi Dunia Kata di Titik Baca Kami
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Selamat datang di **Titik Baca** SMAN 6 Berau, sebuah inisiatif untuk menciptakan ruang-ruang yang nyaman dan menarik di mana setiap individu dapat menikmati keasyikan membaca. Kami percaya bahwa lingkungan yang tepat dapat membangkitkan dan memperkuat minat literasi.
            </p>
          </div>

          {/* Video Section */}
          <div className="bg-white rounded-xl shadow-lg pb-4">
            <div className="relative w-full aspect-video bg-gray-800 rounded-t-xl overflow-hidden mb-6">
              {/* Replace with your actual video embed for Titik Baca */}
              {/* For YouTube, use an iframe: */}
              {/* <iframe
                src="YOUR_YOUTUBE_EMBED_URL_FOR_TITIK_BACA?autoplay=0&controls=1&showinfo=0&rel=0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe> */}
              {/* Or if you want a play button overlay, keep the image and button */}
              <Image
                src="https://images.pexels.com/photos/4090126/pexels-photo-4090126.jpeg?auto=compress&cs=tinysrgb&w=800" // Thumbnail for the video, could be a cozy reading spot
                alt="Video Titik Baca"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <button className="bg-blue-600 hover:bg-blue-700 rounded-full p-4 transition-colors">
                  <svg
                    className="w-8 h-8 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-8 pt-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Video Eksplorasi Titik Baca
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Saksikan video ini untuk merasakan suasana dan melihat langsung berbagai fasilitas di Titik Baca kami.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Yang Akan Anda Pelajari:
              </h4>
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

          {/* Sections about Titik Baca */}
          {titikBacaSections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {section.title}
              </h3>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                  <section.icon className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          ))}

          {/* Featured Activities at Titik Baca */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Aktivitas Unggulan di Titik Baca
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredActivities.map((activity, index) => (
                <Link href={activity.href} key={index} className="bg-gray-50 rounded-lg p-5 border border-gray-200 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <activity.icon className="h-10 w-10 text-blue-600 mb-3" />
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {activity.title}
                  </h4>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Side Content (Adapted for Titik Baca) */}
        <div className="lg:col-span-1 space-y-8">
          {/* Latest News & Updates for Titik Baca */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Berita & Pembaruan Titik Baca
            </h3>
            <div className="relative w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden mb-4">
              <Image
                src="https://images.pexels.com/photos/3762804/pexels-photo-3762804.jpeg?auto=compress&cs=tinysrgb&w=800" // Image relevant to reading events
                alt="Berita Titik Baca"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-700 text-sm">
              Dapatkan informasi terkini tentang koleksi baru, jadwal acara, dan inisiatif menarik di Titik Baca kami.
            </p>
            <Link
              href="/informasi/titik-baca-news" // Placeholder, update as needed
              className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Baca Selengkapnya &rarr;
            </Link>
          </div>

          {/* Upcoming Events at Titik Baca */}
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-32">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Jadwal Acara di Titik Baca
            </h3>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-600 text-white p-3 rounded-lg text-center font-bold flex-shrink-0">
                <span className="block text-2xl leading-none">05</span>
                <span className="block text-xs uppercase">JUL</span>
                <span className="block text-xs">2025</span>
              </div>
              <div>
                <p className="text-gray-800 font-semibold">
                  Sesi Cerita: Petualangan di Negeri Dongeng
                </p>
                <p className="text-sm text-gray-600">Pukul 10:00 - 11:00 WIB</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-600 text-white p-3 rounded-lg text-center font-bold flex-shrink-0">
                <span className="block text-2xl leading-none">12</span>
                <span className="block text-xs uppercase">JUL</span>
                <span className="block text-xs">2025</span>
              </div>
              <div>
                <p className="text-gray-800 font-semibold">
                  Diskusi Buku: 'Senja di Pelupuk Mata'
                </p>
                <p className="text-sm text-gray-600">Pukul 15:00 - 16:30 WIB</p>
              </div>
            </div>
            <Link
              href="/titik-baca/events" // Placeholder, update as needed
              className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Lihat Semua Acara &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Horizontal Rule */}
      <hr className="my-12 border-gray-300" />

      {/* LINK TERKAIT Section (Autoscroll) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 relative pb-2">
          LINK TERKAIT
          <span className="absolute left-0 bottom-0 w-16 h-1 bg-blue-600 rounded-full"></span>
        </h2>
        {/* Container for the scrolling links */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll-left">
            {/* Duplicate the links to create a seamless loop for scrolling */}
            {relatedLinks.concat(relatedLinks).map((link, index) => (
              <Link
                href={link.href}
                key={`${link.name}-${index}`} // Using a combination for a more unique key
                className="flex flex-shrink-0 flex-col items-center p-3 rounded-lg hover:bg-gray-100 transition-colors mx-4" // Added mx-4 for spacing
                style={{ width: '120px' }} // Fixed width for consistent spacing and scrolling
              >
                <div className="relative w-16 h-16 mb-2">
                  <Image
                    src={link.logo}
                    alt={link.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm text-center text-gray-700 font-medium whitespace-nowrap">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Styles for the autoscroll animation */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%); /* Scrolls half of the duplicated content */
          }
        }

        .animate-scroll-left {
          animation: scrollLeft 30s linear infinite; /* Adjust duration as needed */
        }

        .animate-scroll-left:hover {
          animation-play-state: paused; /* Pause on hover */
        }
      `}</style>
    </div>
  );
}