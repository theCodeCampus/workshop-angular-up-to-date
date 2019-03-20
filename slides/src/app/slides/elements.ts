import { Component } from '@angular/core';
import { TableOfContentEntry } from '@w11k/ngx-present';

@TableOfContentEntry({
  linkName: 'Angular Elements'
})
@Component({
  template: `
    <tcc-master-section-title headline="Angular Elements">
    </tcc-master-section-title>
  `
})
export class TitleSlide {}


@Component({
  template: `
    <tcc-master-regular headline="Web Components">
      <pre markdown>

      </pre>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
        * https://www.webcomponents.org/introduction
        * Überbegriff für verschiedene Standards
          * HtML Templates
          * HTML Imports (deprecated)
          * Custom Elements
          * Shadow Dom
        * Verpricht Komponenten framework unabhängig verwenden zu können
        * Mit einem Framework, oder auch ohne entwickeln und überall verwenden
        * Custom Elements wichtigster Standard
        * Use Cases
          * Nicht SPAs, z.B. CMS Intergration, Redakteur kann in CMS Tag verwenden
          * Multi-Framework Entwicklung, unterschiedliche Teams arbeiten mit unterschiedlichen Tools
          * Integration in Alt-Wendungen / Technologien
          * Upgrade von AngularJS zu Angular (statt über @angular/upgrade)
        * Eigentlich was wir in Angular schon die ganze Zeit mit Komponenten machen,
          nur das es jetzt der Browser direkt kann, ohne Angular außen herum
        * Zwei Blickrichtungen: von außen und von innen
          * Wie entwickeln wir unsere Web-Komponenten
          * Wie verwenden wir eine Web-Komponente
        * Bei Verwendung: Polyfill für IE und Edge
          * @webcomponents/webcomponentsjs
          * Problem: Web Components auf ES2015 ausgelegt
          * Unser Code für IE muss ES5 sein -> moderne Browser lehnen das zusammen ab
          * Lösung 1: Weiteres Polyfill native-shim.js
          * Lösung 2: Differential Loading (ES2015 Code für moderne browser, ES5 nur für IE)
        * Build
          * Bundling soll in eine Datei erfolgen statt 4
          * ngx-build-plus von Manfred Steyer (https://github.com/manfredsteyer/ngx-build-plus)
          * --output-hashing none --single-bundle
      </pre>
    </tcc-speaker-notes>
  `
})
export class WebComponentsSlide {}


@Component({
  template: `
    <tcc-master-regular headline="Angular Elements">
      <pre markdown>

      </pre>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
        * https://next.angular.io/guide/elements
        * Bisher
          * Normalerweise werden Angular Komponenten nur in Angular Anwendung verwendet
          * Angular CLI kann Anwendungen und Bibliotheken bauen, Bibliotheken aber bisher immer für Angular Anwendungen
        * Zwei Blickrichtungen: Entwicklung mit Angular, Verwendung mit Angular
        * Ziel
          * Entwicklung mit Angular, aller Komfort, alle Features
          * Verwendung mit allem möglich, weil als Web Component exportiert
          * Dynamisches Laden
          * Wenn dynamisch nachgeladen werden, dann Weg frei für Micro-Frontends
          * Lazy Loading auf zwei Wegen
            * Teil des Projekt-Codes dynamisch nachladen
              * Bisher hauptsächlich über das Routing
              * Seit Angular CLI 6 auch mit beliebigen Modulen möglich
                * lazyModules in angular.json
                * bundle relativ klein, weil gemeinsame sachen bereits von app geladen
            * von externer Quelle laden
              * Context ist beim bauen ungekannt, alles muss mit rein gepackt werden
              * großes Bundle weil kompletes Angular und Dependencies wie RxJS enthalten
              * Überleitung zu Ivy
        * Angular Elements baut einen Wrapper um die Komponente
          * Komponente wird nicht in Angular Templates verwendet, muss also in entryComponents
          * stellt <code>createCustomElement</code> Funktion bereit
            * braucht Injector
            * gibt Custom Element zurück
          * Custom Element muss beim Browser registriert werden <code>customElements.define('tag-name', customElement)</code>
          * Wann und wo wird das gemacht?
            * Wenn Verwendung innerhalb von Angular Andwendung, dann z.B. in Module Constructor
            * Wenn Verwendung außerhalb dann in AppModule#ngDoBootstrap und bootstrap: []
        * Demo
          * ng add @angular/elements
      </pre>
    </tcc-speaker-notes>
  `
})
export class ElementsSlide {}

export const elementsSlides = [
  TitleSlide,
  WebComponentsSlide,
  ElementsSlide,
];
