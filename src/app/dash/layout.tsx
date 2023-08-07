import {StyleSheet} from '@/stitches/StyleSheet';
import {Inter} from 'next/font/google';
import * as Common from "@/components/common";
import * as Dash from "@/components/dash";
import {styled, theme} from 'stitches-config';

const inter = Inter({subsets: ['latin']});

interface Props {
  children: React.ReactNode;
}

export const metadata = {
  title: 'Hookla',
  description: 'Keep your community informed',
};

const Container = styled(Common.Container, {
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: 'calc(99px + 64px)',

  '&::before': {
    content: '',
    position: 'absolute',
    display: 'block',
    width: '100vw',
    height: '256px',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: theme.colors.green500,
    backgroundImage: 'url(/graph.svg)',
    zIndex: -1,
  },

  '@media (max-width: 1000px)': {
    flexDirection: 'column',

    '& > div': {
      width: '100%',
      marginBottom: '16px',
    }
  },
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
    <Container>
      <Dash.Sidebar />
      <Common.Box css={{
        width: 'calc(66.666% - 32px)',
        borderColor: theme.colors.neutral300,
        background: theme.colors.neutral100,
      }}>
        {children}
      </Common.Box>
    </Container>
    </body>
    </html>
  );
}