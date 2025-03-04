import Link from "next/link";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100 py-4 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2 transition-colors">
              <span className="text-2xl font-bold">
                <span className="text-mulberry-600">undo</span><span className="text-gray-800">.wiki</span>
              </span>
              <span className="text-sm text-gray-500 hidden sm:inline-block">The art of fixing mistakes</span>
            </Link>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/wiki" className="text-gray-600 hover:text-mulberry-600 font-medium transition-colors">
                    Articles
                  </Link>
                </li>
                <li>
                  <Link href="/contribute" className="text-gray-600 hover:text-mulberry-600 font-medium transition-colors">
                    Contribute
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-mulberry-600 font-medium transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-white border-t border-gray-100 py-8 text-gray-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <p className="mb-2">&copy; {new Date().getFullYear()} <span className="text-mulberry-600">undo</span><span className="text-gray-800">.wiki</span></p>
              <p className="text-sm text-gray-500">
                Content licensed under <Link href="/CONTENT-LICENSE" className="text-mulberry-600 hover:underline">CC BY-SA 4.0</Link>
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="https://github.com/nova8yte/undo-wiki" className="text-gray-600 hover:text-mulberry-600 transition-colors">
                GitHub
              </Link>
              <Link href="/wiki" className="text-gray-600 hover:text-mulberry-600 transition-colors">
                Articles
              </Link>
              <Link href="/contribute" className="text-gray-600 hover:text-mulberry-600 transition-colors">
                Contribute
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-mulberry-600 transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 