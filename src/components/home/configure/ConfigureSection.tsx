import {styled} from 'stitches-config';
import * as Common from '@/components/common';
import * as Configure from './index';

const Section = styled(Common.Section);

export function ConfigureSection() {
  return (
    <Section>
      <Configure.Webhook />
      <Configure.Route />
      <Configure.Submit />
    </Section>
  )
}