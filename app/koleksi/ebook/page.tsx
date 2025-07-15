// app/koleksi/ebook/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Definisikan interface untuk struktur ebook Anda sesuai API
interface Ebook {
  id: number;
  title: string;
  author: string;
  publisher: string;
  published_at: string;
  cover: string;
  file: string;
}

// Interface untuk respons API pagination
interface ApiResponse {
  code: number;
  message: string;
  data: {
    current_page: number;
    data: Ebook[];
    first_page_url: string;
    from: number;
    last_page: number; // Total pages from the API
    last_page_url: string;
    links: { url: string | null; label: string; active: boolean; }[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number; // Total items from the API
  };
}

export default function EbookListPage() {
  const [ebooks, setEbooks] = useState<Ebook[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1); // State for current page
  const [totalPages, setTotalPages] = useState<number>(1); // State for total pages

  // Base API URL
  const BASE_API_URL = 'https://cms.perpustakaansditmadani.web.id/api/v1/ebook';
  const ITEMS_PER_PAGE = 9; // Matches the 'paginate' parameter in your API

  useEffect(() => {
    async function fetchEbooks() {
      try {
        setLoading(true);
        setError(null); // Clear previous errors

        // Construct dynamic API URL with current page
        const API_URL = `${BASE_API_URL}?orderBy=id&order=asc&paginate=${ITEMS_PER_PAGE}&page=${currentPage}`;
        
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result: ApiResponse = await response.json();

        if (result.code === 200 && result.data && Array.isArray(result.data.data)) {
          const fetchedEbooks: Ebook[] = result.data.data.map((ebook: any) => ({
            id: ebook.id,
            title: ebook.title,
            author: ebook.author,
            publisher: ebook.publisher,
            published_at: ebook.published_at,
            cover: ebook.cover || 'https://via.placeholder.com/200x300?text=No+Cover',
            file: ebook.file,
          }));
          setEbooks(fetchedEbooks);
          setTotalPages(result.data.last_page); // Update total pages from API response
        } else {
          setError("Data format from API is unexpected or no ebook data found.");
        }
      } catch (err: any) {
        console.error("Failed to fetch ebooks data:", err);
        setError(`Error fetching data: ${err.message}. Please try again later.`);
      } finally {
        setLoading(false);
      }
    }

    fetchEbooks();
  }, [currentPage]); // Re-run effect when currentPage changes

  // Function to handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Generate an array of page numbers to display in the pagination controls
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Adjust how many page numbers to show at once
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const layananLinks = [
    { name: 'PERPANJANGAN BUKU', href: '#' }, { name: 'LAYANAN MULTIMEDIA', href: '#' },
    { name: 'LAYANAN DEPOSIT', href: '#' }, { name: 'INFORMASI & ADUAN', href: '#' },
    { name: 'USULAN KOLEKSI', href: '#' }, { name: 'SURVEI KEPUASAN', href: '#' },
  ];
  const strukturLinks = [{ name: 'STRUKTUR', href: '#' }, { name: 'PEGAWAI', href: '#' }];
  const relatedLinks = [
    { name: 'Youtube', logo: '/images/youtube.jpeg', href: '#' }, { name: 'BANK INDONESIA', logo: '/images/bi.png', href: '#' },
    { name: 'KEMENKEU', logo: '/images/kemenkeu.png', href: '#' }, { name: 'BINTANG PUSNAS', logo: '/images/bintang-pusnas.png', href: '#' },
    { name: 'BAPENAS', logo: '/images/bapennas.png', href: '#' }, { name: 'SDIT MADANI', logo: '/images/sman.jpeg', href: '#' },
    { name: 'BPS', logo: '/images/bps.jpeg', href: '#' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-700">Memuat E-book...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-red-600">
        <p className="text-xl">Terjadi kesalahan: {error}. Silakan coba lagi nanti.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Top Banner Image */}
      <div className="relative w-full h-[250px] md:h-[300px] overflow-hidden bg-gradient-to-r from-blue-700 to-blue-900 text-white pt-28">
        <Image src="https://images.pexels.com/photos/3394336/pexels-photo-3394336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Perpustakaan Digital Banner" fill className="object-cover opacity-20" priority sizes="(max-width: 768px) 100vw, 100vw"/>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-2 uppercase tracking-wide">Jelajahi</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">KOLEKSI E-BOOK</h1>
          <p className="text-2xl md:text-3xl font-semibold mt-2">PERPUSTAKAAN MADANI</p>
        </div>
      </div>

      <div className="max-w-screen-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content: Ebook List */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Daftar E-book Terbaru</h2>
          {ebooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {ebooks.map((ebook) => (
                <a
                  href={ebook.file}
                  key={ebook.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
                >
                  <div className="relative w-full h-60">
                    <Image src={ebook.cover} alt={ebook.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"/>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 mb-1 line-clamp-2">{ebook.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">Penulis: {ebook.author}</p>
                    <p className="text-gray-500 text-xs">Penerbit: {ebook.publisher}</p>
                    <p className="text-gray-500 text-xs">Tahun Terbit: {new Date(ebook.published_at).getFullYear()}</p>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 text-lg">Tidak ada E-book tersedia saat ini.</p>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-10">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                &laquo; Previous
              </button>

              {/* Render page numbers */}
              {getPageNumbers().map(pageNumber => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`px-3 py-1 border border-gray-300 rounded-md ${
                    pageNumber === currentPage ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {pageNumber}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next &raquo;
              </button>
            </div>
          )}
        </div>

        {/* Right Sidebar (unchanged) */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">INFOGRAFIS</h3>
            <div className="relative w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <Image src="/images/gambar-olahraga-ituibadah.jpg" alt="Infografis Perpustakaan" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw"/>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">Informasi visual tentang layanan dan statistik perpustakaan.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 sticky top-32">
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">LAYANAN</h3>
            <ul className="space-y-3">{layananLinks.map((item, index) => (<li key={index}><Link href={item.href} className="text-blue-600 hover:text-blue-800 text-base font-medium transition-colors">&raquo; {item.name}</Link></li>))}</ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">STRUKTUR</h3>
            <ul className="space-y-3">{strukturLinks.map((item, index) => (<li key={index}><Link href={item.href} className="text-blue-600 hover:text-blue-800 text-base font-medium transition-colors">&raquo; {item.name}</Link></li>))}</ul>
          </div>
        </div>
      </div>

      {/* Related Links Section (unchanged) */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 relative pb-2">LINK TERKAIT<span className="absolute left-0 bottom-0 w-16 h-1 bg-blue-600 rounded-full"></span></h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-center">
          {relatedLinks.map((link, index) => (
            <Link href={link.href} key={index} className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="relative w-16 h-16 mb-2">
                <Image src={link.logo} alt={link.name} fill className="object-contain" sizes="64px"/>
              </div>
              <span className="text-sm text-center text-gray-700 font-medium">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}