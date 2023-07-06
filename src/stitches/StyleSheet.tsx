import {getCssText, globalCss, theme} from 'stitches-config';
import { normalize } from 'stitches-normalize-css';

globalCss(...[
  ...normalize,
  {
    'body': {
      margin: 0,
      background: theme.colors.neutral100,
    },
    '*, *::before, *::after' : {
      boxSizing: 'border-box',
    },
  },
])();

export const StyleSheet = () => ( <style id='stitches' dangerouslySetInnerHTML={{__html: getCssText()}}/> )