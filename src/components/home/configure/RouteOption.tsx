'use client'

import {styled, theme} from "stitches-config"
import * as Common from "@/components/common";

const Option = styled(Common.Box, {
  background: theme.colors.magenta400,
  border: '1px solid',
  borderColor: theme.colors.magenta900,
  borderRadius: theme.radii.m,
  padding: '32px',
  cursor: 'pointer',
  userSelect: 'none',
});

const RouteCheckbox = styled(Common.Input, {

});

const click = () => {
  console.log('clicked');
}

export function RouteOption() {
  return (
    <Option onClick={click}>
      <RouteCheckbox type='checkbox' />
    </Option>
  );
}