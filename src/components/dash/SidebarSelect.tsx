'use client'

import {styled, theme} from 'stitches-config';
import {useState} from 'react';
import Link from 'next/link';
import * as Common from '@/components/common';

const SidebarSelectWrap = styled('div', {
  marginTop: '8px',
});

const SidebarSelectStyled = styled('div', {
  position: 'relative',
});

const SidebarSelectButton = styled(Common.Button, {
  variants: {
    expanded: {
      true: {
        borderBottomLeftRadius: '0 !important',
        borderBottomRightRadius: '0 !important',
      }
    },
  },

  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: '16px !important',
  borderColor: `${theme.colors.neutral400} !important`,
  backgroundColor: theme.colors.neutral100,
  fontSize: `${theme.fontSizes.small} !important`,

  '&::before': {
    content: '',
    display: 'block',
    height: '32px',
    width: '32px',
    border: '1px solid',
    borderColor: theme.colors.neutral400,
    backgroundColor: theme.colors.neutral300,
    borderRadius: theme.radii.circle,
    backgroundImage: 'url(/globe.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    marginRight: '8px',
  },

  '&::after': {
    content: '',
    display: 'block',
    height: '20px',
    width: '12px',
    backgroundImage: 'url(/double_caret.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center right',
    marginLeft: 'auto',
  }
});

const SidebarSelectList = styled('div', {
  position: 'absolute',
  width: '100%',
  bottom: 0,
  left: 0,
  transform: 'translateY(100%)',
  padding: 0,
  background: theme.colors.neutral100,
  border: '1px solid',
  borderColor: theme.colors.neutral300,
  borderBottomLeftRadius: theme.radii.medium,
  borderBottomRightRadius: theme.radii.medium,
  borderTop: 'none',
});

const SidebarSelectOption = styled('div', {
  cursor: 'pointer',
  padding: '16px',

  '&:not(:last-child)': {
    borderBottom: '1px solid',
    borderColor: theme.colors.neutral200,
  },

  '& > a': {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme.colors.neutral700,

    '&::before': {
      content: '',
      display: 'block',
      height: '32px',
      width: '32px',
      border: '1px solid',
      borderColor: theme.colors.neutral400,
      backgroundColor: theme.colors.neutral300,
      borderRadius: theme.radii.circle,
      backgroundImage: 'url(/globe.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      marginRight: '8px',
    },

    '&::after': {
      content: '',
      display: 'block',
      height: '12px',
      width: '32px',
      backgroundImage: 'url(/sidebar_arrow.svg)',
      backgroundRepeat: 'no-repeat',
      marginLeft: 'auto',
    }
  }
});

export function SidebarSelect() {
  const options = [
    {
      label: 'WidgetBot',
      value: 'widgetbot',
    },
    {
      label: 'Kindolin',
      value: 'kindolin',
    },
    {
      label: 'Prism',
      value: 'prism',
    }
  ]

  const [display, setDisplay] = useState(false);
  const [current, setCurrent] = useState(options[0].label);

  return (
    <SidebarSelectWrap>
      <SidebarSelectStyled>
        <SidebarSelectButton align='left' expanded={display} onClick={() => setDisplay(!display)}>
          {current}
        </SidebarSelectButton>
        {display &&
            <SidebarSelectList>
              {options.map((option, index) => (
                <SidebarSelectOption key={index} onClick={e => setCurrent((e.target as Element).innerHTML)}>
                  <Link href='/'>{option.label}</Link>
                </SidebarSelectOption>
              ))}
            </SidebarSelectList>
        }
      </SidebarSelectStyled>
    </SidebarSelectWrap>
  )
}