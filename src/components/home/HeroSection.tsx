import {styled, theme} from 'stitches-config';
import * as Common from '@/components/common';

const Section = styled(Common.Box, {
  height: '100%',
  minHeight: '100vh',
  background: theme.colors.green400,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});

export function HeroSection() {
  return (
    <Section>
      <Common.Text size='h1' as='h1' css={{maxWidth: '400px'}}>Keep your community informed</Common.Text>
    </Section>
  );
}