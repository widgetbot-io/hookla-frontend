import Image from "next/image";
import {styled, theme} from "stitches-config";
import * as Common from "@/components/common";

const WebhookBox = styled('div', {
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
  display: 'inline-flex',
  alignItems: 'center',
  background: theme.colors.neutral100,
  borderBottomLeftRadius: 0,
  borderTopLeftRadius: 0,
  border: '1px solid',
  borderLeft: 'none',
  borderColor: theme.colors.neutral900,
  paddingRight: '32px',
});

const WebhookURLInput = styled(Common.Input, {
  fontSize: theme.fontSizes.large,
  padding: '32px',
  borderRight: 'none',
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
});

export function Webhook() {
  return (
    <WebhookBox>
      <WebhookURLInput placeholder='Webhook URL' />
      <WebhookArrow>
        <Image src='/arrow_l.svg' width={65} height={22} alt='Arrow' />
      </WebhookArrow>
    </WebhookBox>
  );
}