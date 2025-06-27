'use client'; // Required for client components in Next.js

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Smile, // Icon for satisfaction/happiness
  Star, // Icon for quality/excellence
  Heart, // Icon for welcoming/caring environment
  Zap, // Icon for efficiency/innovation
  Lightbulb, // Icon for insights/suggestions
} from 'lucide-react'; // Icons relevant to user satisfaction and experience

export default function KepuasanPermadaniPage() { // Renamed component
  // Data for carousel images (re-themed for user satisfaction)
  const carouselImages = [
    {
      src: "https://images.pexels.com/photos/3747474/pexels-photo-3747474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Siswa tersenyum sambil belajar di perpustakaan",
    },
    {
      src: "https://images.pexels.com/photos/4050306/pexels-photo-4050306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Petugas perpustakaan membantu pemustaka dengan ramah",
    },
    {
      src: "https://images.pexels.com/photos/4145353/pexels-photo-4145353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Suasana nyaman di area baca perpustakaan",
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

  // Content for Kepuasan Permadani sections
  const kepuasanPermadaniSections = [
    {
      icon: Smile,
      title: "Komitmen Kami pada Kepuasan Anda",
      description:
        "Di Perpustakaan SMAN 6 Berau, **kepuasan permadani** Anda adalah prioritas utama kami. Kami berdedikasi untuk tidak hanya memenuhi kebutuhan dasar Anda, tetapi juga menciptakan pengalaman perpustakaan yang menyenangkan, nyaman, dan berkesan positif.",
    },
    {
      icon: Star,
      title: "Kualitas Layanan Prima",
      description:
        "Kami terus berupaya meningkatkan kualitas layanan kami, mulai dari ketersediaan koleksi yang relevan, kecepatan akses informasi, hingga keramahan dan profesionalisme staf. Tujuan kami adalah memberikan pengalaman yang melebihi harapan Anda.",
    },
    {
      icon: Heart,
      title: "Lingkungan yang Ramah dan Inklusif",
      description:
        "Perpustakaan kami dirancang sebagai ruang yang hangat dan menyambut bagi semua. Kami memastikan setiap sudut menawarkan kenyamanan dan mendukung berbagai gaya belajar, sehingga Anda merasa betah dan dapat berkonsentrasi penuh.",
    },
    {
      icon: Zap,
      title: "Inovasi untuk Kemudahan Akses",
      description:
        "Kami berinvestasi dalam teknologi dan sistem terbaru untuk mempermudah akses Anda ke sumber daya dan layanan. Dari katalog online yang intuitif hingga platform digital yang responsif, kami berupaya membuat setiap interaksi Anda lancar dan efisien.",
    },
    {
      icon: Lightbulb,
      title: "Mendengarkan Masukan Anda",
      description:
        "Pendapat dan saran Anda sangat berharga bagi kami. Kami aktif membuka saluran komunikasi untuk mendengar pengalaman Anda, mengidentifikasi area peningkatan, dan terus berinovasi demi kepuasan permadani seluruh pemustaka.",
    },
  ];

  const featuredInitiatives = [
    {
      title: "Survei Kepuasan",
      description: "Berikan masukan Anda melalui survei online berkala kami.",
      icon: Smile,
      href: "#", // Placeholder
    },
    {
      title: "Kotak Saran Digital",
      description: "Sampaikan ide dan keluhan Anda kapan saja.",
      icon: Lightbulb,
      href: "#", // Placeholder
    },
    {
      title: "Program Duta Pemustaka",
      description: "Jadilah bagian dari tim yang meningkatkan pengalaman perpustakaan.",
      icon: Smile,
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
    "Memahami filosofi layanan kami",
    "Melihat upaya kami dalam meningkatkan pengalaman Anda",
    "Mengetahui cara berpartisipasi dalam peningkatan layanan",
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

      {/* Kepuasan Permadani Header */}
      <div className="bg-white py-4 mb-8 relative z-10">
        <div className="max-w-screen-1xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-5xl font-extrabold text-blue-800 relative pb-2">
            KEPUASAN PERMADANI
            <span className="absolute left-0 bottom-0 w-24 h-1 bg-blue-800 rounded-full"></span>
          </h1>
        </div>
      </div>

      {/* Main Content Area - Grid Layout */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Kepuasan Permadani Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Introduction to Kepuasan Permadani */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pengalaman Perpustakaan yang Melampaui Harapan
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Konsep **Kepuasan Permadani** bagi kami di Perpustakaan SMAN 6 Berau berarti memastikan setiap interaksi Anda dengan perpustakaan meninggalkan kesan yang mendalam dan positif. Ini tentang menciptakan lingkungan dan layanan yang tidak hanya memenuhi kebutuhan, tetapi juga memberikan kenyamanan dan kebahagiaan.
            </p>
          </div>

          {/* Video Section */}
          <div className="bg-white rounded-xl shadow-lg pb-4">
            <div className="relative w-full aspect-video bg-gray-800 rounded-t-xl overflow-hidden mb-6">
              {/* Replace with your actual video embed for Kepuasan Permadani */}
              {/* For YouTube, use an iframe: */}
              {/* <iframe
                src="YOUR_YOUTUBE_EMBED_URL_FOR_KEPUASAN_PERMADANI?autoplay=0&controls=1&showinfo=0&rel=0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe> */}
              {/* Or if you want a play button overlay, keep the image and button */}
              <Image
                src="https://images.pexels.com/photos/4050306/pexels-photo-4050306.jpeg?auto=compress&cs=tinysrgb&w=800" // Thumbnail for the video, e.g., happy users, good service
                alt="Video Kepuasan Permadani"
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
                Video: Mengukur Kebahagiaan Pemustaka
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Saksikan video ini untuk melihat bagaimana kami berupaya menciptakan pengalaman yang memuaskan dan berkesan bagi setiap pemustaka di perpustakaan kami.
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

          {/* Sections about Kepuasan Permadani */}
          {kepuasanPermadaniSections.map((section, index) => (
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

          {/* Featured Initiatives for Patron Satisfaction */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Inisiatif untuk Kepuasan Permadani Anda
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredInitiatives.map((initiative, index) => (
                <Link href={initiative.href} key={index} className="bg-gray-50 rounded-lg p-5 border border-gray-200 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <initiative.icon className="h-10 w-10 text-blue-600 mb-3" />
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {initiative.title}
                  </h4>
                  <p className="text-sm text-gray-600">{initiative.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Side Content (Adapted for Kepuasan Permadani) */}
        <div className="lg:col-span-1 space-y-8">
          {/* Real-time Feedback / Testimonials */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Suara Pemustaka Kami
            </h3>
            <div className="relative w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden mb-4">
              <Image
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800" // Image for testimonials/feedback
                alt="Pemustaka Berbagi Pengalaman"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-700 text-sm italic">
              "Perpustakaan ini selalu menjadi tempat favorit saya untuk belajar dan menemukan buku baru. Suasananya sangat mendukung!" - Siswa Kelas XI
            </p>
            <Link
              href="/galeri/testimoni" // Placeholder, update as needed
              className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Baca Testimoni Lain &rarr;
            </Link>
          </div>

          {/* Contact for Personal Assistance */}
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-32">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Butuh Bantuan Personal?
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              Tim staf kami siap membantu Anda dengan pertanyaan atau masalah apa pun. Jangan ragu untuk menghubungi kami secara langsung.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Jam Layanan
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Kontak Langsung Staf
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Janji Temu Bimbingan
              </li>
            </ul>
            <Link
              href="/kontak" // Placeholder, update as needed
              className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Hubungi Kami &rarr;
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