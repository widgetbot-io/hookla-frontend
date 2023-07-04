import {styled, theme} from "stitches-config";
import * as Common from "@/components/common";

const SubmitContent = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export function Submit() {
  return (
    <Common.BackdropBox css={{$$background: theme.colors.green300, $$foreground: theme.colors.green400, marginTop: '64px'}}>
      <SubmitContent>
        <Common.Text size='h3' as='h3' css={{color: theme.colors.green800}}>Ready to go?</Common.Text>
        <Common.Button type='primary' arrow>Proceed</Common.Button>
      </SubmitContent>
    </Common.BackdropBox>
  )
}