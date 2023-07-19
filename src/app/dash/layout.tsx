import {StyleSheet} from '@/stitches/StyleSheet';
import {Inter} from 'next/font/google';
import * as Common from "@/components/common";
import {styled, theme} from 'stitches-config';

const inter = Inter({subsets: ['latin']});

interface Props {
  children: React.ReactNode;
}

export const metadata = {
  title: 'Hookla',
  description: 'Keep your community informed',
};

const Content = styled(Common.Box, {
  width: 'calc(66.666% - 32px)',
  borderColor: theme.colors.neutral300,
});

const Dash = styled(Common.Container, {
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: '99px',
});

export default function RootLayout({children}: Props) {
  return (
    <html lang='en'>
    <head>
      <title>{metadata.title}</title>
      <StyleSheet/>
    </head>
    <body className={inter.className}>
    <Common.Navbar />
    <Dash>
      <Common.Sidebar />
      <Content>
        {children}
      </Content>
    </Dash>
    </body>
    </html>
  );
}