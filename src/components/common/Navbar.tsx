import {styled, theme} from 'stitches-config';
import {Button} from './Button';
import {Container} from './Container';
import {Text} from './Text';
import {Box} from './Box';
import {Input} from './Input';

const Nav = styled('nav', {
  position: 'fixed',
  width: '100vw',
  background: theme.colors.neutral100,
  top: 0,
  left: 0,
  padding: '24px 0',
  borderBottom: '1px solid',
  borderColor: theme.colors.neutral400,
});

const Brand = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontSize: theme.fontSizes.m,

  '&::before': {
    content: '',
    display: 'block',
    width: '32px',
    height: '32px',
    marginRight: '16px',
    background: 'url(/logo.svg)',
  },
});

export function Navbar() {
  return (
    <Nav>
      <Container css={{display: 'flex', alignItems: 'center'}}>
        <Brand>
          <Box>
            <Text>Hookla</Text>
            <Text css={{color: theme.colors.magenta400}}>Keep your community informed.</Text>
          </Box>
        </Brand>
        <Box css={{flexGrow: '1', display: 'flex', justifyContent: 'flex-end'}}>
          <Input placeholder='Search documentation' type='search' />
          <Button type='secondary'>Login</Button>
          <Button css={{marginLeft: '16px'}} type='primary'>Sign Up</Button>
        </Box>
      </Container>
    </Nav>
  );
}