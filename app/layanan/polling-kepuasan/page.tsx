'use client'; // Required for client components in Next.js

import React, { useState } from 'react';
import { Loader2, CheckCircle, XCircle } from 'lucide-react'; // Icons for loading and status

export default function KuisionerKepuasanPemustakaPage() {
  const [memberId, setMemberId] = useState(''); // Maps to member_id
  const [fullName, setFullName] = useState(''); // Maps to name
  const [gender, setGender] = useState(''); // Maps to gender (M/F)
  const [educationLevel, setEducationLevel] = useState(''); // Maps to education
  const [feedbackSuggestions, setFeedbackSuggestions] = useState(''); // Maps to feedback_suggestions

  // Dynamic questions and answers
  // This array will hold objects like { id: 1, question: "...", answer: "..." }
  const initialQuestions = [
    { id: 1, question: "Bagaimana kesan Anda terhadap koleksi buku yang tersedia di perpustakaan?", answer: "" },
    { id: 2, question: "Bagaimana tingkat kepuasan Anda terhadap fasilitas (misal: ruang baca, AC, komputer) yang ada di perpustakaan?", answer: "" },
    { id: 3, question: "Bagaimana tingkat kepuasan Anda terhadap pelayanan staf perpustakaan (misal: keramahan, kecepatan pelayanan)?", answer: "" },
    { id: 4, question: "Seberapa mudah Anda menemukan informasi atau buku yang Anda cari di perpustakaan?", answer: "" },
    { id: 5, question: "Apakah jam operasional perpustakaan sudah sesuai dengan kebutuhan Anda?", answer: "" },
    // Add more predefined questions as needed based on your survey
  ];
  const [questions, setQuestions] = useState(initialQuestions);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');

  // Email based on the provided image - should ideally come from auth
  const loggedInEmail = "putra.supra@gmail.com"; 

  const handleClearForm = () => {
    setMemberId('');
    setFullName('');
    setGender('');
    setEducationLevel('');
    setFeedbackSuggestions('');
    setQuestions(initialQuestions.map(q => ({ ...q, answer: "" }))); // Reset all answers
    setSubmissionStatus(null);
    setErrorMessage('');
  };

  const handleQuestionAnswerChange = (id: number, answer: string) => {
    setQuestions(prevQuestions => 
      prevQuestions.map(q => q.id === id ? { ...q, answer } : q)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => { // Explicitly type 'e'
    e.preventDefault();
    setSubmissionStatus(null); // Reset previous status
    setErrorMessage('');

    // Basic Validation for all required fields including all question answers
    if (!memberId || !fullName || !gender || !educationLevel || questions.some(q => q.answer === "")) {
      setErrorMessage('Harap lengkapi semua kolom wajib (termasuk semua jawaban kuisioner).');
      return;
    }

    setIsSubmitting(true); // Start loading state

    // --- API Endpoint: Replace with your actual backend API URL for this service ---
    const API_ENDPOINT = 'https://cms.perpustakaansditmadani.web.id/api/v1/service/questionnaire'; // Hypothetical endpoint for survey

    // Prepare questions data for API
    const formattedQuestions = questions.map(q => ({
      question: q.question,
      answer: q.answer
    }));

    // Construct the payload to EXACTLY match your provided JSON format
    const submissionData = {
      email: loggedInEmail,
      member_id: memberId,
      name: fullName,
      gender: gender === 'Laki-laki' ? 'M' : 'F', // Convert to 'M' or 'F' as per JSON
      education: educationLevel,
      feedback_suggestions: feedbackSuggestions,
      questions: formattedQuestions,
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
        const result = await response.json(); // Parse the response even on success to confirm
        console.log("API Success Response:", result);
        setSubmissionStatus('success');
        handleClearForm(); // Clear form on successful submission
      } else {
        const errorData = await response.json(); // Attempt to parse error details
        setSubmissionStatus('error');
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
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 text-center mb-6">
          KUISIONER SURVEI KEPUASAN PEMUSTAKA PADA PELAYANAN PERPUSTAKAAN MADANI
        </h1>
        <p className="text-gray-600 text-center text-lg mb-4">
          PERPUSTAKAAN MADANI
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
          {/* No. Anggota (from previous context, common for library forms) */}
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

          {/* Jenis Kelamin */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <label className="block text-lg font-medium text-gray-900 mb-2">
              Jenis Kelamin <span className="text-red-500">*</span>
            </label>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="genderLakiLaki"
                  name="gender"
                  value="Laki-laki"
                  checked={gender === 'Laki-laki'}
                  onChange={(e) => setGender(e.target.value)}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  required
                />
                <label htmlFor="genderLakiLaki" className="ml-2 block text-base text-gray-700">
                  Laki-laki
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="genderPerempuan"
                  name="gender"
                  value="Perempuan"
                  checked={gender === 'Perempuan'}
                  onChange={(e) => setGender(e.target.value)}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  required
                />
                <label htmlFor="genderPerempuan" className="ml-2 block text-base text-gray-700">
                  Perempuan
                </label>
              </div>
            </div>
          </div>

          {/* Pendidikan */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <label className="block text-lg font-medium text-gray-900 mb-2">
              Pendidikan <span className="text-red-500">*</span>
            </label>
            <div className="mt-2 space-y-2">
              {['SD/MI', 'SMP/MTs', 'SMA/MA', 'D1', 'D2', 'D3', 'D4', 'S1', 'S2', 'S3'].map((level) => (
                <div key={level} className="flex items-center">
                  <input
                    type="radio"
                    id={`education${level.replace(/\//g, '')}`}
                    name="education"
                    value={level}
                    checked={educationLevel === level}
                    onChange={(e) => setEducationLevel(e.target.value)}
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    required
                  />
                  <label htmlFor={`education${level.replace(/\//g, '')}`} className="ml-2 block text-base text-gray-700">
                    {level}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Questions Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm space-y-4">
            <h2 className="text-lg font-medium text-gray-900 mb-2">
              Pertanyaan Kuisioner <span className="text-red-500">*</span>
            </h2>
            {questions.map((q) => (
              <div key={q.id}>
                <label htmlFor={`question-${q.id}`} className="block text-base text-gray-800 mb-1">
                  {q.id}. {q.question}
                </label>
                <textarea
                  id={`question-${q.id}`}
                  value={q.answer}
                  onChange={(e) => handleQuestionAnswerChange(q.id, e.target.value)}
                  rows={2}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base resize-y"
                  placeholder="Jawaban Anda untuk pertanyaan ini"
                  required
                ></textarea>
              </div>
            ))}
          </div>

          {/* Saran dan Masukan (feedback_suggestions) */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <label htmlFor="feedbackSuggestions" className="block text-lg font-medium text-gray-900 mb-2">
              Saran dan Masukan (Opsional)
            </label>
            <textarea
              id="feedbackSuggestions"
              name="feedbackSuggestions"
              value={feedbackSuggestions}
              onChange={(e) => setFeedbackSuggestions(e.target.value)}
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base resize-y"
              placeholder="Berikan saran atau masukan Anda di sini..."
            ></textarea>
          </div>

          {/* Submission Feedback */}
          {submissionStatus === 'success' && (
            <div className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
              <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
              <div>
                <span className="font-medium">Berhasil!</span> Kuisioner Anda telah terkirim. Terima kasih atas partisipasi dan masukan Anda!
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