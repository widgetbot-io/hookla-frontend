import {styled, theme} from "stitches-config";
import Image from "next/image";
import * as Common from "@/components/common";
import * as Form from "@/components/common/form";

const WebhookSection = styled(Common.Section, {
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

  '@media (max-width: 512px)': {
    display: 'none',
  }
});

const WebhookURLInput = styled(Form.Input, {
  fontSize: theme.fontSizes.large,
  padding: '32px',
  border: 'none',

  '@media (max-width: 512px)': {
    fontSize: theme.fontSizes.small,
  }
});

export function Webhook() {
  return (
    <WebhookSection>
      <Common.Box stacked css={{$$background: theme.colors.neutral200, $$foreground: theme.colors.neutral100}} inline>
        <WebhookURLInput placeholder='Webhook URL' />
        <WebhookArrow>
          <Image src='/arrow_large.svg' width={65} height={22} alt='Arrow' />
        </WebhookArrow>
      </Common.Box>
    </WebhookSection>
  );
}