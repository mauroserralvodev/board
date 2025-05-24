import Image from "next/image";
import Link from "next/link";


export default function Custom404() {
  return (
    <div className="bg-white flex justify-center items-center h-screen">
        <div className="max-w-[50rem] flex flex-col mx-auto size-full">
            <header className="mb-auto flex justify-center z-50 w-full py-4">
                <nav className="px-4 sm:px-6 lg:px-8">
                <div className="relative w-[200px] h-[70px]">
                    <Image
                    src="/bplogo.png"
                    alt="Brinpage"
                    fill
                    className="object-contain"
                    priority
                    />
                </div>
                </nav>
            </header>
            <main id="content">
                <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
                <h1 className="block text-8xl font-bold text-[#ff7b00]  sm:text-[15rem]">404</h1>
                <p className="mt-3 text-black">Oops, something went wrong,</p>
                <p className="text-black">we couldn&apos;t find your page.</p>
                <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                    <Link href="/" className="sm:w-auto inline-flex justify-center items-center gap-x-2 font-medium bg-[#ff7b00] px-5 py-3 rounded-lg text-sm hover:bg-neutral-900 text-white border-0 transition">
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                        Go Back
                    </Link>
                </div>
                </div>
            </main>
            <footer className="mt-auto text-center py-5">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-sm text-gray-500">© 2025 BrinPage Software — All rights reserved.</p>
                </div>
            </footer>
        </div>
    </div>
  );
}