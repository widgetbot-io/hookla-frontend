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
          backgroundColor: theme.colors.green400,
          borderColor: theme.colors.green500,
          fill: theme.colors.green700,
        }
      }
    }
  },

  padding: 0,
  border: '1px solid',
  borderColor: theme.colors.neutral300,
  backgroundColor: theme.colors.neutral200,
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
      backgroundColor: theme.colors.neutral300,
      borderRadius: theme.radii.circle,
      backgroundImage: '$$icon',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      marginRight: '8px',
    },

    '&::after': {
      content: '',
      display: 'block',
      height: '12px',
      width: '32px',
      backgroundImage: 'url(/sidebar_arrow.svg)',
      backgroundRepeat: 'no-repeat',
      marginLeft: 'auto',
    }
  },
});

export function SidebarLink({children, label}: SidebarLinkProps) {
  const active = usePathname().split('/').slice(-1).toString() === label;

  return (
    <SidebarLinkContent
      active={active}
      css={{$$icon: `url(/${label}.svg)`}}
    >
      {children}
    </SidebarLinkContent>
  )
}