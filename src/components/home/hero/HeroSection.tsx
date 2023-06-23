import {styled, theme} from 'stitches-config';
import * as Common from '@/components/common';

const Section = styled(Common.Section, {
  display: 'flex',
  background: theme.colors.green500,
  paddingTop: '99px',
});

const Container = styled(Common.Container, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: '100%',
  background: theme.colors.green400,
});

export function HeroSection() {
  return (
    <Section>
      <Container>
        <Common.Text size='h1' as='h1' css={{maxWidth: '400px'}}>Keep your community informed</Common.Text>
      </Container>
    </Section>
  );
}