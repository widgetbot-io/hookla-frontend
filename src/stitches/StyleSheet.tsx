import {getCssText, globalCss} from 'stitches-config';
import { normalize } from 'stitches-normalize-css';

globalCss(...[
  ...normalize,
  {
    'body': {
      'margin': 0,
    },
    '*, *::before, *::after' : {
      boxSizing: 'border-box',
    },
  },
])();

export const StyleSheet = () => ( <style id='stitches' dangerouslySetInnerHTML={{__html: getCssText()}}/> )