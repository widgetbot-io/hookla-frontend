import {createStitches} from '@stitches/react';

const stitches = createStitches({
  theme: {
    radii: {
      m: '8px',
    },
    colors: {
      neutral100: '#F4F8F6',
      neutral200: '#D9DFDB',
      neutral300: '#BCC5C0',
      neutral400: '#A4ACA7',
      neutral500: '#89908C',
      neutral600: '#676C69',
      neutral700: '#444846',
      neutral800: '#202221',
      neutral900: '#0C0D0C',
      green100: '#CFF8DF',
      green200: '#B9EFCE',
      green300: '#8FDCAC',
      green400: '#50AF74',
      green500: '#369259',
      green600: '#287947',
      green700: '#15502B',
      green800: '#092915',
      green900: '#010603',
      magenta100: '#F8CFE8',
      magenta200: '#EFB9DB',
      magenta300: '#DC8FBF',
      magenta400: '#AF508B',
      magenta500: '#92366F',
      magenta600: '#79285A',
      magenta700: '#501539',
      magenta800: '#29091D',
      magenta900: '#060104',
      red100: '#FFEEEE',
      red200: '#FAD7D7',
      red300: '#F5BEBE',
      red400: '#EB9A9A',
      red500: '#DF7878',
      red600: '#D35454',
      red700: '#C93232',
      red800: '#BA1414',
      red900: '#A00000',
    },
    fontSizes: {
      m: '14px',
      l: '16px',
    },
  },
});

export const {styled, theme, globalCss, keyframes, css, getCssText} = stitches;