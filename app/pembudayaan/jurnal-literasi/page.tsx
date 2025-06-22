'use client'; // Required for client components in Next.js

import React, { useState } from 'react';
import { Loader2, CheckCircle, XCircle } from 'lucide-react'; // Icons for loading and status

export default function JurnalLiterasiPage() { // Renamed component
  const [fullName, setFullName] = useState(''); // Nama Lengkap
  const [kelas, setKelas] = useState(''); // Kelas
  const [readingTime, setReadingTime] = useState(''); // Waktu Membaca Buku (new field)
  const [bookTitle, setBookTitle] = useState(''); // Judul Buku (new field)
  const [author, setAuthor] = useState(''); // Pengarang (new field)
  const [publicationYear, setPublicationYear] = useState(''); // Tahun Terbit (new field - optional)
  const [bookSummary, setBookSummary] = useState(''); // Isi Singkat dari Buku yang dibaca (new field)
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');

  // Email based on the provided image
  const loggedInEmail = "supra.alex@gmail.com"; 

  const handleClearForm = () => {
    setFullName('');
    setKelas('');
    setReadingTime('');
    setBookTitle('');
    setAuthor('');
    setPublicationYear('');
    setBookSummary('');
    setSubmissionStatus(null);
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus(null); // Reset previous status
    setErrorMessage('');

    // Basic Validation for all *required* fields
    if (!fullName || !kelas || !readingTime || !bookTitle || !author || !bookSummary) {
      setErrorMessage('Semua kolom wajib diisi.');
      return;
    }

    setIsSubmitting(true); // Start loading state

    // --- IMPORTANT: REPLACE THIS MOCK API CALL WITH YOUR ACTUAL BACKEND API ENDPOINT ---
    // This is a placeholder to simulate network request and response.
    // In a real application, you would send this data to your library's literacy journal system API.
    const submissionData = {
      fullName,
      kelas,
      readingTime,
      bookTitle,
      author,
      publicationYear, // Optional field, sent if filled
      bookSummary,
      email: loggedInEmail,
      timestamp: new Date().toISOString(),
    };

    try {
      // Simulate API call (e.g., using fetch or axios)
      const response = await fetch('/api/submit-literacy-journal', { // Replace with your actual backend API URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        // Assuming your API returns a success status (e.g., 200 OK)
        setSubmissionStatus('success');
        handleClearForm(); // Clear form on successful submission
      } else {
        // Handle API errors (e.g., 400 Bad Request, 500 Internal Server Error)
        const errorData = await response.json();
        setSubmissionStatus('error');
        setErrorMessage(errorData.message || 'Terjadi kesalahan saat mengirim data.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionStatus('error');
      setErrorMessage('Tidak dapat terhubung ke server. Mohon coba lagi nanti.');
    } finally {
      setIsSubmitting(false); // End loading state
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-28 pb-12 flex justify-center items-start">
      {/* Container for the form */}
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 text-center mb-6">
          JURNAL LITERASI
        </h1>
        <p className="text-gray-600 text-center text-lg mb-4">
          PERPUSTAKAAN SMAN 6 BERAU
        </p>
        
        {/* Email Section - Mimicking Google Forms */}
        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 text-gray-700">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold">{loggedInEmail}</span>
            <button
              onClick={() => alert('Fitur "Ganti akun" akan memerlukan integrasi autentikasi.')}
              className="text-blue-600 hover:underline text-sm"
              type="button"
            >
              Ganti akun
            </button>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Tidak dibagikan
          </div>
          <p className="text-red-500 text-sm mt-3">* Menunjukkan pertanyaan yang wajib diisi</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nama Lengkap */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <label htmlFor="fullName" className="block text-lg font-medium text-gray-900 mb-2">
              Nama Lengkap <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base"
              placeholder="Jawaban Anda"
              required
            />
          </div>

          {/* Kelas */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <label htmlFor="kelas" className="block text-lg font-medium text-gray-900 mb-2">
              Kelas <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="kelas"
              name="kelas"
              value={kelas}
              onChange={(e) => setKelas(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base"
              placeholder="Jawaban Anda"
              required
            />
          </div>

          {/* Waktu Membaca Buku */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <label htmlFor="readingTime" className="block text-lg font-medium text-gray-900 mb-2">
              Waktu Membaca Buku <span className="text-red-500">*</span>
            </label>
            <input
              type="text" // Or type="time" or a custom time picker
              id="readingTime"
              name="readingTime"
              value={readingTime}
              onChange={(e) => setReadingTime(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base"
              placeholder="Waktu"
              required
            />
          </div>

          {/* Judul Buku */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <label htmlFor="bookTitle" className="block text-lg font-medium text-gray-900 mb-2">
              Judul Buku <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="bookTitle"
              name="bookTitle"
              value={bookTitle}
              onChange={(e) => setBookTitle(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base"
              placeholder="Jawaban Anda"
              required
            />
          </div>

          {/* Pengarang */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <label htmlFor="author" className="block text-lg font-medium text-gray-900 mb-2">
              Pengarang <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base"
              placeholder="Jawaban Anda"
              required
            />
          </div>

          {/* Tahun Terbit (Optional field - no asterisk) */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <label htmlFor="publicationYear" className="block text-lg font-medium text-gray-900 mb-2">
              Tahun Terbit
            </label>
            <input
              type="text" // Or type="number"
              id="publicationYear"
              name="publicationYear"
              value={publicationYear}
              onChange={(e) => setPublicationYear(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base"
              placeholder="Jawaban Anda"
            />
          </div>

          {/* Isi Singkat dari Buku yang dibaca */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <label htmlFor="bookSummary" className="block text-lg font-medium text-gray-900 mb-2">
              Isi Singkat dari Buku yang dibaca <span className="text-red-500">*</span>
            </label>
            <textarea
              id="bookSummary"
              name="bookSummary"
              value={bookSummary}
              onChange={(e) => setBookSummary(e.target.value)}
              rows={6} // Increased rows for more summary space
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base resize-y"
              placeholder="Jawaban Anda"
              required
            ></textarea>
          </div>

          {/* Submission Feedback */}
          {submissionStatus === 'success' && (
            <div className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
              <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
              <div>
                <span className="font-medium">Berhasil!</span> Jurnal literasi Anda telah terkirim. Terima kasih atas kontribusi Anda!
              </div>
            </div>
          )}

          {submissionStatus === 'error' && (
            <div className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              <XCircle className="w-5 h-5 mr-3 flex-shrink-0" />
              <div>
                <span className="font-medium">Gagal!</span> {errorMessage}
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
              {isSubmitting ? 'Mengirim...' : 'Submit'}
            </button>
            <button
              type="button"
              onClick={handleClearForm}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Clear form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}