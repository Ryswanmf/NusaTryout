import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-bold leading-tight text-gray-800">
                    Dashboard Belajar
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Welcome Banner */}
                    <div className="overflow-hidden bg-blue-600 rounded-[2rem] shadow-2xl shadow-blue-100 mb-8 relative">
                        <div className="p-10 md:p-16 relative z-10">
                            <h3 className="text-3xl md:text-4xl font-black text-white">Selamat Datang Pejuang Ujian! 🚀</h3>
                            <p className="mt-4 text-blue-100 text-lg max-w-2xl font-medium">
                                Kesuksesan tidak datang dari apa yang kamu lakukan sesekali, tapi dari apa yang kamu lakukan secara konsisten. Mulai latihanmu hari ini!
                            </p>
                            <div className="mt-8">
                                <Link href="#" className="px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition shadow-lg inline-block text-sm">
                                    Lihat Semua Paket Tryout
                                </Link>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Tryout Selesai</p>
                            <p className="text-4xl font-black text-gray-900 mt-2">0</p>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Rata-rata Skor</p>
                            <p className="text-4xl font-black text-gray-900 mt-2">0.0</p>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Peringkat Global</p>
                            <p className="text-4xl font-black text-gray-900 mt-2">—</p>
                        </div>
                    </div>

                    {/* Available Tryouts Section */}
                    <div className="mb-8">
                        <div className="flex justify-between items-center mb-6 px-4 sm:px-0">
                            <h4 className="text-2xl font-black text-gray-900">Tryout Tersedia</h4>
                            <Link href="#" className="text-blue-600 font-bold text-sm hover:underline">Lihat Semua</Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: 'Tryout Gratis SNBT 2024', sub: 'Subtes: Literasi & Skolastik', type: 'Gratis' },
                                { title: 'Simulasi CAT CPNS #1', sub: 'Subtes: TWK, TIU, TKP', type: 'Premium' },
                                { title: 'Kedinasan STIS Special', sub: 'Subtes: Matematika & TPA', type: 'Premium' },
                            ].map((to, idx) => (
                                <div key={idx} className="bg-white rounded-[2.5rem] border border-gray-100 p-8 hover:shadow-2xl hover:shadow-blue-50 transition duration-500 group relative">
                                    <span className={`absolute top-6 right-8 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full ${to.type === 'Gratis' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-700'}`}>
                                        {to.type}
                                    </span>
                                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition duration-500">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
                                    </div>
                                    <h5 className="text-xl font-bold text-gray-900 mb-2">{to.title}</h5>
                                    <p className="text-sm text-gray-500 mb-8">{to.sub}</p>
                                    <button className="w-full py-3 bg-gray-50 text-gray-900 font-bold rounded-xl group-hover:bg-blue-600 group-hover:text-white transition duration-500">
                                        Kerjakan Sekarang
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
