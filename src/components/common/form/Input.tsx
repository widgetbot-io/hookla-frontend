import {styled, theme} from 'stitches-config';

export const Input = styled('input', {
  outline: 'none',
  padding: '16px',
  border: '1px solid',
  borderColor: theme.colors.neutral900,
  borderRadius: theme.radii.medium,
  background: theme.colors.neutral100,
});