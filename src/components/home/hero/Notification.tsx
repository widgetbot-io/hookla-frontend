import {styled, theme} from "stitches-config";
import * as Common from "@/components/common";

const NotificationBox = styled(Common.Box, {
  position: 'relative',
  background: theme.colors.green400,
  padding: '24px',
  textAlign: 'left',
  fontSize: theme.fontSizes.small,

  '&:not(:first-child)': {
    marginTop: '8px',
  }
})

const NotificationUser = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '8px',
});

const NotificationPicture = styled(Common.Box, {
  height: '20px',
  width: '20px',
  padding: '0',
  borderRadius: theme.radii.small,
  marginRight: '8px',
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

export function Notification() {
  return (
    <NotificationBox>
      <NotificationUser>
        <NotificationPicture />
        <Common.Text size='p' as='p' css={{color: theme.colors.green700}}>John Doe</Common.Text>
      </NotificationUser>
      <Common.Text size='p' as='p' css={{color: theme.colors.magenta400}}>fix: Channel</Common.Text>
      <NotificationFooter>
        <NotificationIcon />
        <Common.Text size='p' as='p' css={{color: theme.colors.green600}}>widgetbot-io/Charts:master</Common.Text>
      </NotificationFooter>
    </NotificationBox>
  )
}