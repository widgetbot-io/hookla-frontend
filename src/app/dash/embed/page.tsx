import * as Dash from '@/components/dash';
import * as Common from "@/components/common";
import {theme} from "stitches-config";

export default function Page() {
  return (
    <>
      <Dash.Heading>
        <Common.Text size='h3' as='h1'>Embed Builder.</Common.Text>
        <Common.Text css={{color: theme.colors.neutral700}}>Configure your embed styling here.</Common.Text>
      </Dash.Heading>
      <Dash.Embed />
    </>
  )
}