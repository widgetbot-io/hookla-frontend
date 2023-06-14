import {styled, theme} from 'stitches-config';

export const Input = styled('input', {
  outline: 'none',
  padding: '16px',
  borderRadius: theme.radii.m,
  background: theme.colors.neutral100,

  '&[type=search]': {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontSize: theme.fontSizes.m,
    border: '1px solid',
    borderColor: theme.colors.neutral500,
    margin: '0 auto 0 16px',
    backgroundImage: 'url(/search.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '16px center',
    paddingLeft: '36px',
    maxWidth: '156px',
    width: '100%',

    '&:focus': {
      maxWidth: '312px',
    },
  },
});