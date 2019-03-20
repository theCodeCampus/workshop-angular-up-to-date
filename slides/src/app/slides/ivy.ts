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
    <tcc-master-regular headline="">
      <pre markdown>
        
      </pre>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
        * https://next.angular.io/guide/ivy
        * HTML Templates werden beim Build vom Angular Compiler zu JavaScript übersetzt
          * Parsen welche Komponetnen verwendeet werden und welche Bindings es gibt, soll nur ein mal stattfinden, AOT
          * Angular Compiler generiert Factories (ComponentFactory, ModuleFactory, ....)
        * Was für Code wird da eigentlich generiert?
          * DOM Operationen? Nein, Operationen gegen eine View Engine, einen Renderer
          * Renderer ist auch als Angular Service per DI verfügbar und kann innerhalb von Komponenten benutzt werden (https://angular.io/api/core/Renderer2)
            Bevorzugt gegenüber direkten DOM-Manipulationen, entkoppelt von DOM (Security, alternative Renderer)
            Scheint wegzufallen, kann jedenfalls keine Infos dazu finden
            Was passiert mit alternativen Renderern wie NativeScript???
        * Bisher generierter Code für aktuellen Renderer ist nicht gut weiter optimierbar, nicht treeshakable
          * Nicht verwendete Teile des Frameworks können nicht entfernt werden
          * z.B. nicht verwendete Lifecylce Hooks, oder Decorator wie ViewChild
        * Ivy Vorteile
          * erlaubt Generierung von gut optimierbarem Code
          * Weniger OOP, mehr Funktionen
          * The tree-shakable features of Angular include:
            * Template syntax
            * Dependency injection
            * Content projection
            * Structural directives
            * Lifecycle hooks
            * Pipes
            * Queries
            * Listeners
          * Einfacheres Debugging
            weniger lange Stacktraces
            Debugging API ng.getComponent($0)
          * Lazy Loading über den Router wird vereinfacht
            * dynamic imports statt magic strings
            * auf Componenten Ebene statt auf Router-Ebene
          * Higher Order Components
        * Ivy soll keine Breaking Changes verursachen, wird under the hood ausgetauscht, so der Plan, deshalb die Verzögerungen
        * Demo
          * Hello World ein mal mit und ein mal ohne Ivy
          * Jeweils den generierten Code zeigen, Minimierung abschalten
          * Bundle Size vergleichen
        * Bibliotheken
          * Was ist mit Code, der schon Komoiliert wurde und als NPM Paket ausgeliefert wird
          * Compatibility Compiler ngcc: schreibt kompilierten Code auf neue API um
          * Aktuell als postinstall Skript um es nur einmal auszuführen
          * Ändert Code in node_modules???
          * In Kombination mit Bazel Caching im Build-Tool möglich, wird beim ersten mal ausgeführt, danach übersprungen sofern sich node_modules nicht geändert haben
        * Verfügbarkeit & Einschränkungen
          * Ab Angular 8 als Vorschau hinter Flag (aktuell beta.9)
          * Ab Angular 9 im Herbst soll es der default werden
      </pre>
    </tcc-speaker-notes>
  `
})
export class IvySlide {}

export const ivySlides = [
  TitleSlide,
  IvySlide,
];
