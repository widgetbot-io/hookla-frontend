import {styled} from 'stitches-config';
import * as Common from '@/components/common';
import * as Setup from '@/components/home/setup';

const Section = styled(Common.Section);

export function Config() {
  return (
    <Section>
      <Setup.Webhook />
      <Setup.RouteList />
      <Setup.Submit />
    </Section>
  )
}