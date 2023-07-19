import {styled, theme} from 'stitches-config';
import Link from 'next/link';
import {Button} from './Button';
import {Box} from './Box';

const BarWrap = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  borderColor: theme.colors.neutral300,
  width: '33.333%',
});

const SidebarLink = styled(Button, {
  padding: 0,

  '& > a': {
    display: 'block',
    padding: '32px'
  }
})

export function Sidebar() {
  return (
    <BarWrap>
      <SidebarLink type='neutral' align='left'><Link href='/dash/providers'>Providers</Link></SidebarLink>
      <SidebarLink type='neutral' align='left'><Link href='/dash/destinations'>Destinations</Link></SidebarLink>
      <SidebarLink type='neutral' align='left'><Link href='/dash/embed'>Embed Builder</Link></SidebarLink>
      <SidebarLink type='neutral' align='left'><Link href='/dash/settings'>Settings</Link></SidebarLink>
    </BarWrap>
  )
}