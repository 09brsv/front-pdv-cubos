'use client';
import { AuthProvider } from '@/contexts/auth/AuthProvider';
import './globals.css';
import { api } from '@/services/axios';
import Cookies from 'js-cookie';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  api.interceptors.request.use((config) => {
    const token = Cookies.get('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return (
    <AuthProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </AuthProvider>
  );
}
