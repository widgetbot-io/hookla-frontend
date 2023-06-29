import {styled, theme} from "stitches-config";
import * as Common from "@/components/common";

const GoSection = styled(Common.Box, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: theme.colors.green400,
  padding: '32px',
  borderRadius: theme.radii.medium,
  border: '1px solid',
  borderColor: theme.colors.neutral900,
  marginTop: '64px',
});

export function Submit() {
  return (
    <GoSection>
      <Common.Text size='h3' as='h3' css={{color: theme.colors.green800}}>Ready to go?</Common.Text>
      <Common.Button type='primary' arrow>Proceed</Common.Button>
    </GoSection>
  )
}