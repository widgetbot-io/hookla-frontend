'use client'

import type {CSS} from '@stitches/react';
import {useState} from 'react';
import {styled, theme} from 'stitches-config';

type InputProps = {
  label: string;
  type: string;
  placeholder: string;
  css?: CSS;
}

const InputGroup = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

const InputField = styled('input', {
  padding: '8px 16px 16px 16px',
  background: theme.colors.neutral200,
  border: '1px solid',
  borderTop: 'none',
  borderColor: theme.colors.neutral300,
  borderBottomLeftRadius: theme.radii.medium,
  borderBottomRightRadius: theme.radii.medium,
  width: '100%',
  fontSize: theme.fontSizes.small,
  fontFamily: 'inherit',
  outline: 'none !important',
});

const InputLabel = styled('label', {
  padding: '16px 16px 0 16px',
  background: theme.colors.neutral200,
  border: '1px solid',
  borderBottom: 'none',
  borderColor: theme.colors.neutral300,
  borderTopLeftRadius: theme.radii.medium,
  borderTopRightRadius: theme.radii.medium,
  width: '100%',
  color: theme.colors.neutral700,
  fontSize: theme.fontSizes.xsmall,
});

const InputCount = styled('span', {
  color: theme.colors.neutral500,
  marginLeft: '4px',
})

const InputStatus = styled('span', {
  variants: {
    status: {
      valid: {
        borderColor: theme.colors.green500,
        backgroundColor: theme.colors.green400,
        backgroundImage: 'url(/valid_check.svg)',
      },
      invalid: {
        borderColor: theme.colors.red500,
        backgroundColor: theme.colors.red400,
        backgroundImage: 'url(/invalid_cross.svg)',
      },
    }
  },

  position: 'absolute',
  display: 'block',
  width: '16px',
  height: '16px',
  border: '1px solid',
  borderRadius: theme.radii.circle,
  right: '16px',
  top: '16px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
});

export function Input({label, type, placeholder, css}: InputProps) {
  const [count, setCount] = useState(0);

  return (
    <InputGroup css={css}>
      <InputLabel>
        {label}
        <InputCount>({count}/32)</InputCount>
      </InputLabel>
      <InputField
        {...(type === 'textarea' ? {as: 'textarea'} : {})}
        type={type}
        placeholder={placeholder}
        onChange={e => setCount(e.target.value.length)}
      />
      <InputStatus status='valid' />
    </InputGroup>
  )
}