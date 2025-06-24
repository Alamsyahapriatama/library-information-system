"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
// Icon Lucide React tidak relevan untuk halaman ini

export default function SurveyPage() {
  // Mengganti nama komponen menjadi lebih relevan

  // Data untuk gambar header (sesuai gambar terbaru)
  const headerImageSrc =
    "https://images.pexels.com/photos/4145353/pexels-photo-4145353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"; // Gambar orang di perpustakaan
  const headerImageAlt = "Orang-orang Berinteraksi di Perpustakaan";

  // Data untuk bagian "BERITA TERPOPULER" / Artikel (4 yang terlihat di gambar)
  const popularArticles = [
    {
      imageSrc:
        "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800", // Placeholder untuk hardware
      title: "Mengenal Motherboard, Processor, Hardisk dan RAM",
      date: "14 Februari 2024",
      summary:
        "Pelajari lebih lanjut tentang komponen dasar komputer seperti motherboard, processor, hardisk, dan RAM yang penting untuk kinerja perangkat Anda.",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/4571992/pexels-photo-4571992.jpeg?auto=compress&cs=tinysrgb&w=800", // Placeholder untuk guru
      title: "Seperti Apa Kedudukan dan Profesi Guru Dalam Islam",
      date: "25 Januari 2024",
      summary:
        "Tugas utama seorang guru diislamkan atau disebut Quality System of Muslim Education (QSME) yaitu menyampakan ilmu, membentuk karakter...",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/1684347/pexels-photo-1684347.jpeg?auto=compress&cs=tinysrgb&w=800", // Placeholder untuk bunga kamboja
      title: "POHON KAMBOJA JEPANG di Lingkungan SMAN 6 Berau",
      date: "18 April 2024",
      summary:
        "Kamboja Jepang adalah tanaman hias meranggas, berbatang gemuk besar, akarnya menyerupai umbi, daunnya panjang, bunga berbentuk terompet...",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/1031201/pexels-photo-1031201.jpeg?auto=compress&cs=tinysrgb&w=800", // Placeholder untuk mangga
      title: "POHON MANGGA DI LINGKUNGAN SMAN 6 BERAU",
      date: "20 Mei 2024",
      summary:
        "Mangga adalah buah tropis yang terkenal dengan rasa manis dan aroma harum. Di SMAN 6 Berau, pohon mangga tumbuh subur, memberikan teduh dan buah segar...",
    },
  ];

  const relatedLinks = [
    // --- PENTING: Ganti '/images/logo-*.png' dengan path gambar Anda yang sebenarnya ---
    // Asumsi logo ada di public/images/
    {
      name: "@_library_@sman6berau",
      logo: "/images/logo-instagram.png",
      href: "#",
    },
    {
      name: "Facebook SMAN 6 Berau",
      logo: "/images/logo-facebook.png",
      href: "#",
    },
    { name: "iBerau", logo: "/images/logo-iberau.png", href: "#" },
    { name: "IKaltim", logo: "/images/logo-ikaltim.png", href: "#" },
    { name: "iPusnas", logo: "/images/logo-ipusnas.png", href: "#" },
    {
      name: "Perpustakaan Digital UNY",
      logo: "/images/logo-uny.png",
      href: "#",
    }, // Mengasumsikan logo UNY
    { name: "OneSearch", logo: "/images/logo-onesearch.png", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pb-12">
      {/* Top Banner (gambar statis) */}
      <div className="relative w-full h-[250px] md:h-[300px] overflow-hidden">
        <Image
          src={headerImageSrc}
          alt={headerImageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center p-4">
          <div className="text-white">
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-wide">
              SELAMAT DATANG DI PERPUSTAKAAN SEKOLAH
            </h1>
            <p className="text-3xl md:text-5xl font-bold mt-2">SMAN 6 BERAU</p>
          </div>
        </div>
      </div>

      {/* Header dengan Link SEMUA, PERPUSTAKAAN, Login (Navbar) */}
      {/* Ini adalah bagian dari layout umum, bukan spesifik halaman ini, tapi saya sertakan untuk visual */}
      <div className="bg-white shadow-md py-3 relative z-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6 text-gray-700">
            <Link href="#" className="font-semibold hover:text-blue-600">
              SEMUA
            </Link>
            <Link href="#" className="font-semibold hover:text-blue-600">
              PERPUSTAKAAN
            </Link>
          </div>
          <div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              LOGIN
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area - Grid Layout */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Left Column - KUESIONER SURVEI KEPUASAN */}
        <div className="lg:col-span-2 space-y-8">
          {/* KUESIONER SURVEI KEPUASAN Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2 mb-4">
              KUESIONER SURVEI KEPUASAN PELAYANAN PERPUSTAKAAN
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Mohon kesediannya Bapak/Ibu, Saudara/i untuk dapat mengisi
              kuesioner ini. Jawaban Anda sangat berarti bagi kami untuk
              meningkatkan kualitas layanan.
            </p>

            <form className="space-y-6">
              {/* Form Bagian 1: Data Responden */}
              <div className="border border-gray-300 rounded-md p-4 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  1. Data Responden
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="nama-responden"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="nama-responden"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="no-hp-responden"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      No. Hp
                    </label>
                    <input
                      type="tel"
                      id="no-hp-responden"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Nomor Telepon"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="jenis-kelamin"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Jenis Kelamin
                    </label>
                    <select
                      id="jenis-kelamin"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option>-- Pilih Jenis Kelamin --</option>
                      <option>Laki-laki</option>
                      <option>Perempuan</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="tanggal-isi"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Tanggal Isi
                    </label>
                    <input
                      type="date"
                      id="tanggal-isi"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Form Bagian 2: Penilaian Pelayanan */}
              <div className="border border-gray-300 rounded-md p-4 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  2. Penilaian Pelayanan Tentang Kesesuaian Persyaratan
                  Pelayanan
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Berikan penilaian Anda terhadap poin-poin di bawah ini:
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      1. Kesesuaian biaya
                    </p>
                    <div className="flex space-x-4 text-sm text-gray-800">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="biaya"
                          value="sangat-baik"
                          className="mr-1"
                        />{" "}
                        Sangat Baik
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="biaya"
                          value="baik"
                          className="mr-1"
                        />{" "}
                        Baik
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="biaya"
                          value="cukup"
                          className="mr-1"
                        />{" "}
                        Cukup
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="biaya"
                          value="kurang"
                          className="mr-1"
                        />{" "}
                        Kurang
                      </label>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      2. Kesesuaian waktu
                    </p>
                    <div className="flex space-x-4 text-sm text-gray-800">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="waktu"
                          value="sangat-baik"
                          className="mr-1"
                        />{" "}
                        Sangat Baik
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="waktu"
                          value="baik"
                          className="mr-1"
                        />{" "}
                        Baik
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="waktu"
                          value="cukup"
                          className="mr-1"
                        />{" "}
                        Cukup
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="waktu"
                          value="kurang"
                          className="mr-1"
                        />{" "}
                        Kurang
                      </label>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      3. Kesesuaian prosedur
                    </p>
                    <div className="flex space-x-4 text-sm text-gray-800">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="prosedur"
                          value="sangat-baik"
                          className="mr-1"
                        />{" "}
                        Sangat Baik
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="prosedur"
                          value="baik"
                          className="mr-1"
                        />{" "}
                        Baik
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="prosedur"
                          value="cukup"
                          className="mr-1"
                        />{" "}
                        Cukup
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="prosedur"
                          value="kurang"
                          className="mr-1"
                        />{" "}
                        Kurang
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Bagian 3: Penilaian Pemahaman terhadap Prosedur */}
              <div className="border border-gray-300 rounded-md p-4 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  3. Penilaian Pemahaman Saudara tentang kemudahan prosedur
                  layanan di unit ini
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      Kemudahan Prosedur
                    </p>
                    <div className="flex space-x-4 text-sm text-gray-800">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="kemudahan"
                          value="mudah"
                          className="mr-1"
                        />{" "}
                        Mudah
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="kemudahan"
                          value="cukup-mudah"
                          className="mr-1"
                        />{" "}
                        Cukup Mudah
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="kemudahan"
                          value="sulit"
                          className="mr-1"
                        />{" "}
                        Sulit
                      </label>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      Fasilitas Penunjang
                    </p>
                    <div className="flex space-x-4 text-sm text-gray-800">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="fasilitas"
                          value="sangat-lengkap"
                          className="mr-1"
                        />{" "}
                        Sangat Lengkap
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="fasilitas"
                          value="lengkap"
                          className="mr-1"
                        />{" "}
                        Lengkap
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="fasilitas"
                          value="kurang-lengkap"
                          className="mr-1"
                        />{" "}
                        Kurang Lengkap
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Saran dan Masukan */}
              <div>
                <label
                  htmlFor="saran-masukan"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Saran dan Masukan yang Membangun
                </label>
                <textarea
                  id="saran-masukan"
                  rows="5"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tulis saran atau masukan Anda untuk peningkatan layanan..."
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  KIRIM DATA
                </button>
              </div>
            </form>
          </div>

          {/* BERITA TERPOPULER Section (hanya 4 item) */}
          <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2 mb-4">
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
          <div className="text-center mt-6">
            <Link
              href="#"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Lihat Berita Lainnya
            </Link>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* INFOGRAFIS Block */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
              INFOGRAFIS
            </h3>
            <div className="space-y-4">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/images/gambar-olahraga-ituibadah.jpg" // Placeholder for Infografis 1
                  alt="Infografis Digital"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/6803276/pexels-photo-6803276.jpeg?auto=compress&cs=tinysrgb&w=800" // Placeholder for Infografis 2
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
                src="/images/gambar-olahraga-ituibadah.jpg" // Re-using placeholder for the poster
                alt="Olahraga Itu Ibadah Poster"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* AGENDA Section */}
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
            {/* Contoh agenda kedua */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-600 text-white p-3 rounded-lg text-center font-bold flex-shrink-0">
                <span className="block text-2xl leading-none">11</span>
                <span className="block text-xs uppercase">APRIL</span>
                <span className="block text-xs">2025</span>
              </div>
              <div>
                <p className="text-gray-800 font-semibold">
                  Pembukaan Website Perpustakaan
                </p>
                <p className="text-sm text-gray-600">
                  Bersama Berau Tech Center
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

          {/* Quick Links / Menu Lainnya (dari gambar) */}
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
              SURVEI KEPUASAN
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Isi Survei
                </Link>
              </li>
            </ul>
            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
              AGENDA
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Lihat Semua Agenda
                </Link>
              </li>
            </ul>
            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
              PEGAWAI
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Daftar Pegawai
                </Link>
              </li>
            </ul>
            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
              STRUKTUR
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Struktur Organisasi
                </Link>
              </li>
            </ul>
            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
              VISI MISI
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Visi & Misi Perpustakaan
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* LINK TERKAIT Section */}
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

      {/* Teks "Rearranged by" */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-right text-sm text-gray-400 mt-8">
        <p>Rearranged by Tama</p>
      </div>
    </div>
  );
}
