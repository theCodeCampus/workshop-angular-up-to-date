import { Component } from '@angular/core';
import { TableOfContentEntry } from '@w11k/ngx-present';

@TableOfContentEntry({
  linkName: 'Bazel'
})
@Component({
  template: `
    <tcc-master-section-title headline="Bazel">
    </tcc-master-section-title>
  `
})
export class TitleSlide {}

@Component({
  template: `
    <tcc-master-regular headline="Bazel">
      <pre markdown>
        * <a href="https://bazel.build/" target="_blank">Bazel</a>
          * Fast, scalable, multi-language and extensible build system
          * Developed by Google
          * Internally used heavily for a long time (called Blaze)
          * So far little known / used outside of Google
      </pre>
    </tcc-master-regular>
  `
})
export class AboutBazelSlide {}

@Component({
  template: `
    <tcc-master-regular headline="CLI vs Bazel">
      <pre markdown>
        * Google's Angular projects are build with Bazel
          * Nearly no usage of Angular CLI by Google
        * Why? CLI not usable for large projects
          * Too slow / no incremental builds
          * Hard to extend
        * Currently two Build-Tools to maintain
        * Experiment: Migrate CLI to Bazel (<a href="https://g.co/ng/abc" target="_blank">ABC Project</a>)
          * Affects internal subsystem only
          * Same high level commands
          * Nearly no points of contact for end users
      </pre>
    </tcc-master-regular>
  `
})
export class CLIvsBazelSlide {}

@Component({
  template: `
    <tcc-master-regular headline="Bazel">
      <pre markdown>
        * Bazel is fast
          * runs tasks in parallel
          * caches results
          * builds incremental
          * executes and caches remotely
        * Bazel is extendable
          * Plugins are like unix pipes
        * Bazel is versatile
          * One build tool for all kinds of projects
          * Build your backend
      </pre>
    </tcc-master-regular>
  `
})
export class BazelOverviewSlide {}

@Component({
  template: `
    <tcc-master-regular headline="Angular CLI with Bazel">
      <pre markdown>
        * Currently an Angular Labs project
          * Not ready for production
          * Preview in Angular 7
          * Highly improved Preview in Angular 8
          * Optional in Angular 9
        * Usage should remain the same
      </pre>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
      </pre>
    </tcc-speaker-notes>
  `
})
export class BazelAndCLISlide {}


@Component({
  template: `
    <tcc-master-regular headline="Performance">
      <div>
        <pre markdown>
          * Slide from Presentation in January
        </pre>
        <img src="assets/images/bazel-performance.png" style="max-width: 90vw; max-height: 65vh;" alt="Slide with some performance measurements">
      </div>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
      </pre>
    </tcc-speaker-notes>
  `
})
export class BazelSlideImageSlide {}

@Component({
  template: `
    <tcc-master-regular headline="Demo">
      <pre markdown>
        * <code>npm install -g @angular/cli@next</code>
        * <code>npm install -g @angular/bazel@next</code>
        * <code>ng new bazel-app --collection=@angular/bazel</code>
        * <code>npm run start</code>
      </pre>
    </tcc-master-regular>
  `
})
export class BazelDemoSlide {}


@Component({
  template: `
    <tcc-master-regular headline="Bazel im Detail">
      <a href="https://docs.google.com/presentation/d/1OwktccLvV3VvWn3i7H2SuZkBeAQ8z-E5RdJODVLf8SA/preview" target="_blank">Google Bazel Training</a>
    </tcc-master-regular>
  `
})
export class BazelInDepthSlide {}


export const bazelSlides = [
  TitleSlide,
  AboutBazelSlide,
  CLIvsBazelSlide,
  BazelOverviewSlide,
  BazelAndCLISlide,
  BazelSlideImageSlide,
  BazelDemoSlide,
  BazelInDepthSlide,
];
