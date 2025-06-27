// app/koleksi/ebook/[id]/page.tsx
// Hapus 'use client' jika ada di sini, karena generateStaticParams() adalah fungsi server.
// Hapus juga import fs dan path.

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation'; // Digunakan jika ebook tidak ditemukan

// *** PERBAIKAN UTAMA: Menggunakan alias jalur (@/) untuk mengimpor data ***
// Alias '@/' menunjuk ke root proyek. Dari root, kita masuk ke 'app/data/ebooks.json'
import ebooksData from '@/app/data/ebooks.json'; 

interface Ebook {
  id: string;
  title: string;
  author: string;
  publication_year: number;
  cover_image: string;
  pdf_url: string;
  description: string; // Tambahkan deskripsi untuk detail
}

// Fungsi ini memberi tahu Next.js semua ID ebook yang mungkin ada pada waktu build (penting untuk SSG)
export async function generateStaticParams() {
  // Pastikan ebooksData adalah array atau memiliki struktur data.data
  const rawEbooks = Array.isArray(ebooksData) 
    ? ebooksData 
    : (ebooksData as any).data && Array.isArray((ebooksData as any).data.data) 
      ? (ebooksData as any).data.data 
      : [];

  return (rawEbooks as Ebook[]).map((ebook) => ({
    id: String(ebook.id), // *** PERBAIKAN DI SINI: Pastikan ID adalah string ***
  }));
}

export default function EbookDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // Proses data yang diimpor
  const rawEbooks = Array.isArray(ebooksData) 
    ? ebooksData 
    : (ebooksData as any).data && Array.isArray((ebooksData as any).data.data) 
      ? (ebooksData as any).data.data 
      : [];

  // Temukan ebook berdasarkan ID yang diberikan di URL
  const ebook = (rawEbooks as Ebook[]).find((e) => e.id === id);

  // Jika ebook tidak ditemukan (misal: ID salah di URL), tampilkan halaman 404 Next.js
  if (!ebook) {
    notFound();
  }

  // Ambil ebook lain untuk sidebar, kecuali ebook yang sedang dilihat
  const otherEbooks = (rawEbooks as Ebook[])
    .filter(e => e.id !== id) // Filter ebook yang sedang dilihat
    .slice(0, 5); // Ambil maksimal 5 ebook lainnya untuk ditampilkan

  return (
    <div className="min-h-screen bg-gray-100 pt-28 pb-12"> {/* pt-28 memberi jarak atas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-8"> {/* Tata letak grid 4 kolom */}
        {/* Kolom Kiri: Detail Ebook (Mengambil 3 dari 4 kolom, sekitar 75%) */}
        <div className="lg:col-span-3 bg-white rounded-xl shadow-lg p-8 space-y-6">
          {/* Tombol kembali ke daftar ebook di bagian atas */}
          <Link href="/koleksi/ebook" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm mb-4">
            &larr; Kembali ke Daftar E-book
          </Link>

          {/* Cover Ebook */}
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-6">
            <Image
              src={ebook.cover_image || 'https://via.placeholder.com/400x600?text=No+Cover'}
              alt={ebook.title}
              fill
              className="object-contain md:object-cover" // Gunakan object-contain agar buku tidak terpotong, atau object-cover jika gambar berkualitas tinggi
              priority // Prioritaskan gambar cover
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </div>

          {/* Judul Ebook */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-2 leading-tight">
            {ebook.title}
          </h1>
          <p className="text-gray-700 text-lg mb-4">Penulis: {ebook.author} | Tahun: {ebook.publication_year}</p>

          {/* Garis pemisah visual */}
          <hr className="border-t-2 border-blue-200 w-1/3 mb-6" />

          {/* Deskripsi Ebook */}
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Sinopsis</h2>
          <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line mb-8">
            {ebook.description}
          </p>

          {/* Tombol Baca E-book */}
          <a 
            href={ebook.pdf_url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mr-4"
          >
            Baca E-book &rarr;
          </a>
          
          {/* Tombol kembali di bagian bawah */}
          <Link href="/koleksi/ebook" className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            &larr; Kembali ke Daftar E-book
          </Link>
        </div>

        {/* Kolom Kanan: Daftar Ebook Lainnya */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-32"> {/* sticky agar tetap terlihat saat scrolling */}
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">E-book Lainnya</h3>
            <ul className="space-y-3">
              {otherEbooks.length > 0 ? (
                otherEbooks.map((otherEbook) => (
                  <li key={otherEbook.id}>
                    <Link href={`/koleksi/ebook/${otherEbook.id}`} className="text-blue-600 hover:text-blue-800 text-base font-medium transition-colors block">
                      &raquo; {otherEbook.title}
                    </Link>
                  </li>
                ))
              ) : (
                <p className="text-gray-600 text-sm">Tidak ada E-book lain yang tersedia.</p>
              )}
            </ul>
          </div>
          
          {/* Anda bisa menambahkan bagian lain di sidebar kanan di sini */}
        </div>
      </div>
    </div>
  );
}
