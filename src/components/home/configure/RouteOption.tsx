'use client'

import {useState} from 'react';
import {styled, theme} from "stitches-config"
import * as Common from "@/components/common";

const RouteBox = styled('label', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  background: theme.colors.magenta400,
  border: '1px solid',
  borderColor: theme.colors.magenta900,
  borderRadius: theme.radii.m,
  padding: '32px',
  cursor: 'pointer',
  userSelect: 'none',
});

const RouteCheckbox = styled(Common.Input, {
  appearance: 'none',
  webkitAppearance: 'none',
  padding: '0',
  background: theme.colors.magenta400,
  border: '1px solid',
  borderRadius: theme.radii.c,
  borderColor: theme.colors.magenta900,

  '&::before': {
    content: '',
    display: 'block',
    height: '16px',
    width: '16px',
    background: theme.colors.green400,
    borderRadius: theme.radii.c,
    transform: 'scale(0)',
    transition: '.1s ease-in-out transform',
  },

  '&:checked::before': {
    transform: 'scale(1)',
  },
});

const RouteMeta = styled('div', {
  flexGrow: 1,
});

const RouteIcon = styled('div', {
  height: '64px',
  width: '64px',
  background: theme.colors.magenta300,
  border: '1px solid',
  borderColor: theme.colors.magenta900,
  borderRadius: theme.radii.c,
  marginRight: '16px',
})

export function RouteOption() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <RouteBox>
      <RouteIcon />
      <RouteMeta>
        <Common.Text css={{color: theme.colors.magenta900}}>Provider</Common.Text>
        <Common.Text css={{color: theme.colors.magenta700}}>Provider Description</Common.Text>
      </RouteMeta>
      <RouteCheckbox type='checkbox' checked={isChecked} onChange={handleChange}/>
    </RouteBox>
  );
}