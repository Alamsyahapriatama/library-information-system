// app/program/[slug]/page.tsx
"use client"; // <--- This line is correctly placed and necessary for using hooks!

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import programData from '@/app/data/program.json'; // Ensure this path is correct based on your project structure
import ProgramDetailClientContent from './program-detail-client-content';

interface Program {
  slug: string;
  title: string;
  content: string;
  coverImage: string;
  images?: string[];
}

export async function generateStaticParams() {
  // Load the program data to get all available slugs
  // In a real application, this might fetch data from an API or database
  const programs = programData as Program[];

  // Map the programs to an array of objects, each containing a 'slug'
  // Next.js will then generate a static page for each slug returned here
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Find the program matching the current slug from the loaded data
  const program = (programData as Program[]).find((p) => p.slug === slug);

  // If no program is found for the given slug, return a 404 page
  if (!program) {
    notFound();
  }

  // Filter and slice other programs for the "Program Lainnya" section
  const otherPrograms = (programData as Program[])
    .filter(p => p.slug !== slug)
    .slice(0, 5);

  // State to manage the currently selected image for the modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  /**
   * Opens the image modal with the given image source.
   * @param imageSrc The URL of the image to display in the modal.
   */
  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  /**
   * Closes the image modal by resetting the selected image state.
   */
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-28 pb-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Column: Program Details (3 out of 4 columns, ~75%) */}
        <div className="lg:col-span-3 bg-white rounded-xl shadow-lg p-8 space-y-6">
          <Link href="/program" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm mb-4">
            &larr; Kembali ke Daftar Program
          </Link>

          {/* Program Cover Image */}
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

          {/* Program Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 leading-tight">
            {program.title}
          </h1>

          <hr className="border-t-2 border-blue-200 w-1/3 mb-6" />

          {/* Program Content */}
          <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line mb-8">
            {program.content}
          </p>

          {/* Additional Photo Gallery Section */}
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

        {/* Right Column: Other Programs List (1 out of 4 columns, ~25%) */}
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

      {/* --- Image Modal Component --- */}
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
