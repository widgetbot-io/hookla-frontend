import {styled, theme} from 'stitches-config';
import {Container} from './Container';
import {Button} from './Button';
import {Input} from './Input';
import {Text} from './Text';

const Nav = styled('nav', {
  position: 'fixed',
  width: '100vw',
  background: theme.colors.neutral100,
  top: 0,
  left: 0,
  padding: '24px 0',
  borderBottom: '1px solid',
  borderColor: theme.colors.neutral400,
  zIndex: 10,
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
});

const Bar = styled('div', {
  flexGrow: '1',
  display: 'flex',
  justifyContent: 'flex-end',
})

export function Navbar() {
  return (
    <Nav>
      <Container css={{display: 'flex', alignItems: 'center'}}>
        <Brand>
          <div>
            <Text>Hookla</Text>
            <Text css={{color: theme.colors.magenta400}}>Keep your community informed.</Text>
          </div>
        </Brand>
        <Bar>
          <Input placeholder='Search documentation' type='search' />
          <Button type='secondary'>Login</Button>
          <Button css={{marginLeft: '16px'}} type='primary'>Sign Up</Button>
        </Bar>
      </Container>
    </Nav>
  );
}