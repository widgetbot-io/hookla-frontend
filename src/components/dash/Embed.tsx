import {styled, theme} from 'stitches-config';
import Link from 'next/link';
import * as Form from '@/components/dash/form';
import * as Common from '@/components/common';

const EmbedBuilder = styled('section', {
  '& > *:not(:last-child)': {
    marginBottom: '8px',
  }
});

const EmbedPreview  = styled('section');

const EmbedPreviewBox = styled('div', {
  border: '1px solid',
  borderLeft: '4px solid',
  borderColor: theme.colors.neutral900,
  borderLeftColor: theme.colors.magenta400,
  borderRadius: theme.radii.medium,
  background: theme.colors.neutral800,
  padding: '16px',
});

const EmbedHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '8px',

  '& > a': {
    color: theme.colors.neutral100,
    textDecoration: 'none',
  },

  '&::before': {
    content: '',
    display: 'block',
    width: '24px',
    height: '24px',
    backgroundImage: 'url(/pfp.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    borderRadius: theme.radii.circle,
    marginRight: '8px',
  }
});

const EmbedFooter = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: '8px',
  color: theme.colors.neutral300,
  fontSize: theme.fontSizes.xsmall,

  '&::before': {
    content: '',
    display: 'block',
    width: '20px',
    height: '20px',
    backgroundImage: 'url(/github.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    borderRadius: theme.radii.circle,
    marginRight: '8px',
  }
});

export function Embed() {
  return (
    <>
      <EmbedBuilder>
        <Form.Input type='text' label='Title' placeholder='Embed title' />
        <Form.Input type='text' label='Description' placeholder='Embed description' />
        <Form.Input type='text' label='URL' placeholder='Embed URL' />
        <Form.Input type='text' label='Footer' placeholder='Embed Footer' />
        <Form.Checkbox label='Timestamp' />
      </EmbedBuilder>
      <EmbedPreview>
        <Common.Text as='h3' size='h4' css={{marginTop: '32px'}}>Preview</Common.Text>
        <Common.Box css={{
          borderStyle: 'dashed',
          borderColor: theme.colors.neutral300,
          marginTop: '8px',
        }}>
          <EmbedPreviewBox>
            <EmbedHeader>
              <Link href='/'>nick</Link>
            </EmbedHeader>
            <Common.Text css={{color: theme.colors.neutral400}}>feat: Create index</Common.Text>
            <EmbedFooter>
              <Common.Text>widgetbot-io/hookla-frontend:master &middot; Today at 01:30</Common.Text>
            </EmbedFooter>
          </EmbedPreviewBox>
        </Common.Box>
      </EmbedPreview>
    </>
  )
}