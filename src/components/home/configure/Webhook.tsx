import Image from "next/image";
import {styled, theme} from "stitches-config";
import * as Common from "@/components/common";

const WebhookSection = styled('section', {
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

const WebhookArrow = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  paddingRight: '32px',
});

const WebhookURLInput = styled(Common.Input, {
  fontSize: theme.fontSizes.large,
  padding: '32px',
  border: 'none',
});

export function Webhook() {
  return (
    <WebhookSection>
      <Common.BackdropBox css={{$$background: theme.colors.neutral200, $$foreground: theme.colors.neutral100}} inline>
        <WebhookURLInput placeholder='Webhook URL' />
        <WebhookArrow>
          <Image src='/arrow_large.svg' width={65} height={22} alt='Arrow' />
        </WebhookArrow>
      </Common.BackdropBox>
    </WebhookSection>
  );
}