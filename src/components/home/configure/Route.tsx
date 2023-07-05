import {styled, theme} from "stitches-config";
import Image from "next/image";
import * as Common from "@/components/common";
import {RouteOption} from "./RouteOption";

const RouteSection = styled('section', {
  position: 'relative',
  display: 'flex',
  marginTop: '32px',
  alignItems: 'center',
});

const RouteGroup = styled('div', {
  flexGrow: 1,
});

const RouteScroll = styled('div', {
  maxHeight: '480px',
  overflow: 'auto',
  marginTop: '32px',
  textAlign: 'left',

  '& > *:not(:first-child)': {
    marginTop: '8px',
  }
});

export function Route() {
  return (
    <RouteSection>
      <Common.BackgroundSprite src='./star.svg' width={256} height={256} css={{left: '-156px', top: '64px'}}/>
      <Common.BackgroundSprite src='./lines.svg' width={288} height={288} css={{right: '-172px', bottom: '32px'}}/>
      <RouteGroup css={{paddingRight: '32px'}}>
        <Common.Text size='h2' as='h2' css={{color: theme.colors.neutral900}}>Select your providers.</Common.Text>
        <Common.Text size='p' css={{color: theme.colors.neutral700, marginTop: '16px'}}>Description of what a provider is.</Common.Text>
        <RouteScroll>
          <RouteOption />
          <RouteOption />
          <RouteOption />
          <RouteOption />
        </RouteScroll>
      </RouteGroup>
      <Image src='/arrow_xlarge.svg' width={124} height={22} alt='Arrow' />
      <RouteGroup css={{paddingLeft: '32px', textAlign: 'right'}}>
        <Common.Text size='h2' as='h2' css={{color: theme.colors.neutral900}}>Select your destinations.</Common.Text>
        <Common.Text size='p' css={{color: theme.colors.neutral700, marginTop: '16px'}}>Description of what a destination is.</Common.Text>
        <RouteScroll>
          <RouteOption />
          <RouteOption />
          <RouteOption />
          <RouteOption />
        </RouteScroll>
      </RouteGroup>
    </RouteSection>
  )
}