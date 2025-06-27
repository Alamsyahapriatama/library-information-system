'use client'; // Required for client components in Next.js

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Link as LinkIcon, // Renamed to avoid conflict with Next.js Link
  Share2,
  Globe,
  Database,
  Users,
  Search,
} from 'lucide-react'; // Icons relevant to networking and resources

export default function JejaringPerpustakaanPage() { // Renamed component
  // Data for carousel images (reused from ProfilPerpustakaanPage example)
  const carouselImages = [
    {
      src: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Siswa di perpustakaan belajar",
    },
    {
      src: "https://images.pexels.com/photos/110646/pexels-photo-110646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Rak buku penuh di perpustakaan",
    },
    {
      src: "https://images.pexels.com/photos/159781/book-love-books-reading-159781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Siswa membaca buku bersama",
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

  // Content for Jejaring Perpustakaan sections
  const networkSections = [
    {
      icon: LinkIcon,
      title: "Apa Itu Jejaring Perpustakaan?",
      description:
        "Jejaring perpustakaan adalah sistem kolaborasi antar perpustakaan untuk berbagi sumber daya, informasi, dan layanan. Tujuannya adalah memperluas akses pemustaka terhadap koleksi dan fasilitas yang lebih beragam, melampaui batas fisik satu perpustakaan saja.",
    },
    {
      icon: Share2,
      title: "Manfaat Jejaring Perpustakaan",
      description:
        "Melalui jejaring ini, pemustaka dapat mengakses koleksi dari perpustakaan lain, memanfaatkan basis data bersama, serta berpartisipasi dalam program literasi antar perpustakaan. Ini meningkatkan efisiensi, mengurangi duplikasi koleksi, dan memperkaya pengalaman belajar.",
    },
    {
      icon: Globe,
      title: "Cakupan Jejaring Kami",
      description:
        "Perpustakaan SMAN 6 Berau aktif terhubung dengan berbagai perpustakaan sekolah, perpustakaan daerah, dan lembaga pendidikan lainnya. Kami berupaya terus memperluas jejaring untuk memberikan akses terbaik bagi seluruh pemustaka.",
    },
    {
      icon: Database,
      title: "Sumber Daya Bersama",
      description:
        "Bagian dari jejaring ini memungkinkan kami untuk berbagi dan mengakses sumber daya digital seperti e-jurnal, e-book, dan basis data ilmiah yang relevan. Hal ini sangat mendukung riset dan pembelajaran di era digital.",
    },
    {
      icon: Users,
      title: "Kolaborasi dan Program",
      description:
        "Jejaring ini juga memfasilitasi kolaborasi dalam berbagai program literasi, lokakarya, dan pertukaran informasi antar pustakawan. Ini mendukung pengembangan profesional dan inovasi layanan perpustakaan.",
    },
  ];

  const featuredLinks = [
    {
      title: "Katalog Bersama",
      description: "Cari koleksi dari berbagai perpustakaan dalam satu portal.",
      icon: Search,
      href: "#", // Placeholder, replace with actual link
    },
    {
      title: "Akses Jurnal Digital",
      description: "Gerbang ke ribuan jurnal ilmiah dan publikasi.",
      icon: Database,
      href: "#", // Placeholder, replace with actual link
    },
    {
      title: "Direktori Anggota Jejaring",
      description: "Daftar perpustakaan yang tergabung dalam jejaring kami.",
      icon: Users,
      href: "#", // Placeholder, replace with actual link
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
    "Memahami konsep jejaring perpustakaan",
    "Melihat manfaat langsung bagi pemustaka",
    "Mengenal lebih dekat mitra jejaring kami",
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

      {/* Jejaring Perpustakaan Header */}
      <div className="bg-white py-4 mb-8 relative z-10">
        <div className="max-w-screen-1xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-5xl font-extrabold text-blue-800 relative pb-2">
            JEJARING PERPUSTAKAAN
            <span className="absolute left-0 bottom-0 w-24 h-1 bg-blue-800 rounded-full"></span>
          </h1>
        </div>
      </div>

      {/* Main Content Area - Grid Layout */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Jejaring Perpustakaan Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Introduction to Library Network */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Membangun Konektivitas, Memperluas Ilmu
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Perpustakaan SMAN 6 Berau percaya bahwa kekuatan informasi akan semakin besar saat dibagikan. Oleh karena itu, kami aktif membangun dan menjadi bagian dari **jejaring perpustakaan** yang luas, menghubungkan kami dengan sumber daya dan komunitas literasi di seluruh Indonesia.
            </p>
          </div>

          {/* Video Section - Integrated into the main content flow */}
          <div className="bg-white rounded-xl shadow-lg pb-4">
            <div className="relative w-full aspect-video bg-gray-800 rounded-t-xl overflow-hidden mb-6">
              {/* Replace with your video embed. For YouTube, use an iframe: */}
              {/* <iframe
                src="YOUR_YOUTUBE_EMBED_URL?autoplay=0&controls=1&showinfo=0&rel=0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe> */}
              {/* Or if you want a play button overlay, keep the image and button */}
              <Image
                src="https://images.pexels.com/photos/3747477/pexels-photo-3747477.jpeg?auto=compress&cs=tinysrgb&w=800" // Thumbnail for the video
                alt="Video Jejaring Perpustakaan"
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
                Video Penjelasan Jejaring Perpustakaan
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Saksikan video singkat ini untuk mendapatkan gambaran lebih jelas tentang bagaimana jejaring perpustakaan kami bekerja dan manfaatnya bagi Anda.
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

          {/* Sections about Library Network */}
          {networkSections.map((section, index) => (
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

          {/* Featured Links/Services of the Network */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Layanan Unggulan Jejaring
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredLinks.map((link, index) => (
                <Link href={link.href} key={index} className="bg-gray-50 rounded-lg p-5 border border-gray-200 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <link.icon className="h-10 w-10 text-blue-600 mb-3" />
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {link.title}
                  </h4>
                  <p className="text-sm text-gray-600">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Side Content (Adapted for Library Network) */}
        <div className="lg:col-span-1 space-y-8">
          {/* Related News & Announcements (Can be about network updates) */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Berita & Pembaruan Jejaring
            </h3>
            <div className="relative w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden mb-4">
              <Image
                src="https://images.pexels.com/photos/3747477/pexels-photo-3747477.jpeg?auto=compress&cs=tinysrgb&w=800" // Image related to library collaboration/network
                alt="Berita Jejaring Perpustakaan"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-700 text-sm">
              Ikuti perkembangan terbaru mengenai kolaborasi kami dengan perpustakaan lain dan program-program jejaring yang akan datang.
            </p>
            <Link
              href="/informasi/news-network" // Placeholder, update as needed
              className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Baca Selengkapnya &rarr;
            </Link>
          </div>

          {/* Partner Libraries Section (New) */}
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-32">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Mitra Jejaring Kami
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Perpustakaan Daerah Berau
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Perpustakaan Nasional RI
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Jaringan Perpustakaan Sekolah Kalimantan Timur
              </li>
              {/* Add more partners as needed */}
            </ul>
            <Link
              href="/jejaring/partners" // Placeholder, update as needed
              className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Lihat Semua Mitra &rarr;
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