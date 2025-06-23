// app/koleksi/ebook/[id]/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Ebook {
  id: number;
  title: string;
  slug: string;
  description: string; // This will now be explicitly handled for null
  published_at: string; // Keep this as raw string to parse year
  author: string;
  cover_image: string; // This will hold the placeholder for now, or real cover if API provides
  file_url?: string; // This will hold the actual PDF URL from 'image' field
}

export default function EbookDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [ebook, setEbook] = useState<Ebook | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_SINGLE_EBOOK_ENDPOINT = `https://cms-perpus.karuhundeveloper.com/api/v1/ebook/${id}`;

  useEffect(() => {
    const fetchEbook = async () => {
      try {
        const response = await fetch(API_SINGLE_EBOOK_ENDPOINT, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer YOUR_AUTH_TOKEN_HERE',
          },
        });

        if (!response.ok) {
          const errorDetail = await response.text();
          try {
            const errorJson = JSON.parse(errorDetail);
            if (response.status === 404 || errorJson.message === "Resource not found") {
                notFound();
            }
            throw new Error(`HTTP error! Status: ${response.status}. Detail: ${errorJson.message || errorDetail}`);
          } catch {
            throw new Error(`HTTP error! Status: ${response.status}. Detail: ${errorDetail || response.statusText}`);
          }
        }

        const result = await response.json();
        console.log("Single ebook data fetched:", result);

        if (result.data) {
          const fetchedEbook = result.data;

          // Process publication year
          const publicationYear = fetchedEbook.published_at ? new Date(fetchedEbook.published_at).getFullYear().toString() : 'Tidak Diketahui';

          // Process description (handle null)
          const descriptionContent = fetchedEbook.description || 'Tidak ada deskripsi tersedia.';

          // Determine file_url (from API's 'image' field)
          const fileUrl = fetchedEbook.image && fetchedEbook.image.startsWith('htts://')
            ? fetchedEbook.image.replace('htts://', 'https://')
            : fetchedEbook.image;

          // Determine cover_image (using a placeholder for now, as 'image' is the PDF)
          // IMPORTANT: If your API provides a proper image URL for the cover, use that here.
          // For example: `fetchedEbook.cover_thumbnail_url || 'https://via.placeholder.com/200x300?text=No+Cover'`
          const coverImageUrl = 'https://via.placeholder.com/400x600?text=E-book+Cover'; // Generic placeholder for display

          setEbook({
            ...fetchedEbook,
            publication_year: publicationYear, // Add processed year to the state
            description: descriptionContent, // Add processed description to the state
            cover_image: coverImageUrl, // Use the determined cover image URL
            file_url: fileUrl, // Use the determined file URL
          });
        } else {
          notFound();
        }

      } catch (err: any) {
        console.error("Failed to fetch ebook (Detail):", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchEbook();
    } else {
      setLoading(false);
      notFound();
    }
  }, [id, API_SINGLE_EBOOK_ENDPOINT]);

  // Dummy data for sidebar (adapt as needed)
  const categories = [
    { name: 'Fiksi', href: '#' }, { name: 'Non-Fiksi', href: '#' },
    { name: 'Pendidikan', href: '#' }, { name: 'Sejarah', href: '#' },
  ];
  const popularEbooks = [
    { id: 201, title: 'Ebook Populer A', cover_image: 'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=100', link: '#' },
    { id: 202, title: 'Ebook Populer B', cover_image: 'https://images.pexels.com/photos/110646/pexels-photo-110646.jpeg?auto=compress&cs=tinysrgb&w=100', link: '#' },
  ];
  const layananLinks = [
    { name: 'PERPANJANGAN BUKU', href: '#' }, { name: 'LAYANAN MULTIMEDIA', href: '#' },
    { name: 'LAYANAN DEPOSIT', href: '#' }, { name: 'INFORMASI & ADUAN', href: '#' },
    { name: 'USULAN KOLEKSI', href: '#' }, { name: 'SURVEI KEPUASAN', href: '#' },
  ];
  const strukturLinks = [{ name: 'STRUKTUR', href: '#' }, { name: 'PEGAWAI', href: '#' }];
  const relatedLinks = [
    { name: 'Facebook', logo: '/images/logo-facebook.png', href: '#' }, { name: 'Instagram', logo: '/images/logo-instagram.png', href: '#' },
    { name: 'Iberau', logo: '/images/logo-iberau.png', href: '#' }, { name: 'IKaltim', logo: '/images/logo-ikaltim.png', href: '#' },
    { name: 'iPusnas', logo: '/images/logo-ipusnas.png', href: '#' }, { name: 'SINE', logo: '/images/logo-sine.png', href: '#' },
    { name: 'RI-One', logo: '/images/logo-rione.png', href: '#' },
  ];

  if (loading) {
    return (<div className="min-h-screen flex items-center justify-center bg-gray-100"><p className="text-xl text-gray-700">Memuat detail E-book...</p></div>);
  }
  if (error) {
    return (<div className="min-h-screen flex items-center justify-center bg-gray-100 text-red-600"><p className="text-xl">Terjadi kesalahan: {error}. Silakan coba lagi nanti.</p></div>);
  }
  if (!ebook) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <div className="relative w-full h-[200px] md:h-[250px] overflow-hidden bg-gradient-to-r from-blue-700 to-blue-900 text-white flex items-center justify-center text-center px-4">
        <Image src="https://images.pexels.com/photos/3394336/pexels-photo-3394336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Perpustakaan Digital Banner" fill className="object-cover opacity-20" priority sizes="100vw"/>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">{ebook.title}</h1>
          <p className="text-md md:text-lg mt-2">Oleh: {ebook.author} | Terbit: {ebook.publication_year}</p>
        </div>
      </div>

      <div className="max-w-screen-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          {ebook.cover_image && ( // Display cover image
            <div className="relative w-full h-80 mb-6 rounded-lg overflow-hidden">
              <Image src={ebook.cover_image} alt={ebook.title} fill className="object-contain" sizes="(max-width: 1024px) 100vw, 66vw" priority/>
            </div>
          )}

          <h1 className="text-3xl font-bold text-gray-900 mb-2">{ebook.title}</h1>
          <p className="text-gray-600 text-sm mb-6 border-b pb-4">
            Oleh: <span className="font-semibold">{ebook.author}</span> | Tahun Terbit: <span className="font-semibold">{ebook.publication_year}</span>
          </p>

          <div className="prose max-w-none text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: ebook.description }}/>

          {ebook.file_url && ( // Show "Baca E-book" button if file_url exists
            <div className="mt-8 pt-4 border-t border-gray-200">
              <Link
                href={ebook.file_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Baca E-book Sekarang
                <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v6a1 1 0 01-2 0V3a1 1 0 011-1zm3 8a3 3 0 00-3 3v2a1 1 0 11-2 0v-2a3 3 0 00-3-3h-.5a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5H13zm-1 2a1 1 0 100 2h.5a.5.5 0 00.5-.5v-1.5a.5.5 0 00-.5-.5H12z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          )}

          <div className="mt-8 pt-4 border-t border-gray-200 flex items-center space-x-4">
            <span className="text-gray-700 font-semibold">Bagikan:</span>
            <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800"><i className="fab fa-facebook"></i> Facebook</Link>
            <Link href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(ebook.title)}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800"><i className="fab fa-twitter"></i> Twitter</Link>
            <Link href={`https://api.whatsapp.com/send?text=${encodeURIComponent(ebook.title + ' ' + window.location.href)}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800"><i className="fab fa-whatsapp"></i> WhatsApp</Link>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">KATEGORI E-BOOK</h3>
            <ul className="space-y-3">{categories.map((cat, index) => (<li key={index}><Link href={cat.href} className="text-blue-600 hover:text-blue-800 text-base font-medium transition-colors">&raquo; {cat.name}</Link></li>))}</ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">INFOGRAFIS</h3>
            <div className="relative w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <Image src="https://images.pexels.com/photos/5926392/pexels-photo-5926392.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Infografis Perpustakaan" fill className="object-cover" sizes="(max-width: 1024px) 33vw, 33vw"/>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">Informasi visual tentang layanan dan statistik perpustakaan.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">E-BOOK TERPOPULER</h3>
            <ul className="space-y-4">{popularEbooks.map((pEbook) => (<li key={pEbook.id} className="flex flex-col items-center space-x-3"><div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden"><Image src={pEbook.cover_image} alt={pEbook.title} fill className="object-cover" sizes="64px"/></div><Link href={pEbook.link} className="text-gray-800 hover:text-blue-700 text-sm font-medium leading-tight">{pEbook.title}</Link></li>))}</ul>
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