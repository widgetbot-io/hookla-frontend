import * as Dash from '@/components/dash';
import * as Common from "@/components/common";
import {theme} from "stitches-config";

export default function Page() {
  return (
    <>
      <Dash.Heading>
        <Common.Text size='h3' as='h1'>Providers.</Common.Text>
        <Common.Text css={{color: theme.colors.neutral700}}>Define your providers for the WidgetBot webhook here.</Common.Text>
      </Dash.Heading>
      <Dash.Section title='Providers.' desc='Providers description here.'>
        <Dash.Route configurable>
          <Common.Text>Provider</Common.Text>
          <Common.Text>Provider Description</Common.Text>
        </Dash.Route>
        <Dash.Route configurable>
          <Common.Text>Provider</Common.Text>
          <Common.Text>Provider Description</Common.Text>
        </Dash.Route>
        <Dash.Route configurable>
          <Common.Text>Provider</Common.Text>
          <Common.Text>Provider Description</Common.Text>
        </Dash.Route>
        <Dash.Route css={{marginBottom: 0}} configurable>
          <Common.Text>Provider</Common.Text>
          <Common.Text>Provider Description</Common.Text>
        </Dash.Route>
      </Dash.Section>
    </>
  )
}