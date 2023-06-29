import { ReactNode } from 'react';
import {styled, theme} from 'stitches-config';

const ForegroundBox = styled('div', {
  position: 'relative',
  border: '1px solid',
  borderColor: theme.colors.neutral900,
  borderRadius: theme.radii.medium,
  padding: '32px',
  zIndex: '1',
});

const BackgroundBox = styled('div', {
});

type BoxProps = {
  children: ReactNode;
}

export function Box({ children }: BoxProps) {
  return (
    <BackgroundBox>
      <ForegroundBox>
        {children}
      </ForegroundBox>
    </BackgroundBox>
  )
}