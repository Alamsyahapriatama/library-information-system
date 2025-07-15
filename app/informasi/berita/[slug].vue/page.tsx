// app/berita/[slug]/page.tsx
'use client'; // This component will be a Client Component

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // Hook to get dynamic route parameters
import Image from 'next/image';
import Link from 'next/link';

// Interface for a single article, matching API response structure
interface Article {
  id: number;
  title: string;
  slug: string;
  content: string; // HTML content
  published_at: string;
  author: string;
  image: string; // URL for the article's image
}

export default function ArticleDetailPage() {
  const params = useParams();
  const slug = params.slug as string; // Get the slug from the URL

  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      setError("Slug artikel tidak ditemukan.");
      return;
    }

    async function fetchArticle() {
      try {
        setLoading(true);
        setError(null);

        // Construct API URL dynamically using the slug
        const API_URL = `https://cms.perpustakaansditmadani.web.id/api/v1/articles/${slug}`;
        
        const response = await fetch(API_URL);
        
        if (response.status === 404) {
          throw new Error("Artikel tidak ditemukan.");
        }
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.code === 200 && result.data) {
          // Assuming result.data directly contains the article object
          setArticle({
            id: result.data.id,
            title: result.data.title,
            slug: result.data.slug,
            content: result.data.content,
            published_at: result.data.published_at,
            author: result.data.author,
            image: result.data.image || 'https://via.placeholder.com/800x450?text=No+Article+Image',
          });
        } else {
          setError("Format data artikel dari API tidak sesuai atau data kosong.");
        }
      } catch (err: any) {
        console.error("Failed to fetch article data:", err);
        setError(`Terjadi kesalahan saat memuat artikel: ${err.message}`);
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [slug]); // Re-run effect when slug changes

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-700">Memuat artikel...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-red-600 p-4 text-center">
        <p className="text-xl">Terjadi kesalahan: {error}</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 text-center">
        <p className="text-xl text-gray-700">Artikel tidak ditemukan.</p>
      </div>
    );
  }

  // Format the publication date
  const formattedDate = new Date(article.published_at).toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gray-100 font-sans pt-20 pb-12"> {/* Added pt-20 for header spacing */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Article Image */}
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority // Prioritize loading for the main article image
          />
        </div>

        <div className="p-6 md:p-8">

          {/* Article Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>

          {/* Article Meta */}
          <p className="text-gray-600 text-sm mb-6 border-b pb-4">
            Oleh <span className="font-semibold">{article.author}</span> pada {formattedDate}
          </p>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none text-gray-800 leading-relaxed" 
            dangerouslySetInnerHTML={{ __html: article.content }} 
          />

          {/* Optional: Add social sharing buttons or related articles here */}
        </div>
      </div>
    </div>
  );
}