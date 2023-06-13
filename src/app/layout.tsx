import {StyleSheet} from '@/stitches/StyleSheet';
import {Inter} from 'next/font/google';

const inter = Inter({subsets: ['latin']});

interface Props {
  children: React.ReactNode;
}

export const metadata = {
  title: 'Hookla',
  description: 'Keep your community informed',
};

export default function RootLayout({children}: Props) {
  return (
    <html lang="en">
    <head>
      <StyleSheet/>
    </head>
    <body className={inter.className}>
    {children}
    </body>
    </html>
  );
}
