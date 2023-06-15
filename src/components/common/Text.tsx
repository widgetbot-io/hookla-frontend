import {styled, theme} from 'stitches-config';

export const Text = styled('p', {
  margin: 0,

  variants: {
    type: {
      p: {
        fontSize: theme.fontSizes.s,
      },

      h1: {
        fontSize: theme.fontSizes.xl,
        color: theme.colors.magenta400,
      },
    },
  },
});