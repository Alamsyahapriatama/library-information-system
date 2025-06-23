'use client'; // Required for client components in Next.js

import React, { useState } from 'react';
import { Loader2, CheckCircle, XCircle } from 'lucide-react'; // Icons for loading and status

export default function LayananInformasiAduanPage() {
  const [memberId, setMemberId] = useState(''); // Maps to member_id
  const [fullName, setFullName] = useState(''); // Maps to name
  const [kelas, setKelas] = useState(''); // Maps to class
  const [inquiryDetail, setInquiryDetail] = useState(''); // Maps to content
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');

  // IMPORTANT: This email should come from your authentication system, not hardcoded.
  const loggedInEmail = "jhon.nie@gmail.com"; 

  const handleClearForm = () => {
    setMemberId('');
    setFullName('');
    setKelas('');
    setInquiryDetail('');
    setSubmissionStatus(null);
    setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => { // Explicitly type 'e'
    e.preventDefault();
    setSubmissionStatus(null); // Reset previous status
    setErrorMessage('');

    // Basic Validation for all required fields
    if (!memberId || !fullName || !kelas || !inquiryDetail) {
      setErrorMessage('Semua kolom wajib diisi.');
      return;
    }

    setIsSubmitting(true); // Start loading state

    // --- API Endpoint: REPLACE THIS WITH YOUR ACTUAL BACKEND API URL ---
    // Based on your previous context, this endpoint seems plausible for consultation/aduan.
    const API_ENDPOINT = 'https://cms-perpus.karuhundeveloper.com/api/v1/service/consultation'; 

    // Construct the payload to EXACTLY match your provided JSON format
    const submissionData = {
      email: loggedInEmail, // From loggedInEmail state/prop
      member_id: memberId, // From form input
      name: fullName, // From form input
      class: kelas, // From form input
      content: inquiryDetail, // From form textarea
    };

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // If your API requires an authorization token, uncomment and add it here:
          // 'Authorization': 'Bearer YOUR_AUTH_TOKEN_HERE', 
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        // Assuming your API returns a success status (e.g., 200 OK, 201 Created)
        const result = await response.json(); // Parse the response even on success to confirm
        console.log("API Success Response:", result);
        setSubmissionStatus('success');
        handleClearForm(); // Clear form on successful submission
      } else {
        // Handle API errors (e.g., 400 Bad Request, 500 Internal Server Error)
        const errorData = await response.json(); // Attempt to parse error details
        setSubmissionStatus('error');
        // Prioritize API message, then specific errors, then a generic message
        setErrorMessage(errorData.message || (errorData.errors ? Object.values(errorData.errors).flat().join(', ') : 'Terjadi kesalahan saat mengirim data.'));
      }
    } catch (error: any) { // Explicitly type 'error'
      console.error('Submission error:', error);
      setSubmissionStatus('error');
      setErrorMessage(`Tidak dapat terhubung ke server. Mohon coba lagi nanti. Detail: ${error.message}`);
    } finally {
      setIsSubmitting(false); // End loading state
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-28 pb-12 flex justify-center items-start">
      {/* Container for the form */}
      <div className="max-w-6xl w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 text-center mb-6">
          LAYANAN INFORMASI, KONSULTASI, DAN ADUAN
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
          {/* No. Anggota */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <label htmlFor="memberId" className="block text-lg font-medium text-gray-900 mb-2">
              No. Anggota <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="memberId"
              name="memberId"
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base"
              placeholder="Jawaban Anda"
              required
            />
          </div>

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

          {/* Informasi/konsultasi yang diperlukan atau aduan yang diajukan */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <label htmlFor="inquiryDetail" className="block text-lg font-medium text-gray-900 mb-2">
              Informasi/konsultasi yang diperlukan atau aduan yang diajukan <span className="text-red-500">*</span>
            </label>
            <textarea
              id="inquiryDetail"
              name="inquiryDetail"
              value={inquiryDetail}
              onChange={(e) => setInquiryDetail(e.target.value)}
              rows={4} // Adjust rows for desired height
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
                <span className="font-medium">Berhasil!</span> Permohonan/aduan Anda telah terkirim. Kami akan segera menindaklanjuti.
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