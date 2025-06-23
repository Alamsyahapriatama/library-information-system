'use client'; // Required for client components in Next.js

import React, { useState } from 'react';
import { Loader2, CheckCircle, XCircle } from 'lucide-react'; // Icons for loading and status

export default function PengajuanPendampinganAkreditasiPage() { // Component name remains consistent
  const [fullName, setFullName] = useState(''); // Maps to 'name'
  const [originInstitution, setOriginInstitution] = useState(''); // Maps to 'organization'
  const [address, setAddress] = useState(''); // Maps to 'address'
  const [phoneNumber, setPhoneNumber] = useState(''); // Maps to 'phone'
  const [position, setPosition] = useState(''); // Maps to 'position' (optional)
  const [purpose, setPurpose] = useState(''); // Maps to 'purpose'
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null); // Explicitly type submissionStatus
  const [errorMessage, setErrorMessage] = useState('');

  // Email based on the provided image
  const loggedInEmail = "supra.alex@gmail.com"; 

  const handleClearForm = () => {
    setFullName('');
    setOriginInstitution('');
    setAddress('');
    setPhoneNumber('');
    setPosition('');
    setPurpose('');
    setSubmissionStatus(null);
    setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => { // Explicitly type 'e'
    e.preventDefault();
    setSubmissionStatus(null); // Reset previous status
    setErrorMessage('');

    // Basic Validation for all *required* fields
    if (!fullName || !originInstitution || !address || !phoneNumber || !purpose) {
      setErrorMessage('Semua kolom wajib diisi.');
      return;
    }

    setIsSubmitting(true); // Start loading state

    // --- IMPORTANT: REPLACE THIS API ENDPOINT WITH YOUR ACTUAL BACKEND API URL FOR ACCREDITATION ASSISTANCE ---
    // This is a hypothetical endpoint. You need to get the actual one from your backend developer.
    const API_ENDPOINT = 'https://cms-perpus.karuhundeveloper.com/api/v1/service/accreditation-assistance'; // Example API endpoint

    // Construct the payload to EXACTLY match your provided JSON format
    const submissionData = {
      email: loggedInEmail,
      name: fullName,
      organization: originInstitution,
      address: address,
      phone: phoneNumber,
      position: position, // This field is optional based on your JSON (can be an empty string if not filled)
      purpose: purpose,
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
          PENGAJUAN PENDAMPINGAN AKREDITASI
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

          {/* Asal Instansi/Organisasi */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <label htmlFor="originInstitution" className="block text-lg font-medium text-gray-900 mb-2">
              Asal Instansi/Organisasi <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="originInstitution"
              name="originInstitution"
              value={originInstitution}
              onChange={(e) => setOriginInstitution(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base"
              placeholder="Jawaban Anda"
              required
            />
          </div>

          {/* Alamat */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <label htmlFor="address" className="block text-lg font-medium text-gray-900 mb-2">
              Alamat <span className="text-red-500">*</span>
            </label>
            <textarea
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3} // Adjust rows for desired height
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base resize-y"
              placeholder="Jawaban Anda"
              required
            ></textarea>
          </div>

          {/* No. Hp */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <label htmlFor="phoneNumber" className="block text-lg font-medium text-gray-900 mb-2">
              No. Hp <span className="text-red-500">*</span>
            </label>
            <input
              type="tel" // Using type="tel" for phone numbers
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base"
              placeholder="Jawaban Anda"
              required
            />
          </div>

          {/* Jabatan (Optional field - no asterisk) */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <label htmlFor="position" className="block text-lg font-medium text-gray-900 mb-2">
              Jabatan
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base"
              placeholder="Jawaban Anda (Opsional)" // Added placeholder for optional field
            />
          </div>

          {/* Keperluan */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <label htmlFor="purpose" className="block text-lg font-medium text-gray-900 mb-2">
              Keperluan <span className="text-red-500">*</span>
            </label>
            <textarea
              id="purpose"
              name="purpose"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
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
                <span className="font-medium">Berhasil!</span> Pengajuan pendampingan akreditasi Anda telah terkirim. Kami akan segera menghubungi Anda.
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