'use client'

import {styled, theme} from 'stitches-config';
import {ReactNode} from 'react';
import {usePathname} from 'next/navigation';

type SidebarLinkProps = {
  children: ReactNode;
  label: string;
}

const SidebarLinkContent = styled('div', {
  variants: {
    active: {
      true: {
        '& > a::before': {
          background: theme.colors.green400,
          borderColor: theme.colors.green500,
          fill: theme.colors.green700,
        }
      }
    }
  },

  padding: 0,
  border: '1px solid',
  borderColor: theme.colors.neutral300,
  background: theme.colors.neutral200,
  borderRadius: theme.radii.medium,

  '&:not(:first-child)': {
    marginTop: '8px',
  },

  '& > a': {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    color: theme.colors.neutral900,
    textDecoration: 'none',

    '&::before': {
      content: '',
      display: 'block',
      height: '32px',
      width: '32px',
      border: '1px solid',
      borderColor: theme.colors.neutral400,
      background: theme.colors.neutral300,
      borderRadius: theme.radii.circle,
      marginRight: '8px',
    }
  },
});

export function SidebarLink({children, label}: SidebarLinkProps) {
  const active = usePathname().split('/').slice(-1).toString() === label;

  return (
    <SidebarLinkContent active={active}>
      {children}
    </SidebarLinkContent>
  )
}