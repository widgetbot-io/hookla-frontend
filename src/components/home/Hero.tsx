import {styled, theme} from 'stitches-config';
import * as Common from '@/components/common';

const Background = styled(Common.Box, {
  height: '100%',
  minHeight: '100vh',
  background: theme.colors.green400,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export function Hero() {
  return (
    <Background>
      <Common.Text>Keep your community informed</Common.Text>
    </Background>
  );
}