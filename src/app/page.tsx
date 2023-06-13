import * as Common from '@/components/common';
import * as Styles from './styles';

export default function Home() {
  return (
    <Common.Container color="secondary">
      <Common.Navbar/>
      <Styles.Box>
        <Common.Button type="primary" arrow>Button</Common.Button>
        <p>Page one</p>
      </Styles.Box>
    </Common.Container>
  )
}
