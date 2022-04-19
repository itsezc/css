import { ALIGN, CONTENT, dash } from './constants/css-property-keyword';
import { Style } from '@master/style';

export class AlignContent extends Style {
    static override key = dash(ALIGN, CONTENT);
}