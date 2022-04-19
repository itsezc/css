import { dash, LIST, STYLE } from './constants/css-property-keyword';
import { Style } from '@master/style';

export class ListStyle extends Style {
    static override key = dash(LIST, STYLE);
    override order = -1;
}