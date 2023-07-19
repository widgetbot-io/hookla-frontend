import * as Dash from "@/components/dash";
import * as Common from "@/components/common";
import {theme} from "stitches-config";

export default function Page() {
  return (
    <>
      <Dash.Heading>
        <Common.Text size='h3' as='h1'>Destinations.</Common.Text>
        <Common.Text css={{color: theme.colors.neutral700}}>Define your Destinations for the WidgetBot webhook here.</Common.Text>
      </Dash.Heading>
      <Dash.Section title='Destinations.' desc='Destinations description here.'>
        <Dash.Route>
          <Common.Text>Destination</Common.Text>
          <Common.Text>Destination Description</Common.Text>
        </Dash.Route>
        <Dash.Route>
          <Common.Text>Destination</Common.Text>
          <Common.Text>Destination Description</Common.Text>
        </Dash.Route>
        <Dash.Route>
          <Common.Text>Destination</Common.Text>
          <Common.Text>Destination Description</Common.Text>
        </Dash.Route>
        <Dash.Route css={{marginBottom: 0}}>
          <Common.Text>Destination</Common.Text>
          <Common.Text>Destination Description</Common.Text>
        </Dash.Route>
      </Dash.Section>
    </>
  )
}