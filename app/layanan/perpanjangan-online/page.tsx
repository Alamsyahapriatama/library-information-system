'use client'

import React, { useState } from 'react'
import { BookOpen, Calendar, Clock } from 'lucide-react'

// Define interface for form state, adjusted for API's expected 'book_id'
interface RenewalFormState {
  nama: string;
  kelas: string;
  nisn: string;
  email: string;
  telepon: string;
  bookId: string; // Changed to bookId as per your API response
  newReturnDate: string; // Renamed to reflect the 'renewal' purpose, maps to tanggalAmbil
  catatan: string;
}

export default function ReservaBukuPage() {
  const [renewalForm, setRenewalForm] = useState<RenewalFormState>({
    nama: '',
    kelas: '',
    nisn: '',
    email: '',
    telepon: '',
    bookId: '', // User will input book ID
    newReturnDate: '', // User will select new return date
    catatan: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null)

  // --- API Endpoint (Keeping the original reservation endpoint as per your API's behavior) ---
  const API_ENDPOINT = 'https://cms-perpus.karuhundeveloper.com/api/v1/service/online-renewal'; // Using the original endpoint based on your JSON response

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setRenewalForm({
      ...renewalForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null);
    setIsSubmitting(true);

    // Basic validation for required fields
    if (!renewalForm.bookId || !renewalForm.newReturnDate || !renewalForm.nama || !renewalForm.kelas || !renewalForm.nisn) {
      setSubmitError('Harap lengkapi semua bidang wajib: ID Buku, Tanggal Pengembalian Baru, Nama, Kelas, dan NISN.');
      setIsSubmitting(false);
      return;
    }

    // Construct the payload to match your API's expected 'book_id', 'member_id', etc.
    const payload = {
      email: renewalForm.email,
      name: renewalForm.nama,
      member_id: renewalForm.nisn, // Maps to 'nisn' from form
      book_id: renewalForm.bookId, // Use 'bookId' from form, as per your API response
      class: renewalForm.kelas, // Maps to 'kelas' from form
      phone: renewalForm.telepon,
      pickup_date: renewalForm.newReturnDate, // Using this field to represent the new return date for renewal
      notes: renewalForm.catatan,
    };

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // If your API requires an authorization token, uncomment and replace 'YOUR_AUTH_TOKEN_HERE'
          // 'Authorization': 'Bearer YOUR_AUTH_TOKEN_HERE',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("API Error Response:", result);
        // Provide more specific error if API sends validation errors
        const errorMessage = result.message || (result.errors ? Object.values(result.errors).flat().join(', ') : `Terjadi kesalahan ${response.status} saat mengirim perpanjangan.`);
        setSubmitError(errorMessage);
        alert(`Perpanjangan gagal: ${errorMessage}`);
      } else {
        console.log('API Success Response:', result);
        setSubmitSuccess('Permintaan perpanjangan berhasil dikirim! Kami akan menghubungi Anda untuk konfirmasi.');
        alert('Permintaan perpanjangan berhasil dikirim! Kami akan menghubungi Anda untuk konfirmasi.');
        // Clear form after successful submission
        setRenewalForm({
          nama: '',
          kelas: '',
          nisn: '',
          email: '',
          telepon: '',
          bookId: '',
          newReturnDate: '',
          catatan: '',
        });
      }
    } catch (err: any) {
      console.error("Network or unexpected error:", err);
      setSubmitError(`Gagal terhubung ke server: ${err.message}`);
      alert(`Perpanjangan gagal: Gagal terhubung ke server. ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  }

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <BookOpen className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-6xl md:text-5xl font-bold mb-4">
              Formulir Perpanjangan Online
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ajukan perpanjangan masa pinjam buku Anda dengan mudah melalui formulir ini.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Renewal Form */}
        <div id="renewal-form-section" className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Informasi Perpanjangan Buku</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="bookId" className="block text-sm font-medium text-gray-700 mb-1">
                ID Buku yang Akan Diperpanjang *
              </label>
              <input
                type="text"
                id="bookId"
                name="bookId"
                required
                value={renewalForm.bookId}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Contoh: GOAT01"
              />
            </div>

            <div>
              <label htmlFor="newReturnDate" className="block text-sm font-medium text-gray-700 mb-1">
                Tanggal Pengembalian Baru yang Diminta *
              </label>
              <input
                type="date"
                id="newReturnDate"
                name="newReturnDate"
                required
                value={renewalForm.newReturnDate}
                onChange={handleInputChange}
                min={today} 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Informasi Peminjam</h2>

            <div>
              <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-1">
                Nama Lengkap *
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                required
                value={renewalForm.nama}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="kelas" className="block text-sm font-medium text-gray-700 mb-1">
                Kelas *
              </label>
              <select
                id="kelas"
                name="kelas"
                required
                value={renewalForm.kelas}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Pilih Kelas</option>
                <option value="X IPA 1">X IPA 1</option>
                <option value="X IPA 2">X IPA 2</option>
                <option value="X IPS 1">X IPS 1</option>
                <option value="XI IPA 1">XI IPA 1</option>
                <option value="XI IPA 2">XI IPA 2</option>
                <option value="XI IPS 1">XI IPS 1</option>
                <option value="XII IPA 1">XII IPA 1</option>
                <option value="XII IPA 2">XII IPA 2</option>
                <option value="XII IPS 1">XII IPS 1</option>
              </select>
            </div>

            <div>
              <label htmlFor="nisn" className="block text-sm font-medium text-gray-700 mb-1">
                NISN *
              </label>
              <input
                type="text"
                id="nisn"
                name="nisn"
                required
                value={renewalForm.nisn}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={renewalForm.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="telepon" className="block text-sm font-medium text-gray-700 mb-1">
                No. Telepon/WhatsApp
              </label>
              <input
                type="tel"
                id="telepon"
                name="telepon"
                value={renewalForm.telepon}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="catatan" className="block text-sm font-medium text-gray-700 mb-1">
                Catatan Tambahan
              </label>
              <textarea
                id="catatan"
                name="catatan"
                rows={3}
                value={renewalForm.catatan}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Contoh: Ada sedikit kerusakan pada halaman 5"
              />
            </div>

            {submitError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error!</strong>
                <span className="block sm:inline"> {submitError}</span>
              </div>
            )}
            {submitSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Sukses!</strong>
                <span className="block sm:inline"> {submitSuccess}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting || !renewalForm.bookId || !renewalForm.newReturnDate || !renewalForm.nama || !renewalForm.kelas || !renewalForm.nisn}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Mengirim Permintaan...' : 'Kirim Permintaan Perpanjangan'}
            </button>
          </form>

          {/* Info Box */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-900">Informasi Penting Perpanjangan</h4>
                <ul className="text-sm text-blue-700 mt-1 space-y-1">
                  <li>• Permintaan perpanjangan akan diproses oleh petugas perpustakaan.</li>
                  <li>• Konfirmasi status perpanjangan akan dikirim via WhatsApp/Email.</li>
                  <li>• Perpanjangan disetujui berdasarkan ketersediaan dan kebijakan perpustakaan.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}