import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import { BackgroundOrchestra } from '@/components/atoms/background-orchestra';
import { TooltipProvider } from "@/components/ui/tooltip"

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'BelajarAnakTK UI Kit',
  description: 'Production-ready Neobrutalism UI Kit for children learning applications.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <Providers>
          <TooltipProvider>
            <BackgroundOrchestra />
            {children}
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
