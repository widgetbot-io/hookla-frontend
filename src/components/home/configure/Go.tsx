import {styled, theme} from "stitches-config";
import * as Common from "@/components/common";

const GoSection = styled(Common.Box, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: theme.colors.green400,
  padding: '32px',
  borderRadius: theme.radii.m,
  border: '1px solid',
  borderColor: theme.colors.neutral900,
});

export function Go() {
  return (
    <GoSection>
      <Common.Text size='h3' as='h3'>Ready to go?</Common.Text>
      <Common.Button type='primary' arrow>Proceed</Common.Button>
    </GoSection>
  )
}