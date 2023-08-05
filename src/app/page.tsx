import * as Home from '@/components/home';
import * as Common from '@/components/common';
import {styled, theme} from "stitches-config";
import Image from "next/image";

const HeroWrap = styled(Common.Section, {
  display: 'flex',
  overflow: 'hidden',
  backgroundColor: theme.colors.green500,
  backgroundImage: 'url(./graph.svg)',
});

const Hero = styled(Common.Container, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  textAlign: 'center',
  width: '100%',

  '@media (max-width: 1200px)': {
    justifyContent: 'flex-start',
    textAlign: 'left',
  },

  '@media (max-width: 900px)': {
    flexDirection: 'column',
  },
});

export default function Index() {
  return (
    <>
      <HeroWrap>
        <Hero>
          <Home.NotificationList />
          <Home.Heading>
            <Common.Text size='h1' as='h1'>Keep your community informed</Common.Text>
            <Image src='/arrow_down.svg' width={23} height={65} alt='arrow' />
          </Home.Heading>
          <Home.NotificationList />
        </Hero>
      </HeroWrap>
      <Common.Section>
        <Home.Webhook />
        <Home.RouteList />
        <Home.Submit />
      </Common.Section>
    </>
  )
}
