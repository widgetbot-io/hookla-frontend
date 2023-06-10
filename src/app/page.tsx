import Link from 'next/link';
import * as Common from '@/components/common';
import * as Styles from './styles';

export default function Home() {
  return (
    <Common.Container color="secondary">
      <Styles.Box>
        <p>Page one</p>

        <Link href="/page-two">go to page two</Link>
      </Styles.Box>
    </Common.Container>
  )
}
