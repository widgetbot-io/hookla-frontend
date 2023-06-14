import {styled, theme} from 'stitches-config';

export const Button = styled('button', {
  padding: '16px 24px',
  outline: 'none',
  border: '1px solid',
  borderColor: theme.colors.neutral900,
  borderRadius: theme.radii.m,
  fontSize: theme.fontSizes.m,

  variants: {
    type: {
      primary: {
        backgroundColor: theme.colors.neutral900,
        color: theme.colors.neutral100,
      },
      secondary: {
        backgroundColor: theme.colors.neutral100,
        color: theme.colors.neutral900,
      },
    },
    arrow: {
      true: {
        display: 'flex',
        alignItems: 'center',

        '&::after': {
          content: '',
          display: 'block',
          width: '32px',
          height: '13px',
          backgroundImage: 'url(/arrow.svg)',
          marginLeft: '8px',
        }
      },
    },
  },
});