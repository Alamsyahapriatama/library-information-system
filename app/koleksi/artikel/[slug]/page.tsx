// app/koleksi/artikel/[slug]/page.tsx
// Hapus 'use client' karena komponen ini mengekspor generateStaticParams()
// yang berjalan di sisi server.

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation'; // Digunakan jika artikel tidak ditemukan

// Alias '@/' menunjuk ke root proyek. Dari root, kita masuk ke 'app/data/artikel.json'
import artikelData from '@/app/data/artikel.json'; 

interface Artikel {
  slug: string;
  title: string;
  content: string;
  image: string;
}

// Fungsi ini memberi tahu Next.js semua slug yang mungkin ada pada waktu build (penting untuk SSG)
export async function generateStaticParams() {
  // Pastikan artikelData dianggap sebagai array Artikel
  return (artikelData as Artikel[]).map((artikel) => ({
    slug: artikel.slug,
  }));
}

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Temukan artikel berdasarkan slug yang diberikan di URL
  const article = (artikelData as Artikel[]).find((a) => a.slug === slug);

  // Jika artikel tidak ditemukan (misal: slug salah di URL), tampilkan halaman 404 Next.js
  if (!article) {
    notFound();
  }

  // Ambil artikel lain untuk sidebar, kecuali artikel yang sedang dilihat
  const otherArticles = (artikelData as Artikel[])
    .filter(a => a.slug !== slug) // Filter artikel yang sedang dilihat
    .slice(0, 5); // Ambil maksimal 5 artikel lainnya untuk ditampilkan

  return (
    <div className="min-h-screen bg-gray-100 pt-28 pb-12"> {/* pt-28 memberi jarak atas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-8"> {/* Tata letak grid 4 kolom */}
        {/* Kolom Kiri: Detail Artikel (Mengambil 3 dari 4 kolom, sekitar 75%) */}
        <div className="lg:col-span-3 bg-white rounded-xl shadow-lg p-8 space-y-6">
          {/* Tombol kembali ke daftar artikel di bagian atas */}
          <Link href="/koleksi/artikel" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm mb-4">
            &larr; Kembali ke Daftar Artikel
          </Link>

          {/* Gambar Cover Artikel */}
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-6">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority // Prioritaskan gambar cover
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </div>

          {/* Judul Artikel */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 leading-tight">
            {article.title}
          </h1>

          {/* Garis pemisah visual */}
          <hr className="border-t-2 border-blue-200 w-1/3 mb-6" />

          {/* Konten Artikel */}
          <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line mb-8">
            {article.content}
          </p>

          {/* Tombol kembali di bagian bawah */}
          <Link href="/koleksi/artikel" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            &larr; Kembali ke Daftar Artikel
          </Link>
        </div>

        {/* Kolom Kanan: Daftar Artikel Lainnya (Mengambil 1 dari 4 kolom, sekitar 25%) */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white rounded-4xl shadow-lg p-6 sticky top-32"> {/* sticky agar tetap terlihat saat scrolling */}
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Artikel Lainnya</h3>
            <ul className="space-y-3">
              {otherArticles.length > 0 ? (
                otherArticles.map((otherArticle) => (
                  <li key={otherArticle.slug}>
                    <Link href={`/koleksi/artikel/${otherArticle.slug}`} className="text-blue-600 hover:text-blue-800 text-base font-medium transition-colors block">
                      &raquo; {otherArticle.title}
                    </Link>
                  </li>
                ))
              ) : (
                <p className="text-gray-600 text-sm">Tidak ada artikel lain yang tersedia.</p>
              )}
            </ul>
          </div>
          
          {/* Anda bisa menambahkan bagian lain di sidebar kanan di sini, misalnya iklan atau info relevan lainnya */}
        </div>
      </div>
    </div>
  );
}
