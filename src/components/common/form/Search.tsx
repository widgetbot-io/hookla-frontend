import {styled, theme} from 'stitches-config';
import {Input} from './Input';

export const Search = styled(Input, {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  fontSize: theme.fontSizes.xsmall,
  borderColor: theme.colors.neutral500,
  margin: '0 auto 0 16px',
  backgroundImage: 'url(/search.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '16px center',
  paddingLeft: '40px',
  maxWidth: '156px',
  width: '100%',

  '@media (min-width: 600px)': {
    '&:focus': {
      maxWidth: '512px !important',
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
  },

  '@media (max-width: 450px)': {
    maxWidth: 'unset',
    width: '100%',
    marginLeft: 0,
  },

  '&::-webkit-search-cancel-button' : {
    appearance: 'none',
    webkitAppearance: 'none',
  },

  '&::-webkit-search-decoration' : {
    appearance: 'none',
    webkitAppearance: 'none',
  },
});