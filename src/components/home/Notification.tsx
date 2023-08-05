import {styled, theme} from "stitches-config";
import * as Common from "@/components/common";

type NotificationProps = {
  name: string;
};

const NotificationWrap = styled('div', {
  padding: '24px',
})

const NotificationUser = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '8px',
});

const NotificationPicture = styled('div', {
  height: '20px',
  width: '20px',
  padding: '0',
  borderRadius: theme.radii.small,
  marginRight: '8px',
  background: theme.colors.green700,
})

const NotificationFooter = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: '8px',
});

const NotificationIcon = styled('div', {
  width: '16px',
  height: '16px',
  background: theme.colors.green700,
  marginRight: '8px',
});

export function Notification({name}: NotificationProps) {
  return (
    <Common.Box stacked css={{
      position: 'relative',
      $$background: theme.colors.green300,
      $$foreground: theme.colors.green400,
      textAlign: 'left',
      fontSize: theme.fontSizes.small,

      '&:not(:first-child)': {
        marginTop: '8px',
      }
    }} inline>
      <NotificationWrap>
        <NotificationUser>
          <NotificationPicture />
          <Common.Text size='p' as='p' css={{color: theme.colors.green700}}>{name}</Common.Text>
        </NotificationUser>
        <Common.Text size='p' as='p' css={{color: theme.colors.magenta400}}>fix: Channel</Common.Text>
        <NotificationFooter>
          <NotificationIcon />
          <Common.Text size='p' as='p' css={{color: theme.colors.green600}}>widgetbot-io/Charts:master</Common.Text>
        </NotificationFooter>
      </NotificationWrap>
    </Common.Box>
  )
}