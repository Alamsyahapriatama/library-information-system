"use client"; // Required for client components in Next.js

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react"; // Icons for carousel navigation and new content

export default function KerjasamaPage() { // Component name matches file structure
  // Top Full-width Carousel Images for the main banner (updated for Kerja Sama theme)
  const topCarouselSlides = [
    {
      src: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Tim kerja sama berdiskusi",
    },
    {
      src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Jaringan kemitraan",
    },
    {
      src: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Kolaborasi dan dukungan",
    },
  ];

  const [currentTopSlide, setCurrentTopSlide] = useState(0);

  // Auto-slide effect for the top carousel
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentTopSlide((prevSlide) => (prevSlide + 1) % topCarouselSlides.length);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, [topCarouselSlides.length]);

  // Navigation functions for the top carousel
  const goToTopSlide = (slideIndex: number) => {
    setCurrentTopSlide(slideIndex);
  };
  const nextTopSlide = () => {
    setCurrentTopSlide((prevSlide) => (prevSlide + 1) % topCarouselSlides.length);
  };
  const prevTopSlide = () => {
    setCurrentTopSlide((prevSlide) => (prevSlide - 1 + topCarouselSlides.length) % topCarouselSlides.length);
  };

  // Agenda Data (retained) - using current time for agenda date as example
  const agendaItem = {
    date: {
      day: new Date().getDate().toString(),
      month: new Date().toLocaleString('en-US', { month: 'short' }).toUpperCase(),
      year: new Date().getFullYear().toString()
    },
    title: "Rapat Koordinasi Kemitraan",
    location: "Ruang Rapat SDIT Madani",
    link: "#",
  };

  // Related Links Data (retained)
  const relatedLinks = [
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
      name: "Youtube Perpustakaan Madani",
      logo: "/images/youtube.jpeg",
      href: "#",
    },
    {
      name: "Madaniofficial",
      logo: "/images/sman.jpeg",
      href: "#",
    },
    { name: "Kemenkeu", logo: "/images/kemenkeu.png", href: "#" },
    { name: "Bank Indonesia", logo: "/images/bi.png", href: "#" },
    { name: "Otoritas Jasa Keuangan", logo: "/images/ojk.png", href: "#" },
    { name: "Bapennas", logo: "/images/bapennas.png", href: "#" },
    { name: "BPS", logo: "/images/bps.jpeg", href: "#" },
  ];

  // Data for "BERITA TERPOPULER" / Artikel (retained, but adjusted titles for relevance)
  const popularArticles = [
    {
      imageSrc:
        "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Manfaat Kemitraan dalam Dunia Pendidikan",
      date: "14 Februari 2024",
      summary:
        "Menjelajahi bagaimana kemitraan strategis dapat meningkatkan kualitas pendidikan dan fasilitas sekolah.",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Studi Kasus Kolaborasi Perpustakaan Komunitas",
      date: "25 Januari 2024",
      summary:
        "Contoh sukses kerja sama perpustakaan sekolah dengan komunitas lokal dalam menyelenggarakan program literasi.",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/5926392/pexels-photo-5926392.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Peran Swasta dalam Mendukung Pendidikan",
      date: "18 April 2024",
      summary:
        "Pembahasan kontribusi sektor swasta melalui program CSR dalam mendukung fasilitas dan kegiatan belajar mengajar.",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/6803276/pexels-photo-6803276.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Membangun Jaringan untuk Akses Informasi Lebih Luas",
      date: "20 Mei 2024",
      summary:
        "Pentingnya membangun jaringan dan kolaborasi antar institusi untuk memperluas akses siswa terhadap sumber informasi.",
    },
  ];

  // Data for "KERJA SAMA" section (main content now)
  const kerjasamaPoints = [
    {
      title: "Kemitraan Strategis",
      description: "Membangun hubungan jangka panjang dengan berbagai institusi pendidikan, organisasi masyarakat, dan perusahaan untuk pengembangan perpustakaan.",
      icon: CheckCircle,
    },
    {
      title: "Program Kolaborasi",
      description: "Mengadakan workshop, seminar, dan kegiatan literasi bersama mitra untuk meningkatkan minat baca dan kualitas pendidikan.",
      icon: CheckCircle,
    },
    {
      title: "Dukungan Sumber Daya",
      description: "Menerima hibah buku, teknologi, dan dukungan finansial dari pihak ketiga untuk memperkaya koleksi dan fasilitas perpustakaan.",
      icon: CheckCircle,
    },
    {
      title: "Jaringan Perpustakaan",
      description: "Terlibat aktif dalam jaringan perpustakaan daerah maupun nasional untuk berbagi informasi, program, dan praktik terbaik.",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Full-width Top Carousel (as seen in the image) */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        {topCarouselSlides.map((slide, index: number) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentTopSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
             <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>
        ))}

        {/* Carousel Navigation Buttons (Top Carousel) */}
        <button
          onClick={prevTopSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextTopSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Carousel Dots/Indicators (Top Carousel) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {topCarouselSlides.map((_, index: number) => (
            <button
              key={index}
              onClick={() => goToTopSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTopSlide ? "bg-white" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* "KERJA SAMA" Main Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-12 mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 relative pb-2 inline-block">
          KERJA SAMA
          <span className="absolute left-0 bottom-0 w-24 h-1 bg-blue-600 rounded-full"></span>
        </h1>
      </div>

      {/* Main Content Area - Grid Layout for Kerja Sama */}
      <div className="max-w-screen-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
        {/* Left Column (Kerja Sama Content) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Video Section within Kerja Sama */}
          <div className="bg-white rounded-xl shadow-lg pb-4">
            <div className="relative w-full aspect-video bg-gray-800 rounded-t-xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=800" // Placeholder for video thumbnail
                alt="Video Profil Kerja Sama"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
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
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Video Profil Kerja Sama Perpustakaan</h3>
                <p className="text-gray-700 text-sm">
                    Saksikan bagaimana perpustakaan kami menjalin kemitraan dan kolaborasi dengan berbagai pihak untuk mewujudkan visi dan misi pendidikan.
                </p>
            </div>
          </div>

          {/* Main "KERJA SAMA" Section Content */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-lg text-gray-700 mb-6">
                Perpustakaan Madani aktif menjalin kerja sama dengan berbagai pihak untuk meningkatkan kualitas layanan dan kontribusi bagi pendidikan. Kami percaya, sinergi yang kuat akan menciptakan ekosistem belajar yang lebih kaya dan inovatif.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {kerjasamaPoints.map((point, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5 border border-gray-200 flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-full flex-shrink-0 mt-1">
                        <point.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{point.title}</h3>
                        <p className="text-sm text-gray-600">{point.description}</p>
                    </div>
                </div>
                ))}
            </div>
            <div className="text-center mt-8">
                <p className="text-lg text-gray-700">
                    Kami selalu terbuka untuk menjalin kemitraan baru yang dapat memberikan nilai tambah bagi komunitas sekolah dan masyarakat.
                </p>
                <Link href="/informasi/kontak" className="inline-flex items-center mt-4 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Hubungi Kami untuk Kemitraan
                </Link>
            </div>
          </div>

          {/* BERITA TERPOPULER Section (retained) */}
          <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2 mb-4 mt-8">
            BERITA TERPOPULER
          </h2>
          {popularArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row p-4 items-start"
            >
              <div className="relative w-full md:w-40 h-32 md:h-28 flex-shrink-0 mb-4 md:mb-0 md:mr-4 rounded-md overflow-hidden">
                <Image
                  src={article.imageSrc}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-tight">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-500 mb-2">{article.date}</p>
                <p className="text-sm text-gray-700 line-clamp-3">
                  {article.summary}
                </p>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 block"
                >
                  Baca Selengkapnya &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Sidebar (retained) */}
        <div className="lg:col-span-1 space-y-6">
          {/* INFOGRAFIS Block */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
              INFOGRAFIS
            </h3>
            <div className="space-y-4">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/images/gambar-olahraga-ituibadah.jpg"
                  alt="Infografis Digital"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/6803276/pexels-photo-6803276.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Infografis Pendidikan"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* OLAHRAGA ITU IBADAH Poster Block */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="relative w-full aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/gambar-olahraga-ituibadah.jpg"
                alt="Olahraga Itu Ibadah Poster"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Quick Links (retained) */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">LAYANAN</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Peminjaman
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Pengembalian
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Kunjungan
                </Link>
              </li>
            </ul>
            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
              SUMBER DAYA
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Koleksi Digital
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Jurnal & Database
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Ebook
                </Link>
              </li>
            </ul>
            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
              MENU LAIN
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="#" className="hover:text-blue-600">
                  KEPEGAWAIAN
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  STRUKTUR
                </Link>
              </li>
            </ul>
          </div>

          {/* AGENDA Section (retained) */}
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-32">
            <h3 className="text-xl font-bold text-gray-900 mb-4">AGENDA</h3>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-600 text-white p-3 rounded-lg text-center font-bold flex-shrink-0">
                <span className="block text-2xl leading-none">
                  {agendaItem.date.day}
                </span>
                <span className="block text-xs uppercase">
                  {agendaItem.date.month}
                </span>
                <span className="block text-xs">{agendaItem.date.year}</span>
              </div>
              <div>
                <p className="text-gray-800 font-semibold">
                  {agendaItem.title}
                </p>
                <p className="text-sm text-gray-600">{agendaItem.location}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-600 text-white p-3 rounded-lg text-center font-bold flex-shrink-0">
                <span className="block text-2xl leading-none">15</span>
                <span className="block text-xs uppercase">JULI</span>
                <span className="block text-xs">2025</span>
              </div>
              <div>
                <p className="text-gray-800 font-semibold">
                  Peluncuran Koleksi Ebook Terbaru
                </p>
                <p className="text-sm text-gray-600">
                  Online via Website Perpustakaan
                </p>
              </div>
            </div>
            <Link
              href="/informasi/pengumuman"
              className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Lihat Semua Agenda &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* LINK TERKAIT Section (Autoscroll) - retained and outside the grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 relative pb-2">
          LINK TERKAIT
          <span className="absolute left-0 bottom-0 w-16 h-1 bg-blue-600 rounded-full"></span>
        </h2>
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll-left">
            {relatedLinks.concat(relatedLinks).map((link, index) => (
              <Link
                href={link.href}
                key={`${link.name}-${index}`}
                className="flex flex-shrink-0 flex-col items-center p-3 rounded-lg hover:bg-gray-100 transition-colors mx-4"
                style={{ width: '120px' }}
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
      {/* CSS for auto-scrolling animation */}
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