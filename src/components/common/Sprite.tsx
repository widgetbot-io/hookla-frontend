import type {CSS} from '@stitches/react';
import {styled} from "stitches-config";
import Image from 'next/image'

type SpriteProps = {
  src: string;
  css: CSS;
  width: number;
  height: number;
}

const Vector = styled('div', {
  position: 'absolute',
  zIndex: '-1',
})

export function Sprite({src, css, width, height}: SpriteProps) {
  return (
    <Vector css={css}>
      <Image src={src} alt='sprite' width={width} height={height} />
    </Vector>
  )
}