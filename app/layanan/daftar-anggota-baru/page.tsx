'use client'

import React, { useState } from 'react'
import { UserPlus, Calendar, Home, Users } from 'lucide-react' // Updated icons

// Define interface for new member form state
interface NewMemberFormState {
  namaLengkap: string;
  tempatLahir: string; // New field for Place of Birth
  tanggalLahir: string; // Existing, but now for Date of Birth
  jenisKelamin: string; // New field for Gender
  alamat: string; // New field for Address
  kategoriAnggota: string; // New field for Member Category
  email: string;
  telepon: string;
}

export default function NewMemberRegistrationPage() {
  const [newMemberForm, setNewMemberForm] = useState<NewMemberFormState>({
    namaLengkap: '',
    tempatLahir: '',
    tanggalLahir: '',
    jenisKelamin: '',
    alamat: '',
    kategoriAnggota: '',
    email: '',
    telepon: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null)

  // --- API Endpoint (Placeholder - you'll need to define your actual API endpoint) ---
  // You'll need to replace this with your actual API endpoint for new member registration.
  const API_NEW_MEMBER_ENDPOINT = 'https://your-api-backend.com/api/v1/members/register'; 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setNewMemberForm({
      ...newMemberForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null);
    setIsSubmitting(true);

    // Basic validation
    if (!newMemberForm.namaLengkap || !newMemberForm.tanggalLahir || !newMemberForm.jenisKelamin || !newMemberForm.alamat || !newMemberForm.kategoriAnggota) {
      setSubmitError('Harap lengkapi semua bidang yang wajib diisi (*).');
      setIsSubmitting(false);
      return;
    }

    // Construct the payload based on common API expectations for new member registration
    const payload = {
      full_name: newMemberForm.namaLengkap,
      place_of_birth: newMemberForm.tempatLahir,
      date_of_birth: newMemberForm.tanggalLahir,
      gender: newMemberForm.jenisKelamin,
      address: newMemberForm.alamat,
      member_category: newMemberForm.kategoriAnggota,
      email: newMemberForm.email,
      phone: newMemberForm.telepon,
    };

    try {
      const response = await fetch(API_NEW_MEMBER_ENDPOINT, {
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
        const errorMessage = result.message || `Terjadi kesalahan ${response.status} saat mendaftar anggota baru.`;
        setSubmitError(errorMessage);
        alert(`Pendaftaran gagal: ${errorMessage}`);
      } else {
        console.log('New member registration successful:', result);
        setSubmitSuccess('Pendaftaran anggota baru berhasil! Selamat datang.');
        alert('Pendaftaran anggota baru berhasil! Selamat datang.');
        // Clear form after successful submission
        setNewMemberForm({
          namaLengkap: '',
          tempatLahir: '',
          tanggalLahir: '',
          jenisKelamin: '',
          alamat: '',
          kategoriAnggota: '',
          email: '',
          telepon: '',
        });
      }
    } catch (err: any) {
      console.error("Network or unexpected error:", err);
      setSubmitError(`Gagal terhubung ke server: ${err.message}`);
      alert(`Pendaftaran gagal: Gagal terhubung ke server. ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800"> {/* Changed color */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <UserPlus className="h-16 w-16 mx-auto mb-4" /> {/* Changed icon */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pendaftaran Anggota Baru
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto"> {/* Changed color */}
              Bergabunglah dengan kami! Isi formulir di bawah untuk menjadi anggota perpustakaan kami.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Registration Form */}
        <div id="registration-form-section" className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Formulir Pendaftaran Anggota</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="namaLengkap" className="block text-sm font-medium text-gray-700 mb-1">
                Nama Lengkap *
              </label>
              <input
                type="text"
                id="namaLengkap"
                name="namaLengkap"
                required
                value={newMemberForm.namaLengkap}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" // Changed color
                placeholder="Masukkan nama lengkap Anda"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="tempatLahir" className="block text-sm font-medium text-gray-700 mb-1">
                  Tempat Lahir *
                </label>
                <input
                  type="text"
                  id="tempatLahir"
                  name="tempatLahir"
                  required
                  value={newMemberForm.tempatLahir}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" // Changed color
                  placeholder="Contoh: Jakarta"
                />
              </div>
              <div>
                <label htmlFor="tanggalLahir" className="block text-sm font-medium text-gray-700 mb-1">
                  Tanggal Lahir *
                </label>
                <input
                  type="date"
                  id="tanggalLahir"
                  name="tanggalLahir"
                  required
                  value={newMemberForm.tanggalLahir}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" // Changed color
                />
              </div>
            </div>

            <div>
              <label htmlFor="jenisKelamin" className="block text-sm font-medium text-gray-700 mb-1">
                Jenis Kelamin *
              </label>
              <select
                id="jenisKelamin"
                name="jenisKelamin"
                required
                value={newMemberForm.jenisKelamin}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" // Changed color
              >
                <option value="">Pilih Jenis Kelamin</option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>

            <div>
              <label htmlFor="alamat" className="block text-sm font-medium text-gray-700 mb-1">
                Alamat Lengkap *
              </label>
              <textarea
                id="alamat"
                name="alamat"
                rows={3}
                required
                value={newMemberForm.alamat}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" // Changed color
                placeholder="Masukkan alamat lengkap Anda"
              />
            </div>

            <div>
              <label htmlFor="kategoriAnggota" className="block text-sm font-medium text-gray-700 mb-1">
                Kategori Anggota *
              </label>
              <select
                id="kategoriAnggota"
                name="kategoriAnggota"
                required
                value={newMemberForm.kategoriAnggota}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" // Changed color
              >
                <option value="">Pilih Kategori</option>
                <option value="Umum">Umum</option>
                <option value="Murid">Murid</option>
                <option value="Guru">Guru</option>
                <option value="Tendik">Tenaga Pendidik</option>
              </select>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={newMemberForm.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" // Changed color
                placeholder="Opsional"
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
                value={newMemberForm.telepon}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" // Changed color
                placeholder="Opsional"
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
              disabled={isSubmitting}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed" // Changed color
            >
              {isSubmitting ? 'Mengirim Pendaftaran...' : 'Daftar Sekarang'}
            </button>
          </form>

          {/* Info Box */}
          <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4"> {/* Changed color */}
            <div className="flex items-start space-x-3">
              <Users className="h-5 w-5 text-green-600 mt-0.5" /> {/* Changed icon and color */}
              <div>
                <h4 className="font-medium text-green-900">Informasi Penting Pendaftaran</h4> {/* Changed color */}
                <ul className="text-sm text-green-700 mt-1 space-y-1"> {/* Changed color */}
                  <li>• Pastikan semua data yang dimasukkan benar dan akurat.</li>
                  <li>• Anda akan menerima konfirmasi pendaftaran melalui email atau WhatsApp jika disediakan.</li>
                  <li>• Kartu anggota akan diterbitkan setelah pendaftaran diverifikasi.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}