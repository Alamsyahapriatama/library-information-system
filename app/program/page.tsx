import Link from 'next/link';
import Image from 'next/image';
import { CalendarDays } from "lucide-react"; // CalendarDays tetap dipertahankan untuk Agenda

// Menggunakan alias jalur (@/) menunjuk ke root proyek Anda.
import programData from '@/app/data/program.json';

interface Program {
  slug: string;
  title: string;
  content: string;
  coverImage: string; // Renamed from 'image' to 'coverImage'
  images?: string[]; // Optional array of image URLs
}

export default function ProgramListPage() { // Nama komponen yang lebih deskriptif
  const programs: Program[] = programData as Program[];

  // Dummy data untuk sidebar, disesuaikan agar relevan dengan program
  const layananLinks = [
    { name: 'PENDAFTARAN PROGRAM', href: '#' },
    { name: 'JADWAL KEGIATAN', href: '#' },
    { name: 'MATERI PROGRAM', href: '#' },
    { name: 'FAQ PROGRAM', href: '#' },
  ];
  const kategoriProgramLinks = [ // Contoh, bisa diganti dengan kategori program atau tag
    { name: 'AKADEMIK', href: '#' },
    { name: 'NON-AKADEMIK', href: '#' },
    { name: 'PENGEMBANGAN DIRI', href: '#' },
    { name: 'SENI & BUDAYA', href: '#' },
  ];
  const relatedLinks = [
    { name: 'Youtube', logo: '/images/youtube.jpeg', href: '#' },
    { name: 'BANK INDONESIA', logo: '/images/bi.png', href: '#' },
    { name: 'KEMENKEU', logo: '/images/kemenkeu.png', href: '#' },
    { name: 'BINTANG PUSNAS', logo: '/images/bintang-pusnas.png', href: '#' },
    { name: 'BAPENAS', logo: '/images/bapennas.png', href: '#' },
    { name: 'SDIT Madani', logo: '/images/sman.jpeg', href: '#' },
    { name: 'BPS', logo: '/images/bps.jpeg', href: '#' },
  ];

  // Agenda Data (dipertahankan dari BeritaPage, disesuaikan sedikit)
  const agendaItem = {
    date: { day: "24", month: "JUNI", year: "2025" }, // Adjusted to current date
    title: "Rapat Anggaran Tahunan",
    location: "Ruang Rapat SDIT Madani",
    link: "#",
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Top Banner Image (Mirip E-book Page) */}
      <div className="relative w-full h-[250px] md:h-[300px] overflow-hidden bg-gradient-to-r from-blue-700 to-blue-900 text-white pt-28">
        <Image
          src="/images/gamber-perpus.jpg"
          alt="Koleksi Program Banner"
          fill
          className="object-cover opacity-20"
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-2 uppercase tracking-wide">Temukan</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">KOLEKSI PROGRAM</h1>
          <p className="text-2xl md:text-3xl font-semibold mt-2">Perpustakaan</p>
        </div>
      </div>

      <div className="max-w-screen-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content: Program List */}
        <div className="lg:col-span-3 space-y-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Daftar Program Tersedia</h2>
          {programs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program) => (
                <Link
                  href={`/program/${program.slug}`}
                  key={program.slug}
                  className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
                >
                  <div className="relative w-full h-60"> {/* Tinggi gambar yang konsisten */}
                    <Image
                      src={program.coverImage} // Corrected line
                      alt={program.title}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 700px"
                    />

                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 mb-1 line-clamp-2">{program.title}</h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-3">
                      {program.content.length > 100 // Tampilkan lebih banyak teks untuk preview
                        ? program.content.substring(0, 100) + '...'
                        : program.content}
                    </p>
                    <p className="text-blue-600 text-sm font-medium mt-2">Lihat Detail Program &rarr;</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 text-lg">Tidak ada Program tersedia saat ini.</p>
          )}

          {/* Pagination (Dummy, seperti E-book Page) */}
          <div className="flex justify-center items-center space-x-2 mt-10">
            <Link href="#" className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200">&laquo;</Link>
            {[1, 2, 3].map(page => (
              <Link href="#" key={page} className={`px-3 py-1 border border-gray-300 rounded-md ${page === 1 ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}>
                {page}
              </Link>
            ))}
            <span className="px-3 py-1 text-gray-700">...</span>
            <Link href="#" className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200">&raquo;</Link>
          </div>
        </div>
      </div>

      {/* Related Links Section (sama seperti E-book Page) */}
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