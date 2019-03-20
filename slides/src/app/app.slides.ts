import { SlideComponents } from '@w11k/ngx-present';
import { intro } from './slides/intro';
import { outro } from './slides/outro';

export const slides: SlideComponents = [
  ...intro,
  ...outro,
];
