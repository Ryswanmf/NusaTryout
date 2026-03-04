import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';

export default function Index() {
    return (
        <MainLayout>
            <Head title="Beranda" />
            
            <div className="relative overflow-hidden bg-white pt-16 pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                            <h1>
                                <span className="block text-sm font-semibold uppercase tracking-wide text-blue-600 sm:text-base lg:text-sm xl:text-base">
                                    Segera Hadir
                                </span>
                                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                                    <span className="block text-gray-900">Platform Tryout Online</span>
                                    <span className="block text-blue-600">Terbaik di Indonesia</span>
                                </span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                Persiapkan dirimu menghadapi ujian dengan simulasi yang akurat, pembahasaan mendalam, dan analisis performa yang cerdas hanya di NusaTryout.
                            </p>
                            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                                <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition shadow-xl shadow-blue-200">
                                    Mulai Belajar Sekarang
                                </button>
                            </div>
                        </div>
                            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                            <div className="relative mx-auto w-full rounded-3xl shadow-2xl overflow-hidden aspect-video bg-blue-50 flex items-center justify-center border-4 border-white">
                                <div className="text-center p-8">
                                    <div className="w-20 h-20 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg transform -rotate-6">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">NusaTryout Pro</h3>
                                    <p className="text-blue-600 font-medium">Coming Soon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section: Mengapa Penting Ikut Tryout UTBK SNBT */}
            <div className="bg-white py-24 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Mengapa Penting Ikut Tryout UTBK SNBT?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Point 1 */}
                        <div className="bg-red-50 p-8 rounded-[2rem] border border-red-100">
                            <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-red-200">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Persaingan Super Ketat</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Dari tahun ke tahun, persentase kelulusan UTBK SNBT nggak pernah melebihi <strong>30%</strong>. Artinya, persaingan sangat ketat dengan jumlah peserta yang sangat besar.
                            </p>
                        </div>

                        {/* Point 2 */}
                        <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100">
                            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-200">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Perbesar Peluang Lolos</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Siswa yang sering ikut tryout memiliki peluang lebih besar lolos PTN. Mereka sudah tahu tipe soal, manajemen waktu, dan melakukan review sebelum ujian beneran.
                            </p>
                        </div>

                        {/* Point 3 */}
                        <div className="bg-green-50 p-8 rounded-[2rem] border border-green-100">
                            <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-green-200">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Latihan Sebenarnya</h3>
                            <p className="text-gray-600 leading-relaxed">
                                UTBK SNBT itu ibarat lomba lari, dan tryout adalah latihannya. Tanpa latihan, kamu nggak akan tahu bagaimana caranya sampai ke finish dengan waktu terbaik!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section: Keunggulan & Social Proof Detail */}
            <div className="bg-gray-900 py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                            Kenapa Harus di NusaTryout?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { val: '113.544', label: 'Pelajar Indonesia', desc: 'Sudah menggunakan fitur Tryout di aplikasi kami.' },
                            { val: '8 dari 10', label: 'Pengguna', desc: 'Mengatakan bahwa soal tryout kami mirip dengan UTBK asli.' },
                            { val: '61%', label: 'Pengguna', desc: 'Dinyatakan lolos SNBT setelah rutin memakai fitur ini.' },
                            { val: '6 dari 10', label: 'Pengguna', desc: 'Ingin merekomendasikan fitur ini kepada teman mereka.' },
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-gray-800/50 backdrop-blur p-8 rounded-3xl border border-gray-700 text-center">
                                <p className="text-4xl font-black text-blue-400 mb-2">{stat.val}</p>
                                <p className="text-white font-bold mb-2">{stat.label}</p>
                                <p className="text-gray-400 text-sm">{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section: Tutorial */}
            <div className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-gray-900">Tutorial Mengikuti Tryout</h2>
                        <p className="mt-4 text-gray-600">Nggak perlu ribet, ikuti langkah mudah berikut ini.</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            {[
                                'Buka aplikasi NusaTryout di smartphone atau laptop.',
                                'Daftar akun baru atau masuk menggunakan email kamu.',
                                'Pada halaman utama, pilih menu “Tryout”.',
                                'Pilih nama tryout yang ingin diikuti, lalu klik “Daftar”.',
                                'Pilih program studi (prodi) tujuan kamu.',
                                'Klik “Mulai Kerjakan” pada subtes yang kamu inginkan.',
                                'Kerjakan semua soal dan klik “Simpan Jawaban”.',
                                'Cek semua jawaban sebelum mengumpulkan.',
                                'Geser tombol “Submit Tryout” untuk mengakhiri.',
                                'Selamat! Tunggu hasilnya di menu Riwayat TO.'
                            ].map((step, idx) => (
                                <div key={idx} className="flex items-start">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                        {idx + 1}
                                    </div>
                                    <div className="ml-6 pt-2">
                                        <p className="text-gray-700 font-medium">{step}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Section: CTA Mimpi */}
            <div className="bg-blue-50 py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                        Mimpi Masuk PTN Aja Nggak Cukup. <br className="hidden md:block" />
                        <span className="text-blue-600">Ayo Ikut Tryout Sekarang!</span>
                    </h2>
                    <p className="mt-6 text-xl text-gray-600">Pilih paket tryout yang sesuai dengan kebutuhanmu.</p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link href="/paket-belajar" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition shadow-xl">
                            Lihat Semua Paket
                        </Link>
                        <Link href="/produk/tryout-utbk" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full border border-blue-200 hover:bg-gray-50 transition">
                            Coba Tryout Gratis
                        </Link>
                    </div>
                </div>
            </div>

            {/* Produk Section */}
            <div className="bg-gray-50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Produk Unggulan Kami
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                            Berbagai pilihan simulasi ujian yang dirancang khusus untuk membantumu meraih impian.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Tryout CPNS 2024', desc: 'Simulasi CAT BKN terbaru dengan sistem ranking nasional.' },
                            { title: 'UTBK - SNBT', desc: 'Latihan soal skolastik dan literasi paling akurat tahun ini.' },
                            { title: 'Kedinasan (STIS/IPDN)', desc: 'Persiapan khusus sekolah kedinasan dengan soal SKD & TPA.' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition group">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl mb-6 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section 4: Cara Kerja */}
            <div className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-gray-900">Mulai Belajar dalam 4 Langkah</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Daftar Akun', desc: 'Buat akun NusaTryout secara gratis dalam hitungan detik.' },
                            { step: '02', title: 'Pilih Paket', desc: 'Pilih paket ujian sesuai dengan jenjang yang kamu butuhkan.' },
                            { step: '03', title: 'Kerjakan Simulasi', desc: 'Gunakan sistem CBT kami yang akurat dan kumpulkan poinmu.' },
                            { step: '04', title: 'Lihat Analisis', desc: 'Dapatkan hasil instan beserta video pembahasan lengkap.' },
                        ].map((item, idx) => (
                            <div key={idx} className="relative text-center">
                                <div className="text-6xl font-black text-gray-100 mb-[-30px] z-0">{item.step}</div>
                                <div className="relative z-10">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Paket Belajar Section */}
            <div className="bg-gray-50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Pilih Paket Belajarmu
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Harga terjangkau untuk kualitas persiapan terbaik.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Paket Gratis */}
                        <div className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col hover:border-blue-300 transition shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900">Paket Free</h3>
                            <div className="mt-4 flex items-baseline">
                                <span className="text-4xl font-extrabold tracking-tight text-gray-900">Rp 0</span>
                            </div>
                            <p className="mt-4 text-gray-500">Cocok untuk mencoba fitur dasar kami.</p>
                            <ul className="mt-8 space-y-4 flex-1 text-sm text-gray-600 font-medium">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    1x Tryout Simulasi
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    Pembahasan Singkat
                                </li>
                            </ul>
                            <button className="mt-8 w-full py-3 px-6 rounded-full border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-50 transition">
                                Daftar Gratis
                            </button>
                        </div>

                        {/* Paket Premium */}
                        <div className="bg-blue-600 rounded-3xl p-8 flex flex-col shadow-2xl shadow-blue-200 relative transform scale-105 z-10">
                            <div className="absolute top-0 right-0 mt-4 mr-4 bg-yellow-400 text-yellow-900 text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">
                                Best Value
                            </div>
                            <h3 className="text-lg font-bold text-white">Paket Premium</h3>
                            <div className="mt-4 flex items-baseline text-white">
                                <span className="text-4xl font-extrabold tracking-tight">Rp 99k</span>
                                <span className="ml-1 text-xl font-medium">/3 bln</span>
                            </div>
                            <p className="mt-4 text-blue-100">Pilihan favorit para pejuang ujian.</p>
                            <ul className="mt-8 space-y-4 flex-1 text-sm text-blue-50 font-medium">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-blue-200 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    Akses 20+ Paket Tryout
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-blue-200 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    Video Pembahasan Expert
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-blue-200 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    Analisis Skor & Ranking
                                </li>
                            </ul>
                            <button className="mt-8 w-full py-3 px-6 rounded-full bg-white text-blue-600 font-bold hover:bg-gray-100 transition shadow-lg">
                                Beli Sekarang
                            </button>
                        </div>

                        {/* Paket Bisnis */}
                        <div className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col hover:border-blue-300 transition shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900">Paket Bimbel</h3>
                            <div className="mt-4 flex items-baseline">
                                <span className="text-4xl font-extrabold tracking-tight text-gray-900">Custom</span>
                            </div>
                            <p className="mt-4 text-gray-500">Solusi khusus untuk institusi & bimbel.</p>
                            <ul className="mt-8 space-y-4 flex-1 text-sm text-gray-600 font-medium">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    Dashboard Pengelola
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    Custom Soal & Branding
                                </li>
                            </ul>
                            <button className="mt-8 w-full py-3 px-6 rounded-full border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition">
                                Hubungi Kami
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 5: FAQ */}
            <div className="bg-gray-50 py-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-gray-900">Pertanyaan Umum</h2>
                        <p className="mt-4 text-gray-600">Punya pertanyaan? Kami punya jawabannya.</p>
                    </div>
                    <div className="space-y-4">
                        {[
                            { q: 'Apakah tryout ini bisa diakses melalui HP?', a: 'Ya! NusaTryout sepenuhnya responsif dan dapat diakses dengan nyaman melalui browser di smartphone, tablet, maupun laptop.' },
                            { q: 'Bagaimana cara melakukan pembayaran Paket Premium?', a: 'Kami mendukung berbagai metode pembayaran otomatis seperti QRIS, Transfer Bank, hingga E-Wallet (Gopay, OVO, Dana).' },
                            { q: 'Apakah soal-soal tryout selalu diperbarui?', a: 'Tentu. Tim konten kami selalu memperbarui bank soal mengikuti kisi-kisi dan tren ujian terbaru setiap tahunnya.' },
                            { q: 'Apakah ada grup diskusi untuk pejuang ujian?', a: 'Ya, bagi pengguna Paket Premium akan mendapatkan akses ke komunitas eksklusif untuk berdiskusi dengan mentor dan sesama peserta.' },
                        ].map((faq, idx) => (
                            <details key={idx} className="group bg-white rounded-2xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer transition-all hover:border-blue-300">
                                <summary className="flex items-center justify-between gap-4">
                                    <h3 className="text-lg font-bold text-gray-900">{faq.q}</h3>
                                    <span className="flex-shrink-0 transition duration-300 group-open:-rotate-180">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-4 leading-relaxed text-gray-600 border-t border-gray-50 pt-4">
                                    {faq.a}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section 6: CTA Banner */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-200">
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-blue-500 rounded-full opacity-20"></div>
                        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-blue-700 rounded-full opacity-20"></div>
                        
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                                Siap Menghadapi Ujian Sesungguhnya?
                            </h2>
                            <p className="mt-6 text-blue-100 text-lg md:text-xl font-medium">
                                Jangan tunda persiapanmu. Bergabunglah dengan ribuan siswa lainnya dan raih impianmu sekarang juga!
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/mulai-belajar" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition shadow-xl">
                                    Daftar Sekarang (Gratis)
                                </Link>
                                <Link href="/testimoni" className="px-8 py-4 bg-blue-700 text-white font-bold rounded-full border border-blue-500 hover:bg-blue-800 transition">
                                    Lihat Testimoni
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
