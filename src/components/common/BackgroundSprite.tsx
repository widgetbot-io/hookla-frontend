import type {CSS} from '@stitches/react';
import {styled} from "stitches-config";
import Image from 'next/image'

type BackgroundSpriteProps = {
  src: string;
  css: CSS;
}

const Sprite = styled('div', {
  position: 'absolute',
  zIndex: '-1',
})

export function BackgroundSprite({src, css}: BackgroundSpriteProps) {
  return (
    <Sprite css={css}>
      <Image src={src} alt='sprite' width={347} height={230} />
    </Sprite>
  )
}