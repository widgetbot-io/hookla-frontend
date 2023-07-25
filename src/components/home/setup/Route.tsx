'use client'

import {ReactNode, useState} from 'react';
import {styled, theme} from "stitches-config"
import * as Common from "@/components/common";

type RouteProps = {
  children: ReactNode;
}

const RouteLabel = styled('label', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  cursor: 'pointer',
  userSelect: 'none',
  padding: '32px',

  '@media (max-width: 512px)': {
    padding: '16px',
  }
});

const RouteCheckbox = styled(Common.Input, {
  appearance: 'none',
  webkitAppearance: 'none',
  padding: '0',
  background: theme.colors.magenta400,
  border: '1px solid',
  borderRadius: theme.radii.circle,
  borderColor: theme.colors.magenta900,

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
    color: theme.colors.magenta900,
  },

  '& > p:nth-child(2)': {
    color: theme.colors.magenta700,
  },
});

const RouteIcon = styled('div', {
  height: '64px',
  width: '64px',
  background: theme.colors.magenta300,
  border: '1px solid',
  borderColor: theme.colors.magenta900,
  borderRadius: theme.radii.circle,
  marginRight: '16px',

  '@media (max-width: 512px)': {
    width: '48px',
    height: '48px',
    marginRight: '8px',
  }
})

export function Route({children}: RouteProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <Common.BackdropBox css={{$$background: theme.colors.magenta300, $$foreground: theme.colors.magenta400}} inline>
      <RouteLabel>
        <RouteIcon />
        <RouteMeta>
          {children}
        </RouteMeta>
        <RouteCheckbox type='checkbox' checked={isChecked} onChange={handleChange}/>
      </RouteLabel>
    </Common.BackdropBox>
  );
}