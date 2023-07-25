import {styled, theme} from 'stitches-config';
import Link from 'next/link';
import {SearchDocumentation} from "@/components/common/SearchDocumentation";
import {Container} from '@/components/common/Container';
import {Button} from '@/components/common/Button';
import {Text} from '@/components/common/Text';

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
});

const User = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontSize: theme.fontSizes.xsmall,

  '&::before': {
    content: '',
    display: 'block',
    width: '32px',
    height: '32px',
    backgroundImage: 'url(/pfp.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    borderRadius: theme.radii.circle,
    marginRight: '8px',
  },

  '& a': {
    display: 'block',
    textDecoration: 'none',
    color: theme.colors.red500,
  }
});

export function Navbar() {
  const authed = true;

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
          <SearchDocumentation />

          {authed ?
            <User>
              <div>
                Welcome, havasu
                <Link href='/'>Logout</Link>
              </div>
            </User>
            :
            <LoginButton type='primary'>Login with <span>Discord</span></LoginButton>
          }
        </Action>
      </Bar>
    </BarWrap>
  );
}