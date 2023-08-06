'use client'

import {ReactNode, useState} from 'react';
import {styled, theme} from 'stitches-config';
import * as Common from '@/components/common';
import * as Form from '@/components/common/form';
import {CSS} from "@stitches/react";
import Link from 'next/link';

type RouteProps = {
  children: ReactNode;
  css?: CSS;
  configurable?: boolean;
}

const RouteLabel = styled('label', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  cursor: 'pointer',
  userSelect: 'none',
  padding: '24px',
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
    <Common.Box css={{
      ...css,
      background: theme.colors.neutral200,
      borderColor: `${theme.colors.neutral300} !important`,
      padding: '0 !important',
      marginBottom: '8px',
    }}>
      <RouteLabel>
        <RouteIcon />
        <RouteMeta>
          {children}
        </RouteMeta>
        <Form.Checkbox type='checkbox' checked={isChecked} onChange={handleChange} css={{
          background: theme.colors.neutral200,
        }} />
      </RouteLabel>
      {isChecked && configurable &&
        <RouteFooter>
            <Link href='/'>Configure embed</Link>
        </RouteFooter>
      }
    </Common.Box>
  )
}