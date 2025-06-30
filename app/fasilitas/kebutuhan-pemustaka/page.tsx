'use client'; // Required for client components in Next.js

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  BookOpen, // Icon for accessing knowledge/reading
  HelpCircle, // Icon for support/guidance
  Laptop, // Icon for digital resources/technology
  Users, // Icon for community/collaboration
  Library, // Icon for general library resources
} from 'lucide-react'; // Icons relevant to user needs and support

export default function KebutuhanPemustakaPage() { // Renamed component
  // Data for carousel images (can be re-themed for patron needs)
  const carouselImages = [
    {
      src: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Siswa menggunakan komputer di perpustakaan",
    },
    {
      src: "https://images.pexels.com/photos/3747474/pexels-photo-3747474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Diskusi kelompok di ruang belajar perpustakaan",
    },
    {
      src: "https://images.pexels.com/photos/4090126/pexels-photo-4090126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Orang membaca buku dengan nyaman di perpustakaan",
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

  // Content for Kebutuhan Pemustaka sections
  const kebutuhanPemustakaSections = [
    {
      icon: BookOpen,
      title: "Akses Sumber Belajar Lengkap",
      description:
        "Kami menyediakan beragam koleksi fisik dan digital yang relevan dengan kurikulum serta minat baca siswa dan guru. Mulai dari buku pelajaran, fiksi, non-fiksi, hingga akses ke jurnal dan e-book, semua tersedia untuk mendukung kebutuhan belajar Anda.",
    },
    {
      icon: Laptop,
      title: "Fasilitas Teknologi Modern",
      description:
        "Perpustakaan dilengkapi dengan komputer, akses internet cepat, dan perangkat multimedia lainnya untuk mendukung riset, tugas, dan proyek kreatif. Kami memastikan Anda memiliki alat yang dibutuhkan untuk belajar di era digital.",
    },
    {
      icon: HelpCircle,
      title: "Bimbingan dan Layanan Konsultasi",
      description:
        "Staf perpustakaan kami siap membantu Anda menemukan informasi, menavigasi database, dan mengembangkan keterampilan literasi informasi. Jangan ragu untuk bertanya jika Anda membutuhkan panduan dalam penelitian atau penelusuran sumber.",
    },
    {
      icon: Users,
      title: "Ruang Kolaborasi dan Diskusi",
      description:
        "Kami menyediakan area khusus yang nyaman untuk belajar kelompok, berdiskusi, dan berkolaborasi. Ruang ini dirancang untuk mendorong interaksi dan pertukaran ide di antara para pemustaka, mendukung pembelajaran yang aktif.",
    },
    {
      icon: Library,
      title: "Lingkungan Belajar yang Kondusif",
      description:
        "Perpustakaan kami adalah tempat yang tenang dan inspiratif, jauh dari hiruk pikuk. Kami menciptakan suasana yang mendukung konsentrasi, refleksi, dan pengembangan diri, sehingga Anda bisa belajar dengan maksimal.",
    },
  ];

  const featuredServices = [
    {
      title: "Peminjaman Buku",
      description: "Sistem peminjaman dan pengembalian yang mudah.",
      icon: BookOpen,
      href: "#", // Placeholder
    },
    {
      title: "Akses E-Jurnal",
      description: "Ribuan jurnal ilmiah dari berbagai disiplin ilmu.",
      icon: Laptop,
      href: "#", // Placeholder
    },
    {
      title: "Bimbingan Riset",
      description: "Panduan ahli untuk kebutuhan penelitian Anda.",
      icon: HelpCircle,
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
      name: "Perpustakaan Madani",
      logo: "/images/youtube.jpeg",
      href: "#",
    },
    {
      name: "Madaniofficial",
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
    "Menjelaskan berbagai layanan perpustakaan",
    "Menunjukkan bagaimana fasilitas kami mendukung Anda",
    "Memberikan tips untuk memaksimalkan kunjungan Anda",
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

      {/* Kebutuhan Pemustaka Header */}
      <div className="bg-white py-4 mb-8 relative z-10">
        <div className="max-w-screen-1xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-5xl font-extrabold text-blue-800 relative pb-2">
            KEBUTUHAN PEMUSTAKA
            <span className="absolute left-0 bottom-0 w-24 h-1 bg-blue-800 rounded-full"></span>
          </h1>
        </div>
      </div>

      {/* Main Content Area - Grid Layout */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Kebutuhan Pemustaka Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Introduction to Kebutuhan Pemustaka */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perpustakaan Kami, Dirancang untuk Anda
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Di Perpustakaan Madani, kami berkomitmen untuk memahami dan memenuhi **kebutuhan unik setiap pemustaka**. Baik Anda sedang mencari sumber untuk tugas, tempat tenang untuk belajar, atau kesempatan untuk berkolaborasi, kami hadir untuk mendukung perjalanan belajar dan pengembangan diri Anda.
            </p>
          </div>

          {/* Video Section */}
          <div className="bg-white rounded-xl shadow-lg pb-4">
            <div className="relative w-full aspect-video bg-gray-800 rounded-t-xl overflow-hidden mb-6">
              {/* Replace with your actual video embed for Kebutuhan Pemustaka */}
              {/* For YouTube, use an iframe: */}
              {/* <iframe
                src="YOUR_YOUTUBE_EMBED_URL_FOR_KEBUTUHAN_PEMUSTAKA?autoplay=0&controls=1&showinfo=0&rel=0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe> */}
              {/* Or if you want a play button overlay, keep the image and button */}
              <Image
                src="https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=800" // Thumbnail for the video, could be about library services
                alt="Video Kebutuhan Pemustaka"
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
                Video: Memenuhi Kebutuhan Belajar Anda
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Tonton video ini untuk melihat bagaimana perpustakaan kami dirancang untuk mendukung setiap aspek kebutuhan akademik dan personal Anda.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Dalam video ini, Anda akan:
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

          {/* Sections about Kebutuhan Pemustaka */}
          {kebutuhanPemustakaSections.map((section, index) => (
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

          {/* Featured Services for Patrons */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Layanan Unggulan untuk Pemustaka
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredServices.map((service, index) => (
                <Link href={service.href} key={index} className="bg-gray-50 rounded-lg p-5 border border-gray-200 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <service.icon className="h-10 w-10 text-blue-600 mb-3" />
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Side Content (Adapted for Kebutuhan Pemustaka) */}
        <div className="lg:col-span-1 space-y-8">
          {/* Feedback & Suggestions */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Punya Masukan atau Saran?
            </h3>
            <div className="relative w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden mb-4">
              <Image
                src="https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=800" // Image for feedback/suggestion box
                alt="Formulir Saran Perpustakaan"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-700 text-sm">
              Kami selalu berusaha meningkatkan layanan. Beri tahu kami bagaimana kami bisa melayani Anda lebih baik!
            </p>
            <Link
              href="/kontak/saran" // Placeholder, update as needed
              className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Kirim Saran &rarr;
            </Link>
          </div>

          {/* FAQ / Frequently Asked Questions */}
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-32">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Bagaimana cara menjadi anggota?
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Berapa lama saya bisa meminjam buku?
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Apakah ada akses Wi-Fi di perpustakaan?
              </li>
              {/* Add more FAQs as needed */}
            </ul>
            <Link
              href="/informasi/faq" // Placeholder, update as needed
              className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Lihat Semua FAQ &rarr;
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