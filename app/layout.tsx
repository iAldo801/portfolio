
import { GeistSans } from 'geist/font/sans';
import { Metadata } from 'next';
import QueryWrapper from '../lib/QueryWrapper';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aldo Hernandez | Web Developer',

}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html className={`${GeistSans.className} select-none`} suppressHydrationWarning>
      <body>
        <QueryWrapper>
            {children}
        </QueryWrapper>
      </body>
    </html>
  )
}
