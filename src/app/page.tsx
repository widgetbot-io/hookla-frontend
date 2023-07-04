import * as Common from '@/components/common';
import {theme} from 'stitches-config';

export default function Index() {
  return (
    <Common.Box>
      <Common.BackdropBox css={{$$background: theme.colors.green300, $$foreground: theme.colors.green400}}>
        Test
      </Common.BackdropBox>
    </Common.Box>
  )
}
