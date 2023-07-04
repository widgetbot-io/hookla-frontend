import type {CSS} from '@stitches/react';
import {ReactNode} from 'react';
import {styled, theme} from 'stitches-config';
import {Box} from './Box';

type BackdropBoxProps = {
  children: ReactNode;
  css: CSS;
}

const Background = styled(Box, {
  background: '$$background',
  padding: 0,
  margin: '4px 0 0 4px',
  borderRadius: theme.radii.large,
});

const Foreground = styled(Box, {
  background: '$$foreground',
  transform: 'translate(-4px, -4px)',
});

export function BackdropBox({ children, css }: BackdropBoxProps) {
  return (
    <Background css={css}>
      <Foreground>
        {children}
      </Foreground>
    </Background>
  )
}