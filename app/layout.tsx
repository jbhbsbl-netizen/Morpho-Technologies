import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Morpho Technologies | Attritable Composite AUVs',
  description: 'We customize attritable, shallow-water, composite-based AUVs at 10-100x lower cost than existing systems.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
