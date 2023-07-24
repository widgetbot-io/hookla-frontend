'use client'

import {ReactNode, useState} from 'react';
import {styled, theme} from 'stitches-config';
import * as Common from '@/components/common';
import {CSS} from "@stitches/react";
import Link from 'next/link';

type RouteProps = {
  children: ReactNode;
  css?: CSS;
  configurable?: boolean;
}

const RouteBox = styled(Common.Box, {
  background: theme.colors.neutral200,
  borderColor: `${theme.colors.neutral300} !important`,
  padding: '0 !important',
  marginBottom: '8px',
});

const RouteLabel = styled('label', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  cursor: 'pointer',
  userSelect: 'none',
  padding: '24px',
});

const RouteCheckbox = styled(Common.Input, {
  appearance: 'none',
  webkitAppearance: 'none',
  padding: '0 !important',
  background: `${theme.colors.neutral200} !important`,
  border: '1px solid',
  borderRadius: theme.radii.circle,
  borderColor: theme.colors.neutral900,

  '&::before': {
    content: '',
    display: 'block',
    height: '16px',
    width: '16px',
    background: theme.colors.green400,
    borderRadius: theme.radii.circle,
    transform: 'scale(0)',
    transition: '.1s ease-in-out transform',
  },

  '&:checked::before': {
    transform: 'scale(1)',
  },
});

const RouteMeta = styled('div', {
  flexGrow: 1,

  '& > p:first-child': {
    color: theme.colors.neutral900,
  },

  '& > p:nth-child(2)': {
    color: theme.colors.neutral700,
  },
});

const RouteIcon = styled('div', {
  height: '48px',
  width: '48px',
  background: theme.colors.neutral300,
  border: '1px solid',
  borderColor: theme.colors.neutral400,
  borderRadius: theme.radii.circle,
  marginRight: '16px',
});

const RouteFooter = styled('div', {
  padding: '8px 24px',
  background: theme.colors.neutral100,
  borderBottomLeftRadius: theme.radii.medium,
  borderBottomRightRadius: theme.radii.medium,
  textAlign: 'right',

  '& > a': {
    textDecoration: 'none',
    color: theme.colors.neutral700,
  }
});

export function Route({children, css, configurable}: RouteProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <RouteBox css={css}>
      <RouteLabel>
        <RouteIcon />
        <RouteMeta>
          {children}
        </RouteMeta>
        <RouteCheckbox type='checkbox' checked={isChecked} onChange={handleChange}/>
      </RouteLabel>
      {isChecked && configurable &&
        <RouteFooter>
            <Link href='/'>Configure embed</Link>
        </RouteFooter>
      }
    </RouteBox>
  )
}