import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function MainLayout({ children }) {
    const { auth } = usePage().props;
    const [showingNavigationMenu, setShowingNavigationMenu] = useState(false);
    const [showingProdukDropdown, setShowingProdukDropdown] = useState(false);
    const [showingBisnisDropdown, setShowingBisnisDropdown] = useState(false);

    const navItems = [
        { name: 'Beranda', href: '/' },
        { 
            name: 'Produk', 
            href: '#', 
            isDropdown: true,
            id: 'produk',
            dropdownItems: {
                unggulan: [
                    { title: 'Analisis SNBP', desc: 'Prediksi kelulusan SNBP akurat.', href: '/produk/analisis-snbp' },
                    { title: 'Tryout UTBK', desc: 'Simulasi UTBK dengan skor prediktif.', href: '/produk/tryout-utbk' },
                ],
                jenjang: [
                    { name: '4 - 6 SD', href: '/produk/sd' },
                    { name: '7 - 9 SMP', href: '/produk/smp' },
                    { name: '10 - 11 SMA', href: '/produk/sma-10-11' },
                    { name: '12 SMA & UTBK', href: '/produk/sma-12-utbk' },
                    { name: 'Alumni', href: '/produk/alumni' },
                ]
            }
        },
        { 
            name: 'Bisnis', 
            href: '#',
            isDropdown: true,
            id: 'bisnis',
            dropdownItems: [
                { title: 'Layanan Bisnis', desc: 'Kerja sama sekolah dan mitra bisnis.', href: '/bisnis/layanan' },
                { title: 'Future Educators', desc: 'Komunitas online guru dan sekolah.', href: '/bisnis/community' },
                { title: 'Tentang Kami', desc: 'Profil PT Nusa TryOut.', href: '/tentang-kami' },
            ]
        },
        { name: 'Paket Belajar', href: '/paket-belajar' },
        { name: 'Testimoni', href: '/testimoni' },
        { name: 'Blog', href: '/blog' },
    ];

    return (
        <div className="min-h-screen bg-white">
            <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20">
                        <div className="flex items-center">
                            {/* Logo */}
                            <div className="flex-shrink-0 flex items-center">
                                <Link href="/" className="text-2xl font-black text-blue-600 tracking-tighter">
                                    NUSA<span className="text-gray-900">TRYOUT</span>
                                </Link>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex lg:items-center lg:space-x-8">
                            {navItems.map((item) => (
                                <div key={item.name} className="relative h-full flex items-center">
                                    {item.isDropdown ? (
                                        <div 
                                            className="h-full flex items-center"
                                            onMouseEnter={() => {
                                                if (item.id === 'produk') setShowingProdukDropdown(true);
                                                if (item.id === 'bisnis') setShowingBisnisDropdown(true);
                                            }}
                                            onMouseLeave={() => {
                                                if (item.id === 'produk') setShowingProdukDropdown(false);
                                                if (item.id === 'bisnis') setShowingBisnisDropdown(false);
                                            }}
                                        >
                                            <button
                                                className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600 transition outline-none"
                                            >
                                                {item.name}
                                                <svg className={`ml-1 h-4 w-4 transition-transform ${(item.id === 'produk' ? showingProdukDropdown : showingBisnisDropdown) ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>

                                            {/* Dropdown Menus */}
                                            {item.id === 'produk' && showingProdukDropdown && (
                                                <div className="absolute left-1/2 -translate-x-1/2 top-full w-[600px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 gap-8 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                                    <div>
                                                        <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">Unggulan</h3>
                                                        <div className="space-y-4">
                                                            {item.dropdownItems.unggulan.map((sub) => (
                                                                <Link key={sub.title} href={sub.href} className="group block">
                                                                    <p className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition">{sub.title}</p>
                                                                    <p className="text-xs text-gray-500">{sub.desc}</p>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="border-l border-gray-100 pl-8">
                                                        <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">Jenjang</h3>
                                                        <div className="grid grid-cols-1 gap-3">
                                                            {item.dropdownItems.jenjang.map((sub) => (
                                                                <Link key={sub.name} href={sub.href} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">
                                                                    {sub.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {item.id === 'bisnis' && showingBisnisDropdown && (
                                                <div className="absolute left-0 top-full w-[300px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                                    <div className="space-y-4">
                                                        {item.dropdownItems.map((sub) => (
                                                            <Link key={sub.title} href={sub.href} className="group block">
                                                                <p className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition">{sub.title}</p>
                                                                <p className="text-xs text-gray-500">{sub.desc}</p>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition"
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <div className="flex items-center space-x-4">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition shadow-lg shadow-blue-200"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="text-sm font-bold text-gray-600 hover:text-blue-600 transition"
                                        >
                                            Masuk
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition shadow-lg shadow-blue-200"
                                        >
                                            Daftar
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Hamburger */}
                        <div className="-mr-2 flex items-center lg:hidden">
                            <button
                                onClick={() => setShowingNavigationMenu(!showingNavigationMenu)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationMenu ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationMenu ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={(showingNavigationMenu ? 'block' : 'hidden') + ' lg:hidden'}>
                    <div className="pt-2 pb-3 space-y-1 px-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block py-2 text-base font-medium text-gray-600 hover:text-blue-600"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/mulai-belajar"
                            className="block py-2 text-base font-bold text-blue-600"
                        >
                            Mulai Belajar
                        </Link>
                    </div>
                </div>
            </nav>

            <main>{children}</main>

            <footer className="bg-gray-900 text-white pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        {/* Column 1: Brand */}
                        <div className="space-y-6">
                            <Link href="/" className="text-2xl font-black text-blue-500 tracking-tighter">
                                NUSA<span className="text-white">TRYOUT</span>
                            </Link>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Platform persiapan ujian online terbaik di Indonesia. Kami membantu siswa meraih impian masuk sekolah kedinasan, CPNS, dan PTN favorit.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.247 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.061 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.247-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.061-2.633-.333-3.608-1.308-.975-.975-1.247-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.061-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.247 3.608-1.308 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.353 2.62 6.77 6.98 6.97 1.281.058 1.689.072 4.948.072 3.259 0 3.667-.014 4.947-.072 4.354-.2 6.77-2.62 6.97-6.98.058-1.28.072-1.688.072-4.948s-.014-3.667-.072-4.947c-.2-4.352-2.62-6.77-6.98-6.97C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div>
                            <h4 className="text-lg font-bold mb-6">Navigasi</h4>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li><Link href="/" className="hover:text-blue-500 transition">Beranda</Link></li>
                                <li><Link href="/produk" className="hover:text-blue-500 transition">Produk Kami</Link></li>
                                <li><Link href="/paket-belajar" className="hover:text-blue-500 transition">Paket Belajar</Link></li>
                                <li><Link href="/blog" className="hover:text-blue-500 transition">Blog & Artikel</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Services */}
                        <div>
                            <h4 className="text-lg font-bold mb-6">Layanan</h4>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li><Link href="/produk/tryout-utbk" className="hover:text-blue-500 transition">Tryout UTBK</Link></li>
                                <li><Link href="/produk/sd" className="hover:text-blue-500 transition">Tryout SD</Link></li>
                                <li><Link href="/produk/smp" className="hover:text-blue-500 transition">Tryout SMP</Link></li>
                                <li><Link href="/bisnis/layanan" className="hover:text-blue-500 transition">Kerja Sama Sekolah</Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Contact */}
                        <div>
                            <h4 className="text-lg font-bold mb-6">Hubungi Kami</h4>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                    support@nusatryout.com
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                                    +62 812-3456-7890
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
                        <p>© 2024 PT Nusa TryOut Indonesia. Seluruh Hak Cipta Dilindungi.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link href="/privacy" className="hover:text-white transition">Kebijakan Privasi</Link>
                            <Link href="/terms" className="hover:text-white transition">Syarat & Ketentuan</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
