import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Teeth Are Us',
  description: 'Premium dental care with a personal touch - where your smile is our priority. Serving Houston families with excellence, compassion, and state-of-the-art technology.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
