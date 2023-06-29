import {styled, theme} from 'stitches-config';
import * as Common from '@/components/common';
import * as Hero from './index';

const Section = styled(Common.Section, {
  display: 'flex',
  backgroundColor: theme.colors.green500,
  backgroundImage: 'url(./graph.svg)',
  backgroundPosition: 'center center',
  paddingTop: '99px',
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

export function HeroSection() {
  return (
    <Section>
      <Container>
        <Hero.Notifications />
        <Common.Text size='h1' as='h1' css={{maxWidth: '400px'}}>Keep your community informed</Common.Text>
        <Hero.Notifications />
      </Container>
    </Section>
  );
}