'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Página não encontrada.</p>
      <Link href="/">
      </Link>
    </div>
  );
}