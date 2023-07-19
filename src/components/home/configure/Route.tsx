import {styled, theme} from "stitches-config";
import Image from "next/image";
import * as Common from "@/components/common";
import {RouteOption} from "./RouteOption";

const RouteSection = styled('section', {
  position: 'relative',
  overflowX: 'hidden',
});

const RouteContainer = styled(Common.Container, {
  position: 'relative',
  display: 'flex',
  marginTop: '32px',
  alignItems: 'center',

  '@media (max-width: 960px)': {
    flexDirection: 'column',
    marginTop: 0,
  },
});

const RouteGroup = styled('div', {
  flexGrow: 1,

  '@media (max-width: 960px)': {
    width: '100%',
    padding: '0 !important',
    textAlign: 'left !important',
    marginTop: '64px',
  },
});

const RouteScroll = styled('div', {
  maxHeight: '480px',
  overflow: 'auto',
  marginTop: '32px',
  textAlign: 'left',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  '& > *:not(:first-child)': {
    marginTop: '8px',
  }
});

const RouteArrow = styled('div', {
  '@media (max-width: 1200px)': {
    display: 'none',
  },
});

export function Route() {
  return (
    <RouteSection>
      <RouteContainer>
        <Common.BackgroundSprite src='./star.svg' width={256} height={256} css={{left: '-156px', top: '64px'}}/>
        <Common.BackgroundSprite src='./lines.svg' width={288} height={288} css={{right: '-172px', bottom: '32px'}}/>
        <RouteGroup css={{paddingRight: '16px'}}>
          <Common.Text size='h2' as='h2' css={{color: theme.colors.neutral900}}>Select your providers.</Common.Text>
          <Common.Text size='p' css={{color: theme.colors.neutral700, marginTop: '16px'}}>Description of what a provider is.</Common.Text>
          <RouteScroll>
            <RouteOption />
            <RouteOption />
            <RouteOption />
            <RouteOption />
          </RouteScroll>
        </RouteGroup>
        <RouteArrow><Image src='/arrow_xlarge.svg' width={124} height={22} alt='Arrow' /></RouteArrow>
        <RouteGroup css={{
          paddingLeft: '16px',
          textAlign: 'right',
        }}>
          <Common.Text size='h2' as='h2' css={{color: theme.colors.neutral900}}>Select your destinations.</Common.Text>
          <Common.Text size='p' css={{color: theme.colors.neutral700, marginTop: '16px'}}>Description of what a destination is.</Common.Text>
          <RouteScroll>
            <RouteOption />
            <RouteOption />
            <RouteOption />
            <RouteOption />
          </RouteScroll>
        </RouteGroup>
      </RouteContainer>
    </RouteSection>
  )
}