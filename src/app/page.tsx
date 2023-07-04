import * as Common from '@/components/common';
import * as Home from '@/components/home';

export default function Index() {
  return (
    <>
      <Home.HeroSection />
      <Common.Container>
        <Home.ConfigureSection />
      </Common.Container>
    </>
  )
}
