'use client'

import {styled, theme} from 'stitches-config';
import {useState} from 'react';
import * as Common from '@/components/common';

const SidebarSelectWrap = styled('div');

const SidebarSelectStyled = styled('div', {
  position: 'relative',
});

const SidebarSelectButton = styled(Common.Button, {
  width: '100%',
  padding: '16px',
  borderColor: theme.colors.neutral400,
  backgroundColor: theme.colors.neutral100,
});

const SidebarSelectList = styled(Common.Box, {

});

const SidebarSelectOption = styled('div', {
  cursor: 'pointer',
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
        <SidebarSelectButton align='left' onClick={() => setDisplay(!display)}>
          {current}
        </SidebarSelectButton>
        <SidebarSelectList css={{display: display ? 'block' : 'none'}}>
          {options.map((option, index) => (
            <SidebarSelectOption key={index} onClick={e => setCurrent((e.target as Element).innerHTML)}>
              {option.label}
            </SidebarSelectOption>
          ))}
        </SidebarSelectList>
      </SidebarSelectStyled>
    </SidebarSelectWrap>
  )
}