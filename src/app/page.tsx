import * as Common from '@/components/common';
import * as Home from '@/components/home';

export default function Index() {
  return (
    <>
      <Home.Hero />
      <Common.Container>
        <Home.Configurator />
      </Common.Container>
    </>
  )
}
