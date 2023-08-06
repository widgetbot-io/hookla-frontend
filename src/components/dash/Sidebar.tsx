import {theme} from 'stitches-config';
import Link from 'next/link';
import * as Common from '@/components/common';
import {SidebarLink} from '@/components/dash/SidebarLink';
import {SidebarSelect} from '@/components/dash/SidebarSelect';

export function Sidebar() {
  return (
    <Common.Box css={{
      display: 'flex',
      flexDirection: 'column',
      borderColor: theme.colors.neutral300,
      background: theme.colors.neutral100,
      width: '33.333%',
    }}>
      <Common.Text size='sub' as='h6' css={{color: theme.colors.neutral600}}>Webhook.</Common.Text>
      <SidebarSelect />
      <Common.Text size='sub' as='h6' css={{
        color: theme.colors.neutral600,
        marginTop: '32px',
      }}>Configure.</Common.Text>
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
    </Common.Box>
  )
}