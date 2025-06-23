"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  Users,
  BookOpen,
  Globe,
  ArrowLeft,
} from "lucide-react";
import axios from "axios";

export default function VisiMisiPage() {
  const visiPoints = [
    {
      icon: Eye,
      title: "Visi Utama",
      description:
        "Menjadi pusat informasi dan literasi yang unggul, mendukung terciptanya generasi cerdas, berkarakter, dan berwawasan global di SMAN 6 Berau.",
    },
  ];

  const misiPoints = [
    {
      icon: BookOpen,
      title: "Koleksi Berkualitas",
      description:
        "Menyediakan koleksi buku dan sumber informasi yang berkualitas dan up-to-date.",
    },
    {
      icon: Globe,
      title: "Teknologi Informasi",
      description:
        "Mengembangkan layanan perpustakaan berbasis teknologi informasi.",
    },
    {
      icon: Users,
      title: "Budaya Literasi",
      description: "Meningkatkan budaya literasi di kalangan siswa dan guru.",
    },
    {
      icon: Heart,
      title: "Layanan Prima",
      description: "Memberikan layanan prima kepada seluruh pemustaka.",
    },
    {
      icon: Target,
      title: "Program Kreatif",
      description:
        "Mengembangkan program-program kreatif untuk meningkatkan minat baca.",
    },
  ];

  const relatedLinks = [
    // --- PENTING: Ganti '/images/logo-*.png' dengan path gambar Anda yang sebenarnya ---
    { name: "PSB Sekolah", logo: "/images/logo-psb-sekolah.png", href: "#" },
    { name: "Portal Garuda", logo: "/images/logo-garuda.png", href: "#" },
    {
      name: "Bintang Pusnas",
      logo: "/images/logo-bintang-pusnas.png",
      href: "#",
    },
    {
      name: "Khasara Perpusnas",
      logo: "/images/logo-khasara-perpusnas.png",
      href: "#",
    },
    { name: "SIBI", logo: "/images/logo-sibi.png", href: "#" },
    {
      name: "Youtube SMAN 6 Berau",
      logo: "/images/logo-youtube.png",
      href: "#",
    },
    {
      name: "@sman6berauofficial",
      logo: "/images/logo-instagram.png",
      href: "#",
    },
  ];

  // Manfaat dari bagian Video
  const videoBenefits = [
    "Fasilitas modern dan lengkap",
    "Koleksi buku yang beragam",
    "Layanan digital terintegrasi",
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulasi pengambilan data dari API
    const fetchData = async () => {
      // Ganti dengan panggilan API sebenarnya jika ada
      // COnst base url
      const baseUrl = "https://cms-perpus.karuhundeveloper.com/api/v1/";
      const response = await axios(`${baseUrl}ebook`);

      setData(response.data.data);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-28 pb-12">
      {" "}
      {/* pt-28 untuk mengosongkan ruang Navbar yang fixed */}
      {/* Top Banner Image */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Siswa di perpustakaan"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Visi & Misi Header */}
      <div className="bg-white py-4 mb-8 relative z-10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 relative pb-2">
            VISI & MISI PERPUSTAKAAN
            <span className="absolute left-0 bottom-0 w-24 h-1 bg-blue-600 rounded-full"></span>
          </h1>
        </div>
      </div>
      {/* Main Content Area - Grid Layout */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Visi Misi Block & Details (Dengan video terintegrasi) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Visi Misi Central Block (Sekarang termasuk video & tanpa background biru/teks spesifik) */}
          <div className="bg-white rounded-xl shadow-lg pb-4">
            {" "}
            {/* Menghilangkan 'relative overflow-hidden' dari sini */}
            {/* Konten Video Profil yang terintegrasi di sini (diperbesar) */}
            <div className="relative w-full aspect-video bg-gray-800 rounded-t-xl overflow-hidden mb-6">
              {" "}
              {/* rounded-t-xl untuk sudut atas kartu */}
              <Image
                src="https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=800" // Gambar thumbnail video
                alt="Video Profil Perpustakaan"
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
            {/* Deskripsi Video & Sorotan Utama */}
            <div className="p-8 pt-0">
              {" "}
              {/* Sesuaikan padding karena video sudah di atas */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Video Profil Perpustakaan
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Tonton video untuk mengenal lebih dekat visi, misi, dan komitmen
                perpustakaan SMAN 6 Berau dalam mendukung pendidikan
                berkualitas.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Sorotan Utama:
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
            {/* Konten Visi Sebenarnya */}
            <div className="p-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Visi Kami
              </h3>
              {visiPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <point.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-1">
                      {point.title}
                    </h4>
                    <p className="text-gray-700">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Konten Misi Sebenarnya */}
            <div className="p-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Misi Kami
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {misiPoints.map((point, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-5 border border-gray-200"
                  >
                    <div className="bg-blue-100 p-2 rounded-full w-fit mb-3">
                      <point.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {point.title}
                    </h4>
                    <p className="text-sm text-gray-600">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Teks "Rearranged by" */}
            <div className="p-8 pt-4 text-right text-sm text-gray-400">
              <p>Rearranged by Tama</p>
            </div>
          </div>

          {/* Values Section (Tidak berubah) */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Nilai-Nilai Kami
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Integritas",
                  description: "Jujur dan dapat dipercaya dalam setiap layanan",
                },
                {
                  title: "Inovasi",
                  description:
                    "Selalu mengembangkan layanan dengan teknologi terkini",
                },
                {
                  title: "Inklusif",
                  description: "Melayani semua pemustaka tanpa diskriminasi",
                },
                {
                  title: "Inspiratif",
                  description:
                    "Menginspirasi generasi muda untuk gemar membaca",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-5 text-center shadow-sm border border-gray-200"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">
                      {value.title[0]}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - "OLAHRAGA ITU IBADAH" Poster & Agenda (Tidak berubah) */}
        <div className="lg:col-span-1 space-y-8">
          {/* "OLAHRAGA ITU IBADAH" Poster Block */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="relative w-full aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/4006132/pexels-photo-4006132.jpeg?auto=compress&cs=tinysrgb&w=800" // Placeholder untuk poster "OLAHRAGA ITU IBADAH"
                alt="Olahraga Itu Ibadah Poster"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Agenda Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-32">
            <h3 className="text-xl font-bold text-gray-900 mb-4">AGENDA</h3>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-600 text-white p-3 rounded-lg text-center font-bold flex-shrink-0">
                <span className="block text-2xl leading-none">21</span>
                <span className="block text-xs uppercase">JUNI</span>
                <span className="block text-xs">2025</span>
              </div>
              <div>
                <p className="text-gray-800 font-semibold">
                  Workshop Penulisan Kreatif
                </p>
                <p className="text-sm text-gray-600">
                  Perpustakaan SMAN 6 Berau - Pukul 14:00 WIB
                </p>
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
      {/* LINK TERKAIT Section (Tidak berubah) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-12">
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
                  src={link.logo}
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
    </div>
  );
}
