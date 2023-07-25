'use client'

import type {CSS} from '@stitches/react';
import {useState} from 'react';
import {styled, theme} from 'stitches-config';
import * as Common from "@/components/common";

type CheckboxProps = {
  label: string;
  css?: CSS;
}

const CheckboxInput = styled(Common.Input, {
  appearance: 'none',
  webkitAppearance: 'none',
  padding: '0',
  background: theme.colors.neutral400,
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

const CheckboxLabel = styled('label', {
  display: 'block',
  width: '100%',
  cursor: 'pointer',
  userSelect: 'none',
  padding: '16px',
  background: theme.colors.neutral200,
  border: '1px solid',
  borderColor: theme.colors.neutral300,
  borderRadius: theme.radii.medium,

  '& > div': {
    display: 'flex',
    alignItems: 'center',
  }
});

export function Checkbox({label, css}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <CheckboxLabel css={css}>
      <Common.Text css={{color: theme.colors.neutral700, fontSize: theme.fontSizes.xsmall, marginBottom: '8px !important'}}>{label}</Common.Text>
      <div>
        <CheckboxInput type='checkbox' checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        <Common.Text css={{marginLeft: '4px !important', fontSize: theme.fontSizes.xsmall, color: theme.colors.neutral600}}>{isChecked ? 'Enabled' : 'Disabled'}</Common.Text>
      </div>
    </CheckboxLabel>
  )
}