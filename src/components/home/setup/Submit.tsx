import {styled, theme} from "stitches-config";
import * as Common from "@/components/common";

const SubmitSection = styled('section', {
  position: 'relative',
  overflowX: 'hidden',
});

const SubmitContainer = styled(Common.Container, {
  position: 'relative',
});

const SubmitContent = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export function Submit() {
  return (
    <SubmitSection>
      <SubmitContainer>
        <Common.BackgroundSprite src='./waves.svg' width={347} height={230} css={{left: '-128px', top: '-32px'}}/>
        <Common.BackdropBox css={{
          $$background: theme.colors.green300,
          $$foreground: `${theme.colors.green400} url(/submit_bg.svg) no-repeat right`,
          margin: '64px 0 128px 0',
        }}>
          <SubmitContent>
            <Common.Text size='h3' as='h3' css={{color: theme.colors.green800}}>Ready to go?</Common.Text>
            <Common.Button type='primary' arrow>Proceed</Common.Button>
          </SubmitContent>
        </Common.BackdropBox>
      </SubmitContainer>
    </SubmitSection>
  )
}