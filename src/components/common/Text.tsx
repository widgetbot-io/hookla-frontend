import {styled, theme} from 'stitches-config';

export const Text = styled('p', {
  margin: 0,

  variants: {
    size: {
      p: {
        fontSize: theme.fontSizes.s,
      },

      h1: {
        fontSize: theme.fontSizes.xl,
        color: theme.colors.magenta400,
        fontWeight: 400,
      },

      h2: {
        fontSize: theme.fontSizes.l,
        fontWeight: 400,
      },

      h3: {
        fontSize: theme.fontSizes.m,
        fontWeight: 400,
      }
    },
  },
});