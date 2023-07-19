import type {CSS} from '@stitches/react';
import {styled, theme} from 'stitches-config';

type InputProps = {
  label: string;
  type: string;
  placeholder: string;
  css?: CSS;
}

const InputGroup = styled('div', {
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

export function Input({label, type, placeholder, css}: InputProps) {
  return (
    <InputGroup css={css}>
      <InputLabel>
        {label}
        <InputCount>(0/32)</InputCount>
      </InputLabel>
      <InputField  {...(type === 'textarea' ? {as: 'textarea'} : {})} type={type} placeholder={placeholder} />
    </InputGroup>
  )
}