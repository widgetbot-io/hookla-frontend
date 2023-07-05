import {styled, theme} from "stitches-config";
import * as Common from "@/components/common";

const Section = styled('section', {
  position: 'relative',
});

const SubmitContent = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export function Submit() {
  return (
    <Section>
      <Common.BackgroundSprite src='./waves.svg' width={347} height={230} css={{left: '-128px', top: '-32px'}}/>
      <Common.BackdropBox css={{
        $$background: theme.colors.green300,
        $$foreground: `${theme.colors.green400} url(/submit_bg.svg) no-repeat right`,
        marginTop: '64px',
      }}>
        <SubmitContent>
          <Common.Text size='h3' as='h3' css={{color: theme.colors.green800}}>Ready to go?</Common.Text>
          <Common.Button type='primary' arrow>Proceed</Common.Button>
        </SubmitContent>
      </Common.BackdropBox>
    </Section>
  )
}