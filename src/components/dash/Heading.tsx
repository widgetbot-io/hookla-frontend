import {styled, theme} from 'stitches-config';

export const Heading = styled('div', {
  paddingBottom: '32px',
  marginBottom: '32px',
  borderBottom: '1px solid',
  borderColor: theme.colors.neutral300,

  '& > h1': {
    marginBottom: '8px',
  }
});