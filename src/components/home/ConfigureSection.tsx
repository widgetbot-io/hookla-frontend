import {styled} from 'stitches-config';
import * as Common from '@/components/common';
import * as Configure from './configure';

const Section = styled(Common.Box, {
  height: '100%',
  minHeight: '100vh',
});

export function ConfigureSection() {
  return (
    <Section>
      <Configure.Webhook />
      <Configure.Route />
      <Configure.Go />
    </Section>
  )
}