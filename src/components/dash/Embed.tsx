import {styled, theme} from 'stitches-config';

const EmbedPreview = styled('section');

const EmbedBuilder = styled('section');

export function Embed() {
  return (
    <>
      <EmbedBuilder>
        Builder
      </EmbedBuilder>
      <EmbedPreview>
        Preview
      </EmbedPreview>
    </>
  )
}