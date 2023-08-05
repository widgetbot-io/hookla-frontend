import {styled, theme} from 'stitches-config';

export const Heading = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '96px 0',
  marginTop: '99px',
  height: '100%',
  background: theme.colors.green400,

  '&::before': {
    content: '',
  },

  '@media (max-width: 1200px)': {
    margin: '99px 0 64px 0',
    padding: '0 64px',
    justifyContent: 'center',

    '& > img': {
      display: 'none',
    },
  },

  '@media (max-width: 900px)': {
    margin: 0,
    textAlign: 'center',
    padding: '32px 0 64px 0',

    '&::before': {
      position: 'absolute',
      display: 'block',
      top: '0',
      left: '50%',
      width: '100vw',
      height: '100%',
      transform: 'translateX(-50%)',
      background: theme.colors.green400,
    },

    '& > *': {
      position: 'relative',
    }
  },
});