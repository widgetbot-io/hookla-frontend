import {styled, theme} from 'stitches-config';
import {ReactNode} from 'react';
import * as Common from '@/components/common';

type SectionProps = {
  children: ReactNode;
  title: string;
  desc: string;
}

const SectionWrap = styled('section', {
  display: 'flex',

  '@media (max-width: 1100px)': {
    flexDirection: 'column',
  },
});

const SectionHeading = styled('div', {
  width: '100%',
  maxWidth: '240px',

  '@media (max-width: 1100px)': {
    marginBottom: '16px',
  },
});

const SectionBody = styled('div', {
  width: '100%',
});

export function Section({children, title, desc}: SectionProps) {
  return (
    <SectionWrap>
      <SectionHeading>
        <Common.Text size='h4' as='h2'>{title}</Common.Text>
        <Common.Text size='sub' css={{color: theme.colors.neutral600, marginTop: '8px'}}>{desc}</Common.Text>
      </SectionHeading>
      <SectionBody>
        {children}
      </SectionBody>
    </SectionWrap>
  )
}