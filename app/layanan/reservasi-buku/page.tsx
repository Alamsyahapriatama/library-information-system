'use client'

import React, { useState } from 'react'
import { BookOpen, Calendar, Clock } from 'lucide-react'

// Define interface for form state
interface ReservationFormState {
  nama: string;
  kelas: string;
  nisn: string;
  email: string;
  telepon: string;
  tanggalAmbil: string;
  catatan: string;
  selectedBookTitle: string; // Only title needed if no book selection list
}

export default function ReservaBukuPage() {
  const [reservationForm, setReservationForm] = useState<ReservationFormState>({
    nama: '',
    kelas: '',
    nisn: '',
    email: '',
    telepon: '',
    tanggalAmbil: '',
    catatan: '',
    selectedBookTitle: '', // Initialize empty as it will be manually entered or pre-filled
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null)

  // --- API Endpoint ---
  const API_RESERVATION_ENDPOINT = 'https://cms.perpustakaansditmadani.web.id/api/v1/service/book-reservation';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setReservationForm({
      ...reservationForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null);
    setIsSubmitting(true);

    if (!reservationForm.selectedBookTitle) {
      setSubmitError('Harap masukkan judul buku yang ingin direservasi.');
      setIsSubmitting(false);
      return;
    }

    // Construct the payload based on common API expectations for a reservation
    const payload = {
      email: reservationForm.email,
      member_id: reservationForm.nisn, // Assuming 'nisn' maps to 'member_id'
      book_title: reservationForm.selectedBookTitle,
      class: reservationForm.kelas, // 'kelas' maps to 'class'
      name: reservationForm.nama, // Sending full name
      phone: reservationForm.telepon, // Sending phone number
      pickup_date: reservationForm.tanggalAmbil, // Sending pickup date
      notes: reservationForm.catatan, // Sending additional notes
    };

    try {
      const response = await fetch(API_RESERVATION_ENDPOINT, {
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
        const errorMessage = result.message || `Terjadi kesalahan ${response.status} saat mengirim reservasi.`;
        setSubmitError(errorMessage);
        alert(`Reservasi gagal: ${errorMessage}`);
      } else {
        console.log('Reservation successful:', result);
        setSubmitSuccess('Reservasi berhasil dikirim! Kami akan menghubungi Anda untuk konfirmasi.');
        alert('Reservasi berhasil dikirim! Kami akan menghubungi Anda untuk konfirmasi.');
        // Clear form after successful submission
        setReservationForm({
          nama: '',
          kelas: '',
          nisn: '',
          email: '',
          telepon: '',
          tanggalAmbil: '',
          catatan: '',
          selectedBookTitle: '',
        });
      }
    } catch (err: any) {
      console.error("Network or unexpected error:", err);
      setSubmitError(`Gagal terhubung ke server: ${err.message}`);
      alert(`Reservasi gagal: Gagal terhubung ke server. ${err.message}`);
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Reservasi Buku
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Isi formulir di bawah untuk memesan buku favorit Anda dan ambil sesuai jadwal yang telah ditentukan.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Reservation Form */}
        <div id="reservation-form-section" className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Form Reservasi Buku</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="selectedBookTitle" className="block text-sm font-medium text-gray-700 mb-1">
                Judul Buku yang Ingin Direreservasi *
              </label>
              <input
                type="text"
                id="selectedBookTitle"
                name="selectedBookTitle"
                required
                value={reservationForm.selectedBookTitle}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Masukkan judul buku"
              />
            </div>

            <div>
              <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-1">
                Nama Lengkap *
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                required
                value={reservationForm.nama}
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
                value={reservationForm.kelas}
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
                value={reservationForm.nisn}
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
                value={reservationForm.email}
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
                value={reservationForm.telepon}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="tanggalAmbil" className="block text-sm font-medium text-gray-700 mb-1">
                Tanggal Pengambilan *
              </label>
              <input
                type="date"
                id="tanggalAmbil"
                name="tanggalAmbil"
                required
                value={reservationForm.tanggalAmbil}
                onChange={handleInputChange}
                min={today}
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
                value={reservationForm.catatan}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Catatan khusus untuk reservasi..."
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
              disabled={isSubmitting || !reservationForm.selectedBookTitle}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Mengirim Reservasi...' : 'Kirim Reservasi'}
            </button>
          </form>

          {/* Info Box */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-900">Informasi Penting</h4>
                <ul className="text-sm text-blue-700 mt-1 space-y-1">
                  <li>• Reservasi berlaku maksimal 3 hari</li>
                  <li>• Konfirmasi via WhatsApp/Email</li>
                  <li>• Bawa kartu pelajar saat pengambilan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}