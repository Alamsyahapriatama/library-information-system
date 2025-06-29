// app/program/[slug]/page.tsx
"use client"; // <--- Tambahkan baris ini di paling atas!

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useState } from 'react';

import programData from '@/app/data/program.json';

interface Program {
  slug: string;
  title: string;
  content: string;
  coverImage: string;
  images?: string[];
}

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const program = (programData as Program[]).find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  const otherPrograms = (programData as Program[])
    .filter(p => p.slug !== slug)
    .slice(0, 5);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-28 pb-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Kolom Kiri: Detail Program (Mengambil 3 dari 4 kolom, sekitar 75%) */}
        <div className="lg:col-span-3 bg-white rounded-xl shadow-lg p-8 space-y-6">
          <Link href="/program" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm mb-4">
            &larr; Kembali ke Daftar Program
          </Link>

          {/* Gambar Cover Program */}
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-6">
            <Image
              src={program.coverImage}
              alt={program.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </div>

          {/* Judul Program */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 leading-tight">
            {program.title}
          </h1>

          <hr className="border-t-2 border-blue-200 w-1/3 mb-6" />

          {/* Konten Program */}
          <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line mb-8">
            {program.content}
          </p>

          {/* Bagian Galeri Foto Tambahan */}
          {program.images && program.images.length > 0 && (
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b pb-3 border-blue-200">Galeri Program</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {program.images.map((imageSrc, index) => (
                  <div
                    key={index}
                    className="relative w-full h-48 rounded-lg overflow-hidden shadow-md group cursor-pointer"
                    onClick={() => openModal(imageSrc)}
                  >
                    <Image
                      src={imageSrc}
                      alt={`${program.title} - Gambar ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-lg font-semibold">Klik untuk Perbesar</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Link href="/program" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-8">
            &larr; Kembali ke Daftar Program
          </Link>
        </div>

        {/* Kolom Kanan: Daftar Program Lainnya (Mengambil 1 dari 4 kolom, sekitar 25%) */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white rounded-4xl shadow-lg p-6 sticky top-32">
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Program Lainnya</h3>
            <ul className="space-y-3">
              {otherPrograms.length > 0 ? (
                otherPrograms.map((otherProgram) => (
                  <li key={otherProgram.slug}>
                    <Link href={`/program/${otherProgram.slug}`} className="text-blue-600 hover:text-blue-800 text-base font-medium transition-colors block">
                      &raquo; {otherProgram.title}
                    </Link>
                  </li>
                ))
              ) : (
                <p className="text-gray-600 text-sm">Tidak ada program lain yang tersedia.</p>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* --- Komponen Modal Gambar --- */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full w-full h-auto" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Gambar Diperbesar"
              layout="responsive"
              width={1000}
              height={700}
              objectFit="contain"
              className="rounded-lg shadow-xl"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold bg-gray-800 bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-opacity"
              aria-label="Tutup"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 