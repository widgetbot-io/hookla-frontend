import {styled, theme} from 'stitches-config';
import Image from "next/image";
import * as Common from '@/components/common';
import * as Header from '@/components/home/header';

const Section = styled(Common.Section, {
  display: 'flex',
  overflow: 'hidden',
  backgroundColor: theme.colors.green500,
  backgroundImage: 'url(./graph.svg)',
});

const Container = styled(Common.Container, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  textAlign: 'center',
  width: '100%',

  '@media (max-width: 1200px)': {
    justifyContent: 'flex-start',
    textAlign: 'left',
  },

  '@media (max-width: 900px)': {
    flexDirection: 'column',
  },
});

const Middle = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '96px 0',
  marginTop: '99px',
  height: '100%',
  background: theme.colors.green400,

  '&::before': {
    content: '',
  },

  '@media (max-width: 1200px)': {
    margin: '99px 0 64px 0',
    padding: '0 64px',
    justifyContent: 'center',

    '& > img': {
      display: 'none',
    },
  },

  '@media (max-width: 900px)': {
    margin: 0,
    textAlign: 'center',
    padding: '32px 0 64px 0',

    '&::before': {
      position: 'absolute',
      display: 'block',
      top: '0',
      left: '50%',
      width: '100vw',
      height: '100%',
      transform: 'translateX(-50%)',
      background: theme.colors.green400,
    },

    '& > *': {
      position: 'relative',
    }
  },
});

export function Hero() {
  return (
    <Section>
      <Container>
        <Header.NotificationList />
          <Middle>
            <Common.Text size='h1' as='h1'>Keep your community informed</Common.Text>
            <Image src='/arrow_down.svg' width={23} height={65} alt='arrow' />
          </Middle>
        <Header.NotificationList />
      </Container>
    </Section>
  );
}
