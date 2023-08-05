import {styled, theme} from 'stitches-config';
import {Input} from './Input';

export const Checkbox = styled(Input, {
  cursor: 'pointer',
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