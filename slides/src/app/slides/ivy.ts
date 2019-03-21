import { Component } from '@angular/core';
import { TableOfContentEntry } from '@w11k/ngx-present';

@TableOfContentEntry({
  linkName: 'Ivy Renderer'
})
@Component({
  template: `
    <tcc-master-section-title headline="Ivy Renderer">
    </tcc-master-section-title>
  `
})
export class TitleSlide {}


@Component({
  template: `
    <tcc-master-regular headline="Worum geht es überhaupt?">
      <pre markdown>
        * In Templates wird Angular verwendet
          * Komponenten, Direktiven, Interpolation
          * Micro-Syntax wie bei ngFor und Pipes
        * Template muss geparset und übersetzt werden
        * Kennen wir schon von JIT vs AOT
        * Was ist das Zielformat?
      </pre>
    </tcc-master-regular>
  `
})
export class IntroSlide {}

@Component({
  template: `
    <tcc-master-regular headline="Demo">
      <h2>Schauen wir uns mal an ...</h2>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
        * ng build ausführen, ohne prod
        * in <code>main.js</code> nach app.component.html suchen
        * Renderer ist ein Objekt, ein Angular Service
        * ComponentFactory wurde generiert
        * Metadaten stehen nicht direkt da
      </pre>
    </tcc-speaker-notes>
  `
})
export class NonIvyDemoSlide {}

@Component({
  template: `
    <tcc-master-regular headline="Probleme">
      <pre markdown>
        * Code soll später von TreeShaker optimiert werden
        * Generierter Code nicht optimal: viel OOP, wenig FP
        * Was könnte wegoptimiert werden?
          * Teile der Template syntax
          * Dependency Injection
          * Content Projection
          * Structural Directives
          * Lifecycle Hooks
          * Pipes, Queries, Listeners
      </pre>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
      </pre>
    </tcc-speaker-notes>
  `
})
export class NonIvyProblemsSlide {}

@Component({
  template: `
    <tcc-master-regular headline="Ivy Renderer">
      <pre markdown>
        * Mit Renderer / View Engine kaum direkter Kontakt
        * Ivy nach <code>Renderer</code> und <code>Renderer2</code> dritte Version
          * Wer hat vorherige Umstellung mit Angular 4 bemerkt?
          * Nur wer <code>Renderer</code> als Service benutzt
        * Ivy soll keine Breaking Changes verursachen
      </pre>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
      </pre>
    </tcc-speaker-notes>
  `
})
export class IvySlide {}

@Component({
  template: `
    <tcc-master-regular headline="Angular Compiler">
      <pre markdown>
        * Compiler muss angepasst werden damit er Ivy Code generiert
        * Was ist mit bereits kompiliertem Code
          * Bibliotheken, per npm installiert
        * Compatibility Compiler ngcc: schreibt kompilierten Code auf neue API um
          * Aktuell als npm-postinstall-Skript um es nur einmal auszuführen
          * Ändert Code in node_modules
        * Mit Bazel wird Caching im Build-Tool möglich
          * ngcc wird einmal ausgeführt, Ergebnis kommt in Cache
          * ngcc wird übersprungen sofern node_modules nicht geändert
      </pre>
    </tcc-master-regular>
  `
})
export class CompilerSlide {}

@Component({
  template: `
    <tcc-master-regular headline="Demo">
      <pre markdown>
        * <code>npm install -g @angular/cli@next</code>
        * <code>ng new ivy-app --enable-ivy</code>
        * <code>cd ivy-app</code>
        * <code>ng build --aot</code>
      </pre>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
        * Hello World ein mal mit und ein mal ohne Ivy
        * Jeweils den generierten Code zeigen, <code>ng build</code> ohne prod
        * Bundle Size vergleichen
      </pre>
    </tcc-speaker-notes>
  `
})
export class DemoSlide {}

@Component({
  template: `
    <tcc-master-regular headline="Vorteile Ivy">
      <pre markdown>
        * Einfacheres Debugging dank kürzerer Stacktraces
        * Debugging API <code>ng.getComponent($0)</code>
        * Lazy Loading an jeder Stelle möglich nicht nur beim Routing
          * Standardisierte Dynamic Imports statt Magic Strings
        * Higher Order Components
          * Komponenten, die andere Komponenten entgegennehmen
      </pre>
    </tcc-master-regular>
  `
})
export class AdvantagesSlide {}

@Component({
  template: `
    <tcc-master-regular headline="Demo">
      <h2>Schauen wir uns mal an</h2>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
        * Element mit Click-Handler
        * Breakpoint in Handler
        * ng.getComponent ausprobieren
        * Geht das auch im Prod-Build?
          * Vorteil gegenüber ng.probe
      </pre>
    </tcc-speaker-notes>
  `
})
export class AdvantagesDemoSlide {}

@Component({
  template: `
    <tcc-master-regular headline="Renderer als Service">
      <pre markdown>
        * Renderer auch als Angular Service per DI verfügbar
          * Verwenden statt direkter DOM-Manipulationen
        * Warum?
          * Security, DOM API ist ein schweizer Käse
          * Animationen
          * Alternative Renderer
        * Was passiert mit sowas wie NativeScript?
      </pre>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
      </pre>
    </tcc-speaker-notes>
  `
})
export class RendererAsServiceSlide {}

@Component({
  template: `
    <tcc-master-regular headline="Status">
      <pre markdown>
        * Preview in Angular 7 & 8
        * Plan: Default in Angular 9
        * ~30 fixme Kommentare
      </pre>
    </tcc-master-regular>
  `
})
export class StatusSlide {}

export const ivySlides = [
  TitleSlide,
  IntroSlide,
  NonIvyDemoSlide,
  NonIvyProblemsSlide,
  IvySlide,
  CompilerSlide,
  DemoSlide,
  AdvantagesSlide,
  AdvantagesDemoSlide,
  RendererAsServiceSlide,
  StatusSlide,
];
