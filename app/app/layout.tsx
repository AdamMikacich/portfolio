import { Inter } from '@next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={
          'bg-white dark:bg-primary-900 text-slate-900 dark:text-white' +
          inter.className
        }
      >
        {children}
      </body>
    </html>
  );
}
