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
    <tcc-master-regular headline="What it's all about?">
      <pre markdown>
        * Till today
          * Angular components are developed as part of Angular apps or libs
          * Angular components are used in Angular apps
          * Closed eco system, no open web standard
        * What if we could
          * Use Angular components outside of Angular apps
          * Use components of other frameworks
      </pre>
    </tcc-master-regular>
  `
})
export class IntroSlide {}


@Component({
  template: `
    <tcc-master-regular headline="Web Components">
      <pre markdown>
        * WebComponents should enable us to do that
        * Umbrella for multiple standards
          * HTML Templates
          * Custom Elements
          * Shadow Dom
        * Develop with or without framework
        * Use components framework independently
      </pre>
    </tcc-master-regular>
  `
})
export class WebComponentsSlide {}

@Component({
  template: `
    <tcc-master-regular headline="Polyfills">
      <pre markdown>
        * For IE and Edge we need a polyfill<br>
          <a href="https://www.webcomponents.org" target="_blank">@webcomponents/webcomponentsjs</a>
        * IE supports nearly no ES2015 &rarr; compile to ES5
        * Next Problem: WebComponents rely on ES2015
          * Modern Browsers do not allow WebComponents with ES5
        * Solution 1: Additional polyfill <code>native-shim.js</code>
        * Solution 2: Differential Loading (<a href="https://github.com/manfredsteyer/ngx-build-plus/tree/master/ngx-build-modern" target="_blank">ngx-build-modern</a>)
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
        * CMS Integration
        * Multi-Framework Development
        * Integration in legacy apps
          * Upgrade from AngularJS zu Angular<br>
            (alternative to @angular/upgrade)
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
        * Angular Elements provides function <code>createCustomElement</code>
          * Packs Angular component as WebComponent
        * Internally we can use everything Angular provides
        * Looks like standard WebComponent to the outer world
      </pre>
    </tcc-master-regular>
  `
})
export class ElementsSlide {}

@Component({
  template: `
    <tcc-master-regular headline="Demo">
      <h2>Let's try it</h2>
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
          * Till now usage only in template
          * WebComponents make dynamic instantiation much easier
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
          * Till now usage only in template
          * WebComponents make dynamic instantiation much easier
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
          * We all know lazy loading
          * Angluar CLI produces small separated bundles
          * Bundles only contain additional code
          * Depend on context with Angular already running
        </pre>
      </div>
    </tcc-master-regular>
  `
})
export class LazyLoading1Slide {}


@Component({
  template: `
    <tcc-master-regular headline="Micro Frontend">
      <pre markdown>
        * Goal
          * Load a script on demand
          * In any application
          * From any source
        * Problem
          * Script doesn't know context
          * Has to contain everything it needs
          * TreeShaking very important
      </pre>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
      </pre>
    </tcc-speaker-notes>
  `
})
export class MicroFrontendSlide {}


@Component({
  template: `
    <tcc-master-regular headline="Export WebComponent">
      <pre markdown>
        * <code>ng build</code> produces 4 files
          * Too complicated to use in other environment
        * <a href="https://github.com/manfredsteyer/ngx-build-plus" target="_blank">ngx-build-plus</a> extends Angular CLI
        * <code>ng build --output-hashing none --single-bundle</code>
      </pre>
    </tcc-master-regular>
  `
})
export class BundleSlide {}


@Component({
  template: `
    <tcc-master-regular headline="Demo">
      <h2>Let's try it!</h2>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
        * Registrierung nach AppModule in ngDoBootstrap verschieben
        * bootstrap Feld in AppModule Decorator leeren
        * <code>ng add ngx-build-plus</code>
        * <code>ng build --output-hashing none --single-bundle</code>
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
  MicroFrontendSlide,
  BundleSlide,
  Demo2Slide,
];
