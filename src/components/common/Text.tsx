import {styled, theme} from 'stitches-config';

export const Text = styled('p', {
  margin: 0,

  variants: {
    size: {
      p: {
        fontSize: theme.fontSizes.small,
      },

      h1: {
        fontSize: theme.fontSizes.xlarge,
        color: theme.colors.magenta400,
        fontWeight: 400,
      },

      h2: {
        fontSize: theme.fontSizes.large,
        fontWeight: 400,
      },

      h3: {
        fontSize: theme.fontSizes.medium,
        fontWeight: 400,
      }
    },
  },
});