import {styled, theme} from 'stitches-config';
import Image from "next/image";
import * as Common from '@/components/common';
import * as Hero from './index';

const Section = styled(Common.Section, {
  display: 'flex',
  backgroundColor: theme.colors.green500,
  backgroundImage: 'url(./graph.svg)',
  backgroundPosition: 'center center',
  minHeight: 'unset',
  maxHeight: '100vh',
  overflow: 'hidden',
});

const Container = styled(Common.Container, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  textAlign: 'center',
  width: '100%',
  background: theme.colors.green400,
});

const Middle = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
  padding: '64px 0',
  marginTop: '99px',

  '&::before': {
    content: '',
  },
});

export function HeroSection() {
  return (
    <Section>
      <Container>
        <Hero.Notifications />
        <Middle>
          <Common.Text size='h1' as='h1' css={{maxWidth: '400px'}}>Keep your community informed</Common.Text>
          <Image src='/arrow_down.svg' width={23} height={65} alt='arrow' />
        </Middle>
        <Hero.Notifications />
      </Container>
    </Section>
  );
}
