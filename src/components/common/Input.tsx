import {styled, theme} from 'stitches-config';

export const Input = styled('input', {
  outline: 'none',
  padding: '16px',
  border: '1px solid',
  borderColor: theme.colors.neutral900,
  borderRadius: theme.radii.medium,
  background: theme.colors.neutral100,

  '&[type=search]': {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontSize: theme.fontSizes.xsmall,
    borderColor: theme.colors.neutral500,
    margin: '0 auto 0 16px',
    backgroundImage: 'url(/search.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '16px center',
    paddingLeft: '36px',
    maxWidth: '156px',
    width: '100%',

    '@media (min-width: 600px)': {
      '&:focus': {
        maxWidth: '312px',
      },
    },

    '@media (max-width: 450px)': {
      maxWidth: 'unset',
      width: '100%',
      marginLeft: 0,
    },
  },

  '&[type=checkbox]': {
    cursor: 'pointer',
  }
});