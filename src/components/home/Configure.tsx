import {styled} from 'stitches-config';
import * as Common from '@/components/common';
import * as Configurator from './configurator';

const ConfigureSection = styled(Common.Box, {
  height: '100%',
  minHeight: '100vh',
});

export function Configure() {
  return (
    <ConfigureSection>
      <Configurator.Webhook />
      <Configurator.Route />
    </ConfigureSection>
  )
}