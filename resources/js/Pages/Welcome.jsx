import { Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50 min-h-screen flex flex-col items-center justify-center">
                <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                    <main className="mt-6">
                        <div className="grid gap-6 lg:grid-cols-1 lg:gap-8">
                            <div className="flex flex-col items-center justify-center text-center">
                                <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
                                    NusaTryout
                                </h1>
                                <p className="text-lg text-gray-600 dark:text-gray-400">
                                    Laravel {laravelVersion} (PHP v{phpVersion}) + Inertia + React + Tailwind CSS
                                </p>
                                <div className="mt-8 flex gap-4">
                                    <a
                                        href="https://laravel.com/docs"
                                        className="rounded-md px-4 py-2 bg-[#FF2D20] text-white font-semibold shadow-sm hover:bg-[#e62a1c] transition"
                                    >
                                        Documentation
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>

                    <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                        Laravel v{laravelVersion} (PHP v{phpVersion})
                    </footer>
                </div>
            </div>
        </>
    );
}
