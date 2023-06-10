import { styled, theme } from 'stitches-config';

export const Container = styled('div', {
  variants: {
    color: {
      primary: {
        backgroundColor: theme.colors.bgPrimary,
        color: theme.colors.textPrimary,
      },
      secondary: {
        backgroundColor: theme.colors.bgSecondary,
        color: theme.colors.textSecondary,
      },
    },
  },
});