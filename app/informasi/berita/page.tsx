"use client"; // Required for client components in Next.js

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icons for carousel navigation

export default function BeritaPage() { // Renamed component
  // Top Full-width Carousel Images and Content (for the main banner at the very top)
  const topCarouselSlides = [
    {
      src: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Gedung Perpustakaan",
    },
    {
      src: "https://images.pexels.com/photos/110646/pexels-photo-110646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Interior Perpustakaan",
    },
    {
      src: "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Siswa di perpustakaan",
    },
  ];

  const [currentTopSlide, setCurrentTopSlide] = useState(0);

  // Auto-slide effect for top carousel
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentTopSlide((prevSlide) => (prevSlide + 1) % topCarouselSlides.length);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(slideInterval);
  }, [topCarouselSlides.length]);

  // Navigation functions for top carousel
  const goToTopSlide = (slideIndex: number) => {
    setCurrentTopSlide(slideIndex);
  };
  const nextTopSlide = () => {
    setCurrentTopSlide((prevSlide) => (prevSlide + 1) % topCarouselSlides.length);
  };
  const prevTopSlide = () => {
    setCurrentTopSlide((prevSlide) => (prevSlide - 1 + topCarouselSlides.length) % topCarouselSlides.length);
  };

  // Video Content for "Informasi Pendidikan Video"
  const educationalVideo = {
    thumbnailSrc: "https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Masa Depan Pendidikan: Inovasi & Tantangan",
    description: "Video ini membahas berbagai inovasi dalam dunia pendidikan serta tantangan yang dihadapi dalam mempersiapkan generasi mendatang.",
    benefits: [
      "Teknologi dalam Pembelajaran",
      "Peran Guru di Era Digital",
      "Pendidikan Berbasis Proyek",
      "Keterampilan Abad ke-21",
    ],
    videoLink: "#", // Replace with actual video link if available
  };


  // Agenda Data (retained)
  const agendaItem = {
    date: { day: "24", month: "JUNI", year: "2025" }, // Adjusted to current date
    title: "Rapat Anggaran Tahunan",
    location: "Ruang Rapat SMAN 6 Berau",
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
      name: "Youtube SMAN 6 Berau",
      logo: "/images/youtube.jpeg",
      href: "#",
    },
    {
      name: "sman6berauofficial",
      logo: "/images/sman.jpeg",
      href: "#",
    },
    { name: "Kemenkeu", logo: "/images/kemenkeu.png", href: "#" },
    { name: "Bank Indonesia", logo: "/images/bi.png", href: "#" },
    { name: "Otoritas Jasa Keuangan", logo: "/images/ojk.png", href: "#" },
    { name: "Bapennas", logo: "/images/bapennas.png", href: "#" },
    { name: "BPS", logo: "/images/bps.jpeg", href: "#" },
  ];

  // Data for "BERITA TERPOPULER" / Artikel - NOW GENERAL EDUCATION NEWS
  const popularArticles = [
    {
      imageSrc:
        "https://images.pexels.com/photos/4145353/pexels-photo-4145353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Inovasi Pembelajaran Digital di Era Baru Pendidikan",
      date: "20 Juni 2025",
      summary:
        "Membedah tren terbaru dalam teknologi pendidikan dan bagaimana sekolah mengadopsi platform digital untuk meningkatkan pengalaman belajar siswa.",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Pentingnya Pendidikan Karakter dalam Kurikulum Modern",
      date: "10 Juni 2025",
      summary:
        "Diskusi mendalam mengenai peran krusial pendidikan karakter dalam membentuk generasi muda yang tidak hanya cerdas, tetapi juga berintegritas.",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/5905703/pexels-photo-5905703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Strategi Efektif untuk Meningkatkan Minat Baca Siswa",
      date: "01 Juni 2025",
      summary:
        "Berbagai pendekatan inovatif yang diterapkan oleh perpustakaan dan guru untuk menumbuhkan kecintaan membaca di kalangan siswa.",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Peran Orang Tua dalam Mendukung Belajar Jarak Jauh",
      date: "25 Mei 2025",
      summary:
        "Panduan bagi orang tua untuk secara aktif berpartisipasi dan memberikan dukungan optimal bagi anak-anak dalam skema pembelajaran jarak jauh.",
    },
  ];

  // Data placeholder for pie chart (NOT USED anymore in this version as requested)
  // const pieChartData = [
  //   { label: "Belanja Pegawai", value: 30, color: "#4299E1" },
  //   { label: "Belanja Barang/Jasa", value: 40, color: "#38A169" },
  //   { label: "Belanja Modal", value: 20, color: "#F6AD55" },
  //   { label: "Lain-lain", value: 10, color: "#ED8936" },
  // ];

  // Function to calculate SVG path for pie chart segments (NOT USED anymore)
  // const getPieChartPath = (value: number, total: number, startAngle: number) => {
  //   const angle = (value / total) * 360;
  //   const endAngle = startAngle + angle;
  //   const x1 = 50 + 40 * Math.cos(Math.PI * startAngle / 180);
  //   const y1 = 50 + 40 * Math.sin(Math.PI * startAngle / 180);
  //   const x2 = 50 + 40 * Math.cos(Math.PI * endAngle / 180);
  //   const y2 = 50 + 40 * Math.sin(Math.PI * endAngle / 180);
  //   const largeArcFlag = angle > 180 ? 1 : 0;
  //   return `M50,50 L${x1},${y1} A40,40 0 ${largeArcFlag} 1 ${x2},${y2} Z`;
  // };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Full-width Top Carousel (as seen in the image) */}
      {/* No pt-[72px] on main, as fixed header is assumed to be in layout.tsx */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        {topCarouselSlides.map((slide, index) => (
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

      {/* "TRANSPARANSI KEUANGAN" Main Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-12 mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 relative pb-2 inline-block">
          BERITA TERBARU
          <span className="absolute left-0 bottom-0 w-24 h-1 bg-blue-600 rounded-full"></span>
        </h1>
      </div>

      {/* Main Content Area - Grid Layout for Transparansi */}
      <div className="max-w-screen-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
        {/* Left Column (Transparansi Keuangan Content) */}
        <div className="lg:col-span-2 space-y-8">
          {/* New Video Content Section */}
          <div className="bg-white rounded-xl shadow-lg pb-4">
            <div className="relative w-full aspect-video bg-gray-800 rounded-t-xl overflow-hidden mb-6">
              <Image
                src={educationalVideo.thumbnailSrc}
                alt={educationalVideo.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  href={educationalVideo.videoLink}
                  target="_blank" // Opens in a new tab
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 rounded-full p-4 transition-colors"
                  aria-label={`Play video: ${educationalVideo.title}`}
                >
                  <svg
                    className="w-8 h-8 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="p-8 pt-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {educationalVideo.title}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {educationalVideo.description}
              </p>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Sorotan Utama:
              </h4>
              <ul className="space-y-2">
                {educationalVideo.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* BERITA TERPOPULER Section (now General Education News) */}
          <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2 mb-4">
            BERITA PENDIDIKAN TERBARU
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