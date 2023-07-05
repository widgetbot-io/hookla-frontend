import {styled} from 'stitches-config';

export const Container = styled('div', {
  maxWidth: '1284px',
  margin: '0 auto',

  '@media (max-width: 1426px)': {
    maxWidth: '90%',
  },

  '@media (max-width: 800px)': {
    maxWidth: '720px',
  },

  '@media (max-width: 758px)': {
    maxWidth: '95%',
  },
});