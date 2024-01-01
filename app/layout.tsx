import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/page';
import { ThemeProvider } from '@/components/theme-provider';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shahrier Hossain',
  description:
    "I'm a driven and detail-oriented software developer with a blend of technical expertise and creative thinking. I thrive in fast-paced environments and take pride in crafting elegant and efficient solutions that exceed expectations. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
