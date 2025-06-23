// app/koleksi/artikel/[slug]/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Article {
  id: number;
  title: string;
  slug: string;
  content: string;
  published_at: string;
  author: string;
  image: string;
}

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_SINGLE_ARTICLE_ENDPOINT = `https://cms-perpus.karuhundeveloper.com/api/v1/articles?slug=${slug}`;

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(API_SINGLE_ARTICLE_ENDPOINT, {
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
            throw new Error(`HTTP error! Status: ${response.status}. Detail: ${errorJson.message || errorDetail}`);
          } catch {
            throw new Error(`HTTP error! Status: ${response.status}. Detail: ${errorDetail || response.statusText}`);
          }
        }

        const result = await response.json();
        console.log("Single article data fetched:", result);

        if (result.data && result.data.data && result.data.data.length > 0) {
          const fetchedArticle = result.data.data[0];
          if (fetchedArticle.image && fetchedArticle.image.startsWith('htts://')) {
              fetchedArticle.image = fetchedArticle.image.replace('htts://', 'https://');
          }
          setArticle(fetchedArticle);
        } else {
          notFound();
        }

      } catch (err: any) {
        console.error("Failed to fetch article (Detail):", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
        fetchArticle();
    } else {
        setLoading(false);
        notFound();
    }
  }, [slug, API_SINGLE_ARTICLE_ENDPOINT]);

  // Dummy data untuk sidebar
  const categories = [
    { name: 'Kategori Berita 1', href: '#' }, { name: 'Kategori Berita 2', href: '#' },
    { name: 'Kategori Berita 3', href: '#' },
  ];
  const popularArticles = [
    { id: 101, title: 'Artikel Populer 1', image: 'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=100', link: '#' },
    { id: 102, title: 'Artikel Populer 2', image: 'https://images.pexels.com/photos/110646/pexels-photo-110646.jpeg?auto=compress&cs=tinysrgb&w=100', link: '#' },
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
    return (<div className="min-h-screen flex items-center justify-center bg-gray-100"><p className="text-xl text-gray-700">Memuat detail artikel...</p></div>);
  }
  if (error) {
    return (<div className="min-h-screen flex items-center justify-center bg-gray-100 text-red-600"><p className="text-xl">Terjadi kesalahan: {error}. Silakan coba lagi nanti.</p></div>);
  }
  if (!article) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <div className="relative w-full h-[200px] md:h-[250px] overflow-hidden bg-gradient-to-r from-blue-700 to-blue-900 text-white flex items-center justify-center text-center px-4">
        <Image src="https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Perpustakaan Sekolah Banner" fill className="object-cover opacity-20" priority sizes="100vw"/>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">{article.title}</h1>
          <p className="text-md md:text-lg mt-2">Oleh: {article.author} | {new Date(article.published_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </div>

      <div className="max-w-screen-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          {article.image && (
            <div className="relative w-full h-80 mb-6 rounded-lg overflow-hidden">
              <Image src={article.image} alt={article.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" priority/>
            </div>
          )}

          <h1 className="text-3xl font-bold text-gray-900 mb-2">{article.title}</h1>
          <p className="text-gray-600 text-sm mb-6 border-b pb-4">
            Oleh: <span className="font-semibold">{article.author}</span> | Terbit: <span className="font-semibold">{new Date(article.published_at).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </p>

          <div className="prose max-w-none text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: article.content }}/>

          <div className="mt-8 pt-4 border-t border-gray-200 flex items-center space-x-4">
            <span className="text-gray-700 font-semibold">Bagikan:</span>
            <Link href="#" className="text-blue-600 hover:text-blue-800"><i className="fab fa-facebook"></i> Facebook</Link>
            <Link href="#" className="text-blue-600 hover:text-blue-800"><i className="fab fa-twitter"></i> Twitter</Link>
            <Link href="#" className="text-blue-600 hover:text-blue-800"><i className="fab fa-whatsapp"></i> WhatsApp</Link>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">KATEGORI ARTIKEL</h3>
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
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">ARTIKEL TERPOPULER</h3>
            <ul className="space-y-4">{popularArticles.map((pArticle) => (<li key={pArticle.id} className="flex items-center space-x-3"><div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden"><Image src={pArticle.image} alt={pArticle.title} fill className="object-cover" sizes="64px"/></div><Link href={pArticle.link} className="text-gray-800 hover:text-blue-700 text-sm font-medium leading-tight">{pArticle.title}</Link></li>))}</ul>
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