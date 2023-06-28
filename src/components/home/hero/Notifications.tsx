import {styled, theme} from "stitches-config";
import {Notification} from './Notification';

const NotificationsSection = styled('div', {
  position: 'relative',
  height: '100%',
  width: '100%',
  maxWidth: '384px',

  '&::before': {
    content: '',
    position: 'absolute',
    display: 'block',
    width: '50%',
    height: '100%',
    top: '0',
    background: theme.colors.green500,
  },

  '&:first-of-type::before': {
    left: '0',
  },

  '&:last-of-type::before': {
    right: '0',
  }
});

export function Notifications() {
  return (
    <NotificationsSection>
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
    </NotificationsSection>
  )
}
