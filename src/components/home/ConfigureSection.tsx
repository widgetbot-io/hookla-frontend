import {styled} from 'stitches-config';
import * as Configure from './configure';

const Section = styled('section', {
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