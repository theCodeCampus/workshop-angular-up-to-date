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
        * <a href="https://bazel.build/" target="_blank">Bazel</a>: a fast, scalable, multi-language and extensible build system
          * Von Google entwickelt
          * Intern schon sehr lange sehr stark eingesetzt
          * Bisher eher Schattendasein außerhalb von Google
        * Google's Angular Projekte bauen mit Bazel statt CLI
          * Google verwender CLI quasi nicht
      </pre>
    </tcc-master-regular>
  `
})
export class AboutBazelSlide {}

@Component({
  template: `
    <tcc-master-regular headline="CLI vs Bazel">
      <pre markdown>
        * CLI für große Projekte nicht optimal
          * Wird langsamer
          * Baut immer alles
          * Schlecht erweiterbar
        * Zwei Build-Tools pflegen aufwändig
          * CLI migriert langsam zu Bazel (<a href="https://g.co/ng/abc" target="_blank">ABC Project</a>)
      </pre>
    </tcc-master-regular>
  `
})
export class CLIvsBazelSlide {}

@Component({
  template: `
    <tcc-master-regular headline="Bazel">
      <pre markdown>
        * Schnell
          * parallelisiert
          * cached, sogar remote
          * baut inkrementell
        * Erweiterbar
          * Plugins sind wie Unix Pipes
        * Universell (Backend)
      </pre>
    </tcc-master-regular>
  `
})
export class BazelOverviewSlide {}

@Component({
  template: `
    <tcc-master-regular headline="Angular CLI mit Bazel">
      <pre markdown>
        * Noch ein Angular Labs Projekt
          * Nicht für produktive Anwendung bereit
          * Preview mit Angular 7 & 8
          * Optional in Angular 9
        * Verwendung soll gleich bleiben
          * Migration "under the hood"
        * Funktionsumfang noch nicht erreicht
        * Geschwindigkeit noch nicht erreicht
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
  BazelDemoSlide,
  BazelInDepthSlide,
];
