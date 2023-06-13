import {styled} from 'stitches-config';

const Nav = styled('nav', {
  position: "fixed",
  width: "100vw",
  background: "red",
  top: 0,
  left: 0,
});

export function Navbar() {
  return (
    <Nav></Nav>
  )
}