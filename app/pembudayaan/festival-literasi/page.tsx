'use client'; // Required for client components in Next.js

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlayCircle } from 'lucide-react'; // Icon for video play button

export default function FestivalLiterasiPage() {
  // Festival Literasi Hero Section Data
  const festivalHero = {
    image: "https://images.pexels.com/photos/8437930/pexels-photo-8437930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Image matching the screenshot
    alt: "Festival Literasi Perpustakaan SMAN 6 Berau",
    mainTitle: "FESTIVAL LITERASI",
    subTitle: "PERPUSTAKAAN SMAN 6 BERAU",
    description: [
      "Angkringan Baca",
      "Pameran Literasi",
      "Gelar Stand Baca Masyarakat"
    ],
    credit: "Blue Modern Company Profile Presentation by Choirul Amin"
  };

  // Video Section Data
  const festivalVideo = {
    thumbnail: "https://images.pexels.com/photos/8437930/pexels-photo-8437930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Using same image as hero for consistency
    alt: "Dokumentasi Video Festival Literasi",
    // IMPORTANT: Replace this with your actual YouTube or Vimeo embed URL
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdefg", // Placeholder YouTube Embed URL
    description: "Nikmati dokumentasi video untuk melihat lebih dekat kemeriahan Festival Literasi Perpustakaan SMAN 6 Berau.",
    moreVideosLink: "#", // Link to a page with more videos
    videoCredit: "Design by Choirul Amin", // Assuming the credit is for the video as well
  };

  // Infografis Data
  const infografis = {
    image: "https://images.pexels.com/photos/17666245/pexels-photo-17666245.jpeg?auto=compress&cs=tinysrgb&w=800", // Placeholder Infografis image from the new screenshot
    alt: "Infografis Digital Library",
  };

  // Agenda Data (using current date + 1 for example)
  const today = new Date();
  const agendaItem = {
    date: {
      day: (today.getDate() + 1).toString().padStart(2, '0'), // Tomorrow's day
      month: today.toLocaleString('default', { month: 'short' }).toUpperCase(),
      year: today.getFullYear().toString(),
    },
    title: 'Workshop Literasi Digital',
    location: 'Ruang Multimedia Perpustakaan',
    link: '#'
  };

  // Related Links Data (from previous examples, adjust paths as needed)
  const relatedLinks = [
    { name: 'Facebook SMAN 6 Berau', logo: '/images/logo-facebook.png', href: '#' },
    { name: 'IBerau', logo: '/images/logo-iberau.png', href: '#' },
    { name: 'IKaltim', logo: '/images/logo-ikaltim.png', href: '#' },
    { name: 'iPusnas', logo: '/images/logo-ipusnas.png', href: '#' },
    { name: 'Perpustakaan Dikbudristek', logo: '/images/logo-dikbudristek.png', href: '#' },
    { name: 'onesearch.id', logo: '/images/logo-onesearch.png', href: '#' },
    { name: 'e-resources perpusnas', logo: '/images/logo-e_resources.png', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Top Fixed Header (simplified, assuming it's part of this page) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md pt-4 pb-3 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Placeholder for left content (e.g., logo, menu icon) */}
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 relative">
            <Image src="/images/logo-perpustakaan.png" alt="Logo Perpustakaan" fill className="object-contain" />
          </div>
        </div>
        
        {/* SMAN 6 BERAU Title */}
        <div className="flex-grow text-center">
          <h1 className="text-xl md:text-2xl font-extrabold text-blue-800 uppercase tracking-wide">
            SMAN 6 BERAU
          </h1>
        </div>

        {/* Placeholder for right content */}
        <div className="flex items-center space-x-4">
          {/* You can add icons/buttons here */}
        </div>
      </header>
      
      <main className="pt-[72px] pb-12"> {/* pt-auto for fixed header height */}
        {/* Main Content Area */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Festival Literasi Hero & Video */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold text-gray-800 tracking-wide uppercase">FESTIVAL LITERASI</h2>

            {/* Festival Literasi Hero Section */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-200">
              <Image
                src={festivalHero.image}
                alt={festivalHero.alt}
                fill
                className="object-cover"
                priority
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              
              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2 uppercase">
                  {festivalHero.mainTitle}
                </h3>
                <p className="text-xl md:text-2xl font-semibold mb-4">
                  {festivalHero.subTitle}
                </p>
                <ul className="list-disc list-inside text-lg space-y-1">
                  {festivalHero.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <p className="text-gray-300 text-xs mt-4 opacity-75">{festivalHero.credit}</p>
              </div>
            </div>

            {/* Video Section */}
            <div className="bg-white rounded-xl shadow-lg pb-4">
              <div className="relative w-full aspect-video bg-gray-800 rounded-t-xl overflow-hidden mb-6">
                <Image
                  src={festivalVideo.thumbnail}
                  alt={festivalVideo.alt}
                  fill
                  className="object-cover"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <a href={festivalVideo.videoUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 rounded-full p-4 transition-colors">
                    <PlayCircle className="w-10 h-10 text-white" />
                  </a>
                </div>
              </div>

              <div className="p-6 pt-0">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {festivalVideo.description}
                </p>
                <p className="text-gray-500 text-sm mb-4">{festivalVideo.videoCredit}</p>
                <Link href={festivalVideo.moreVideosLink} className="text-blue-600 hover:text-blue-800 text-base font-medium">
                  Lihat video lainnya &rarr;
                </Link>
              </div>
            </div>

          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-8 mt-8 lg:mt-0">
            {/* Infografis Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">INFOGRAFIS</h3>
              <div className="relative w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={infografis.image} // Placeholder Infografis image
                  alt={infografis.alt}
                  fill
                  className="object-contain" // Use object-contain if it's a real infographic that shouldn't be cropped
                />
              </div>
            </div>

            {/* Agenda Section */}
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-32">
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">AGENDA</h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-600 text-white p-3 rounded-lg text-center font-bold flex-shrink-0">
                  <span className="block text-2xl leading-none">{agendaItem.date.day}</span>
                  <span className="block text-xs uppercase">{agendaItem.date.month}</span>
                  <span className="block text-xs">{agendaItem.date.year}</span>
                </div>
                <div>
                  <Link href={agendaItem.link} className="text-gray-800 font-semibold hover:text-blue-700 transition-colors">
                    {agendaItem.title}
                  </Link>
                  <p className="text-sm text-gray-600">{agendaItem.location}</p>
                </div>
              </div>
              <Link href="#" className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium">
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
              <Link href={link.href} key={index} className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="relative w-16 h-16 mb-2">
                  <Image
                    src={link.logo} // Ensure these paths are correct in your project
                    alt={link.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm text-center text-gray-700 font-medium">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}