import {styled} from 'stitches-config';

export const Container = styled('div', {
  variants: {
    color: {
      primary: {
        backgroundColor: "red",
        color: "orange",
      },
      secondary: {
        backgroundColor: "blue",
        color: "pink",
      },
    },
  },
});