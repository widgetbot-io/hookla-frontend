'use client'

import {useState} from 'react';
import {styled, theme} from "stitches-config"
import * as Common from "@/components/common";

const Option = styled('label', {
  display: 'block',
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

export function RouteOption() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <Option>
      <RouteCheckbox type='checkbox' checked={isChecked} onChange={handleChange}/>
      <p>This checkbox is {isChecked ? 'checked' : 'unchecked'}</p>
    </Option>
  );
}