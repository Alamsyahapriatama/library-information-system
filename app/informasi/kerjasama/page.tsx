"use client"; // Required for client components in Next.js

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icons for carousel navigation

export default function GerakanMembacaPage() {
  // Carousel Images and Content
  const carouselSlides = [
    {
      src: "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Kerjasama",
      mainTitle: "Kerjamsama",
      subTitle: "PERPUSTAKAAN SMAN 6 BERAU",
      bulletPoints: [
        "ANGKRINGAN BACA",
        "PAMERAN LITERASI",
        "GELAR STAND BACA MASYARAKAT",
      ],
      credit: "Blue Modern Company Profile Presentation by Choirul Amin",
    },
    {
      src: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Siswa belajar bersama di perpustakaan",
      mainTitle: "TINGKATKAN LITERASI",
      subTitle: "DENGAN KOLEKSI TERLENGKAP",
      bulletPoints: [
        "RIBUAN BUKU FISIK & DIGITAL",
        "AKSES JURNAL ILMIAH",
        "FASILITAS WI-FI GRATIS",
      ],
      credit: "Photo by cottonbro studio from Pexels",
    },
    {
      src: "https://images.pexels.com/photos/110646/pexels-photo-110646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Rak buku penuh di perpustakaan",
      mainTitle: "MARI BERKUNJUNG",
      subTitle: "DAN MANFAATKAN LAYANAN KAMI",
      bulletPoints: [
        "PEMINJAMAN & PENGEMBALIAN MUDAH",
        "RUANG DISKUSI NYAMAN",
        "BIMBINGAN LITERASI",
      ],
      credit: "Photo by Pixabay from Pexels",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect for carousel
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselSlides.length);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, [carouselSlides.length]);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + carouselSlides.length) % carouselSlides.length
    );
  };

  // Agenda Data
  const agendaItem = {
    date: { day: "11", month: "NOV", year: "2023" }, // Date from image
    title: "Pembekalan Website Perpustakaan",
    location: "Bersama Berau Tech Center",
    link: "#",
  };

  // Related Links Data (from previous examples, adjust paths as needed)
  const relatedLinks = [
    {
      name: "Facebook SMAN 6 Berau",
      logo: "/images/logo-facebook.png",
      href: "#",
    },
    { name: "IBerau", logo: "/images/logo-iberau.png", href: "#" },
    { name: "IKaltim", logo: "/images/logo-ikaltim.png", href: "#" },
    { name: "iPusnas", logo: "/images/logo-ipusnas.png", href: "#" },
    {
      name: "Perpustakaan Dikbudristek",
      logo: "/images/logo-dikbudristek.png",
      href: "#",
    }, // Example, use actual logo
    { name: "onesearch.id", logo: "/images/logo-onesearch.png", href: "#" }, // Example, use actual logo
    {
      name: "e-resources perpusnas",
      logo: "/images/logo-e_resources.png",
      href: "#",
    }, // Example, use actual logo
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Top Fixed Header (simplified, assuming it's part of this page) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md pt-4 pb-3 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Placeholder for left content (e.g., logo, menu icon) */}
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 relative">
            <Image
              src="/images/logo-perpustakaan.png"
              alt="Logo Perpustakaan"
              fill
              className="object-contain"
            />{" "}
            {/* Placeholder logo */}
          </div>
          {/* You can add more navigation links here */}
        </div>

        {/* SMAN 6 BERAU Title */}
        <div className="flex-grow text-center">
          <h1 className="text-xl md:text-2xl font-extrabold text-blue-800 uppercase tracking-wide">
            SMAN 6 BERAU
          </h1>
        </div>

        {/* Placeholder for right content (e.g., search, user icon) */}
        <div className="flex items-center space-x-4">
          {/* You can add icons/buttons here */}
        </div>
      </header>

      <main className="pt-[72px] pb-12">
        {" "}
        {/* pt-auto for fixed header height */}
        {/* Main Content Area */}
        <div className="max-w-screen-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Gerakan Gemar Membaca Hero/Carousel */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 tracking-wide uppercase">
              GERAKAN GEMAR MEMBACA
            </h2>

            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-200">
              {/* Carousel content */}
              {carouselSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority={index === 0} // Optimize LCP for the first image
                  />
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                  {/* Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2 uppercase">
                      {slide.mainTitle}
                    </h3>
                    <p className="text-xl md:text-2xl font-semibold mb-4">
                      {slide.subTitle}
                    </p>
                    <ul className="list-disc list-inside text-lg space-y-1">
                      {slide.bulletPoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    <p className="text-gray-300 text-xs mt-4 opacity-75">
                      {slide.credit}
                    </p>
                  </div>
                </div>
              ))}

              {/* Carousel Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-colors z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-colors z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Carousel Dots/Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {carouselSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-white" : "bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>

              {/* Slide Counter */}
              <div className="absolute bottom-4 right-4 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full z-10">
                {currentSlide + 1} / {carouselSlides.length}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-8 mt-8 lg:mt-0">
            {/* Olahraga itu Ibadah Poster */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="relative w-full aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/4006132/pexels-photo-4006132.jpeg?auto=compress&cs=tinysrgb&w=800" // Placeholder for "OLAHRAGA ITU IBADAH" poster
                  alt="Olahraga Itu Ibadah Poster"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Agenda Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                AGENDA
              </h3>
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
                  <Link
                    href={agendaItem.link}
                    className="text-gray-800 font-semibold hover:text-blue-700 transition-colors"
                  >
                    {agendaItem.title}
                  </Link>
                  <p className="text-sm text-gray-600">{agendaItem.location}</p>
                </div>
              </div>
              <Link
                href="#"
                className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Lihat Semua Agenda &rarr;
              </Link>
            </div>
          </div>
        </div>
        {/* LINK TERKAIT Section */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 relative pb-2">
            LINK TERKAIT
            <span className="absolute left-0 bottom-0 w-16 h-1 bg-blue-600 rounded-full"></span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-center">
            {relatedLinks.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="relative w-16 h-16 mb-2">
                  <Image
                    src={link.logo} // Ensure these paths are correct in your project
                    alt={link.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm text-center text-gray-700 font-medium">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
