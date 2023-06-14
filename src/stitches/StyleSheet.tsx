import {getCssText, globalCss} from 'stitches-config';
import { normalize } from 'stitches-normalize-css';

globalCss(...normalize)();

export const StyleSheet = () => ( <style id='stitches' dangerouslySetInnerHTML={{__html: getCssText()}}/> )