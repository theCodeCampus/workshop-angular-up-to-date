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
    <tcc-master-regular headline="Worum geht es eigentlich?">
      <pre markdown>
        * Bisher
          * Angular Komponenten werden in Angular Anwendung verwendet
          * Bibliotheken auf nur für Angular gedacht
          * Geschlossenes Öko-System
        * Wie wäre es wenn wir ... könnten
          * Angular Komponenten außerhalb von Angular verwenden
          * Browser kennt Tags unserer Komponenten
          * Komponente anderer Frameworks in Angular verwenden
      </pre>
    </tcc-master-regular>
  `
})
export class IntroSlide {}


@Component({
  template: `
    <tcc-master-regular headline="Web Components">
      <pre markdown>
        * WebComponents ermöglichen genau das
        * Überbegriff für verschiedene Standards
          * HTML Templates
          * Custom Elements
          * Shadow Dom
        * Verspricht Komponenten Framework unabhängig verwenden zu können
        * Mit Framework oder plain entwickeln, überall verwenden
        * Custom Elements wichtigster Standard
      </pre>
    </tcc-master-regular>
  `
})
export class WebComponentsSlide {}

@Component({
  template: `
    <tcc-master-regular headline="Polyfills">
      <pre markdown>
        * Für IE und Edge wird Polyfill benötigt<br>
          <a href="https://www.webcomponents.org" target="_blank">@webcomponents/webcomponentsjs</a>
        * IE unterstützt kaum ES2015 &rarr; Target ES5
        * Problem: WebComponents auf ES2015 ausgelegt
          * Moderner Browser erlaubt kein ES5 bei WebComponents
        * Lösung 1: Weiteres Polyfill native-shim.js
        * Lösung 2: Differential Loading (<a href="https://github.com/manfredsteyer/ngx-build-plus/tree/master/ngx-build-modern" target="_blank">ngx-build-modern</a>)
      </pre>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
      </pre>
    </tcc-speaker-notes>
  `
})
export class PolyfillsSlide {}

@Component({
  template: `
    <tcc-master-regular headline="Use Cases">
      <pre markdown>
        * CMS Intergration
        * Multi-Framework Entwicklung
        * Integration in Alt-Anwendungen / Technologien
        * Upgrade von AngularJS zu Angular (statt über @angular/upgrade)
        * Lazy Laoding und Micro-Frontends
      </pre>
    </tcc-master-regular>
  `
})
export class UseCasesSlide {}


@Component({
  template: `
    <tcc-master-regular headline="Angular Elements">
      <pre markdown>
        * Angular Elements stellt Funktion <code>createCustomElement</code> bereit
          * Verpackt eine Angular Komponente als WebComponent
        * Intern alles von Angular nutzbar
        * Nach außen Standard WebComponent
      </pre>
    </tcc-master-regular>
  `
})
export class ElementsSlide {}

@Component({
  template: `
    <tcc-master-regular headline="Demo">
      <h2>Probieren wir es mal aus</h2>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
        * ng new elements-app
        * ng add @angular/elements
        * ng g m feature1
        * ng g c feature1/foobar
        * Foobar bekommt zwei Inputs, primitiv und Objekt
        * Foobar gibt beides im UI aus
        * Feature1Module in constructor
          * createCustomElement aufrufen
          * CustomElement registrieren mit customElement.define('selector', ce)
      </pre>
    </tcc-speaker-notes>
  `
})
export class Demo1Slide {}


@Component({
  template: `
    <tcc-master-regular headline="Komponente dynamisch erzeugen">
      <div>
        <pre markdown>
          * Bisher nur Verwendung im Template
          * WebComponents erleichtern aber auch dynamisches Erzeugen enorm
        </pre>
        <tcc-code language="typescript" [code]="ngComponent"></tcc-code>
      </div>
    </tcc-master-regular>
  `
})
export class DynamicComponent1Slide {
  ngComponent = `
const popup = document.createElement('popup-component');

const factory = this.componentFactoryResolver.resolveComponentFactory(PopupComponent);
const popupComponentRef = factory.create(this.injector, [], popup);

this.applicationRef.attachView(popupComponentRef.hostView);

popupComponentRef.instance.closed.subscribe(() => {
  document.body.removeChild(popup);
  this.applicationRef.detachView(popupComponentRef.hostView);
});

popupComponentRef.instance.message = message;

document.body.appendChild(popup);
  `;
}

@Component({
  template: `
    <tcc-master-regular headline="Komponente dynamisch erzeugen">
      <div>
        <pre markdown>
          * Bisher nur Verwendung im Template
          * WebComponents erleichtern aber auch dynamisches Erzeugen enorm
        </pre>
        <tcc-code language="typescript" [code]="webComponent"></tcc-code>
      </div>
    </tcc-master-regular>
  `
})
export class DynamicComponent2Slide {
  webComponent = `
const popupEl: NgElement & WithProperties<PopupComponent> =
  document.createElement('popup-element') as any;

popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));

popupEl.message = message;

document.body.appendChild(popupEl);
  `;
}


@Component({
  template: `
    <tcc-master-regular headline="Lazy Loading">
      <div>
        <pre markdown>
          * Neue Möglichkeiten mit Komponenten gepackt als Skript mit WebComponents
          * Use Case: Innerhalb von Angular z.B. bei Benutzer-Interaktion
            * Skript nachladen
            * DOM Element erzeugen
            * Lazy Laoding auf Komponenten Ebene statt Routing
          * Ab Angular CLI 6 möglich
            * Kleine Bundles dank bekanntem Kontext
        </pre>
      </div>
    </tcc-master-regular>
  `
})
export class LazyLoading1Slide {}

@Component({
  template: `
    <tcc-master-regular headline="Lazy Loading">
      <div>
        <tcc-code language="typescript" [code]="angularJson" headline="angular.json"></tcc-code>
        <tcc-code language="typescript" [code]="loading" headline="angular.json"></tcc-code>
      </div>
    </tcc-master-regular>
  `
})
export class LazyLoading2Slide {
  angularJson = `
"build": {
  "builder": "@angular-devkit/build-angular:browser",
  "options": {
    "lazyModules": [ "src/app/lazy/lazy.module" ]
}}
  `;

  loading = `
export class FoobarComponent {
  constructor(private loader: NgModuleFactoryLoader, private injector: Injector) {}

  async onButtonClicked(): void {
    const path = 'src/app/lazy/lazy.module#LazyModule';
    const moduleFactory = await this.loader.load(path);

    moduleFactory.create(this.injector);

    // document.createElement();
  }
}
  `;
}

@Component({
  template: `
    <tcc-master-regular headline="Micro-Frontend">
      <pre markdown>
        * Lazy Laoding per Skript-Tag von beliebiger Quelle möglich
        * Bei Benutzer-Interaktion
          * Dynamisch Script-Tag erzeugen
          * WebComponent verwenden
        * Problem: Skript kennt Kontext nicht
          * Muss alles mitbringen was es braucht
          * TreeShaking besondeers wichtig
      </pre>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
        * Dynamisches Erzeugen von Skript-Tags eigentlich aus Security-Sicht unerwünscht
        * Preis für mehr Flexibilität
      </pre>
    </tcc-speaker-notes>
  `
})
export class MicroFrontendSlide {}


@Component({
  template: `
    <tcc-master-regular headline="Exportieren">
      <pre markdown>
        * <code>ng build</code> erzeugt 4 Dateien
          * So nicht sinnvoll extern nutzbar
        * <a href="https://github.com/manfredsteyer/ngx-build-plus" target="_blank">ngx-build-plus</a> erweitert Angular CLI
        * <code>ng build --output-hashing none --single-bundle</code>
      </pre>
    </tcc-master-regular>
  `
})
export class BundleSlide {}


@Component({
  template: `
    <tcc-master-regular headline="Demo">
      <h2>Auch das probieren wir aus</h2>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
        * Registrierung nach AppModule in ngDoBootstrap verschieben
        * bootstrap Feld in AppModule Decorator leeren
        * <code>ng add ngx-build-plus</code>
        * <code>ng build --output-hashing none --single-bundle</code>
        * package.json in dist anlegen und <code>npm pack</code>
        * zweites Projekt anlegen
        * npm install tgz
      </pre>
    </tcc-speaker-notes>
  `
})
export class Demo2Slide {}

export const elementsSlides = [
  TitleSlide,
  IntroSlide,
  WebComponentsSlide,
  UseCasesSlide,
  PolyfillsSlide,
  ElementsSlide,
  Demo1Slide,
  DynamicComponent1Slide,
  DynamicComponent2Slide,
  LazyLoading1Slide,
  LazyLoading2Slide,
  MicroFrontendSlide,
  BundleSlide,
  Demo2Slide,
];
