import {styled, theme} from 'stitches-config';
import Link from 'next/link';
import {Box} from '@/components/common/Box';
import {SidebarLink} from '@/components/dash/SidebarLink';

const SidebarWrap = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  borderColor: theme.colors.neutral300,
  background: theme.colors.neutral100,
  width: '33.333%',
});

export function Sidebar() {
  return (
    <SidebarWrap>
      <SidebarLink label='providers'>
        <Link href='/dash/providers'>Providers</Link>
      </SidebarLink>
      <SidebarLink label='destinations'>
        <Link href='/dash/destinations'>Destinations</Link>
      </SidebarLink>
      <SidebarLink label='embed'>
        <Link href='/dash/embed'>Embed Builder</Link>
      </SidebarLink>
      <SidebarLink label='settings'>
        <Link href='/dash/settings'>Settings</Link>
      </SidebarLink>
    </SidebarWrap>
  )
}