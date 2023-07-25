import {styled} from 'stitches-config';
import {Input} from '@/components/dash/Input';
import {Checkbox} from '@/components/dash/Checkbox';

const EmbedPreview  = styled('section');

const EmbedBuilder = styled('section');

export function Embed() {
  return (
    <>
      <EmbedBuilder>
        <Input type='text' label='Title' placeholder='Embed title' />
        <Input type='text' label='Description' placeholder='Embed description' />
        <Input type='text' label='URL' placeholder='Embed URL' />
        <Input type='text' label='Footer' placeholder='Embed Footer' />
        <Checkbox label='Timestamp' />
      </EmbedBuilder>
      <EmbedPreview>
        Preview
      </EmbedPreview>
    </>
  )
}