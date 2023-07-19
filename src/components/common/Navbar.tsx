import {styled, theme} from 'stitches-config';
import {Container} from './Container';
import {Button} from './Button';
import {Input} from './Input';
import {Text} from './Text';

const BarWrap = styled('nav', {
  position: 'fixed',
  width: '100vw',
  background: theme.colors.neutral100,
  top: 0,
  left: 0,
  padding: '24px 0',
  borderBottom: '1px solid',
  borderColor: theme.colors.neutral400,
  zIndex: 10,

  '@media (max-width: 450px)': {
    paddingBottom: '16px',
  },
});

const Bar = styled(Container, {
  display: 'flex',
  alignItems: 'center',

  '@media (max-width: 450px)': {
    flexWrap: 'wrap',
  },
});

const Brand = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontSize: theme.fontSizes.xsmall,

  '&::before': {
    content: '',
    display: 'block',
    width: '32px',
    height: '32px',
    marginRight: '16px',
    background: 'url(/logo.svg)',
  },

  '@media (max-width: 800px)': {
    '& > div': {
      display: 'none',
    }
  },
});

const Action = styled('div', {
  flexGrow: '1',
  display: 'flex',
  justifyContent: 'flex-end',

  '@media (max-width: 450px)': {
    flexWrap: 'wrap',
    marginTop: '-42px',
  },
});

const LoginButton = styled(Button, {
  position: 'relative',
  marginLeft: '16px',
  overflow: 'hidden',

  '&::before': {
    content: '',
    position: 'absolute',
    display: 'block',
    top: '-8px',
    left: '0',
    height: '64px',
    width: '64px',
    background: 'url(/discord.svg) no-repeat center center',
    backgroundSize: 'contain',
    transform: 'rotate(30deg)',
    opacity: 0.2,
  },

  '@media (max-width: 450px)': {
    order: -1,
    marginBottom: '16px',
  },

  '& > span': {
    color: '#5865F2',
  },
})

export function Navbar() {
  return (
    <BarWrap>
      <Bar>
        <Brand>
          <div>
            <Text>Hookla</Text>
            <Text css={{color: theme.colors.magenta400}}>Keep your community informed.</Text>
          </div>
        </Brand>
        <Action>
          <Input placeholder='Search documentation' type='search' />
          <LoginButton type='primary'>Login with <span>Discord</span></LoginButton>
        </Action>
      </Bar>
    </BarWrap>
  );
}