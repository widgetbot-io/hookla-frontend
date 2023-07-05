import type {CSS} from '@stitches/react';
import {styled} from "stitches-config";
import Image from 'next/image'

type BackgroundSpriteProps = {
  src: string;
  css: CSS;
  width: number;
  height: number;
}

const Sprite = styled('div', {
  position: 'absolute',
  zIndex: '-1',
})

export function BackgroundSprite({src, css, width, height}: BackgroundSpriteProps) {
  return (
    <Sprite css={css}>
      <Image src={src} alt='sprite' width={width} height={height} />
    </Sprite>
  )
}