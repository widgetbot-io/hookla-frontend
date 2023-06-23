import {styled} from 'stitches-config';
import * as Common from '@/components/common';
import * as Configure from './index';

const Section = styled(Common.Section, {
  minHeight: 'calc(100vh - 99px - 32px)',
});

export function ConfigureSection() {
  return (
    <Section>
      <Configure.Webhook />
      <Configure.Route />
      <Configure.Submit />
    </Section>
  )
}