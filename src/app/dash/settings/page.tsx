import {theme} from 'stitches-config';
import * as Common from '@/components/common';
import * as Dash from '@/components/dash';

export default function Page() {
  return (
    <>
      <Dash.Heading>
        <Common.Text size='h3' as='h1'>Settings.</Common.Text>
        <Common.Text css={{color: theme.colors.neutral700}}>Configure generic settings for your webhook.</Common.Text>
      </Dash.Heading>
      <Dash.Section title='Meta.' desc='Information to identify your webhook.'>
        <Dash.Input type='text' label='Name' placeholder='WidgetBot' status='valid'/>
        <Dash.Input css={{marginTop: '32px'}} type='textarea' label='Description' placeholder='WidgetBot is cool.' status='invalid'/>
      </Dash.Section>
    </>
  )
}