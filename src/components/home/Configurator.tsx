import {styled, theme} from 'stitches-config';
import * as Common from '@/components/common';

const ConfiguratorSection = styled(Common.Box, {
  height: '100%',
  minHeight: '100vh',
});

const WebhookBox = styled(Common.Box, {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '32px',

  '&::before': {
    content: '',
    display: 'block',
    position: 'absolute',
    top: '-32px',
    left: '50%',
    width: '100vw',
    height: 'calc(50% + 32px)',
    background: theme.colors.neutral200,
    borderBottom: '1px solid',
    borderColor: theme.colors.neutral300,
    transform: 'translateX(-50%)',
    zIndex: -1,
  },
});

const WebhookArrow = styled(Common.Box, {
  display: 'inline-block',
});

const WebhookURLInput = styled(Common.Input, {
  fontSize: theme.fontSizes.l,
  padding: '32px',
  borderRight: 'none',
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
});

export function Configurator() {
  return (
    <ConfiguratorSection>
      <WebhookBox>
        <WebhookArrow>
          <WebhookURLInput placeholder='Webhook URL' />
        </WebhookArrow>
      </WebhookBox>
    </ConfiguratorSection>
  )
}