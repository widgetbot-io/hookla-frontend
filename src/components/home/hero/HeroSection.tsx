import {styled, theme} from 'stitches-config';
import * as Common from '@/components/common';

const Section = styled(Common.Section, {
  background: theme.colors.green400,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  paddingTop: '99px',
});

export function HeroSection() {
  return (
    <Section>
      <Common.Text size='h1' as='h1' css={{maxWidth: '400px'}}>Keep your community informed</Common.Text>
    </Section>
  );
}