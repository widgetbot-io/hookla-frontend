'use client'

import {styled, theme} from 'stitches-config';
import {useState} from 'react';
import * as Common from '@/components/common';

const SidebarSelectWrap = styled('div');

const SidebarSelectInput = styled('select', {

});

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

const SidebarSelectOption = styled('div');

export function SidebarSelect() {
  const [display, setDisplay] = useState(false);

  return (
    <SidebarSelectWrap>
      <SidebarSelectInput>
        <option value='widgetbot'>WidgetBot</option>
        <option value='kindolin'>Kindolin</option>
        <option value='prism'>Prism</option>
      </SidebarSelectInput>
      <SidebarSelectStyled>
        <SidebarSelectButton align='left' onClick={() => setDisplay(!display)}>
          WidgetBot
        </SidebarSelectButton>
        <SidebarSelectList css={{display: display ? 'block' : 'none'}}>
          <SidebarSelectOption>WidgetBot</SidebarSelectOption>
          <SidebarSelectOption>Kindolin</SidebarSelectOption>
          <SidebarSelectOption>Prism</SidebarSelectOption>
        </SidebarSelectList>
      </SidebarSelectStyled>
    </SidebarSelectWrap>
  )
}