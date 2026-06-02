import type { Metadata } from 'next';
import { Sora, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import ScrollProgress from '@/components/ScrollProgress';
import { company } from '@/lib/site';

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
});
const plex = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono-plex',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hiliks.com'),
  title: {
    default: `${company.name} — ${company.tagline}`,
    template: `%s · ${company.name}`,
  },
  description:
    'Hiliks Technologies — a niche, engineering-led enterprise technology company for critical industries, with a flagship Railways practice. Serving railways, telecom, BFSI, public sector, real estate, oil & gas and energy across India and the GCC.',
  keywords: [
    'Hiliks', 'railway signaling', 'Kavach', 'TCAS', 'enterprise technology',
    'digital engineering', 'GCC', 'telecom OSS BSS', 'predictive maintenance',
  ],
  openGraph: {
    title: `${company.name} — ${company.tagline}`,
    description: company.corporateLine,
    type: 'website',
    locale: 'en_IN',
    siteName: company.name,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${plex.variable}`}>
        <div className="scan" aria-hidden />
        <ScrollProgress />
        <Cursor />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
