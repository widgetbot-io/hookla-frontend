import {styled, theme} from 'stitches-config';

export const Text = styled('p', {
  variants: {
    size: {
      sub: {
        fontSize: theme.fontSizes.xsmall,
      },

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
      },

      h4: {
        fontSize: theme.fontSizes.msmall,
        fontWeight: 400,
      }
    },
  },

  margin: 0,
});