import { SlideComponents } from '@w11k/ngx-present';
import { intro } from './slides/intro';
import { outro } from './slides/outro';
import { bazelSlides } from './slides/bazel';
import { typeScriptSlides } from './slides/typescript';
import { ivySlides } from './slides/ivy';
import { elementsSlides } from './slides/elements';
import { angularSlides } from './slides/angular';

export const slides: SlideComponents = [
  intro,
  typeScriptSlides,
  angularSlides,
  bazelSlides,
  elementsSlides,
  ivySlides,
  outro,
];
