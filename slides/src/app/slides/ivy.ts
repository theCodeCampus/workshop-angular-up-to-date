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
    <tcc-master-regular headline="What it's all about?">
      <pre markdown>
        * In Templates we use Angular
          * Components, directives, interpolation
          * Micro syntax like ngFor und pipes
        * Template has to be parsed and translated
        * We already know that (JIT vs AOT)
        * But what is the target format?
      </pre>
    </tcc-master-regular>
  `
})
export class IntroSlide {}

@Component({
  template: `
    <tcc-master-regular headline="Non Ivy Target">
      <div style="width: 90vw">
        <tcc-code style="max-width: 90vw; overflow-x: scroll" language="html" [code]="code2" headline="app.component.html"></tcc-code>
        <tcc-code style="max-width: 90vw; overflow-x: scroll" language="typescript" [code]="code1" headline="app.component.ngfactory.js"></tcc-code>
        
      </div>
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
export class NonIvyDemoSlide {
  code1 = `
const i1 = require("@angular/core");
const i2 = require("project/src/app/app.component");
var styles_AppComponent = [i0.styles];
var RenderType_AppComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AppComponent, data: {} });
exports.RenderType_AppComponent = RenderType_AppComponent;
function View_AppComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" Welcome to ", "!\\n"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; _ck(_v, 1, 0, currVal_0); }); }
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), i1.ɵdid(1, 49152, null, 0, i2.AppComponent, [], null, null)], null, null); }
exports.View_AppComponent_Host_0 = View_AppComponent_Host_0;
var AppComponentNgFactory = i1.ɵccf("app-root", i2.AppComponent, View_AppComponent_Host_0, {}, {}, []);  
  `;

  code2 = `
<h1>Welcome to {{ title }}!</h1>
  `;
}

@Component({
  template: `
    <tcc-master-regular headline="Problems">
      <pre markdown>
        * Code should be optimized by TreeShaker later on
        * Generated Code not ideal
          * Parts of Angular Core not tree shakable
        * What cloud / should be shaken away?
          * Template syntax, Content projection
          * Dependency injection
          * Structural directives
          * Lifecycle hooks, pipes, queries, listeners
        * Goal: make everything tree shakable
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
        * Nearly no direct contact with renderer / view engine
        * After <code>Renderer</code> und <code>Renderer2</code> Ivy is third version
          * Who noticed the previous change in Angular 4?
          * Important if you use <code>Renderer</code> as a service
        * Ivy should cause no breaking changes!
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
        * Compiler has to be adjusted to produce Ivy code
        * What happens to already compiled code
          * Libraries, installed via npm
        * Compatibility Compiler ngcc: rewrites Code to new API
          * Currently as npm-postinstall-Skript to just run it once
          * Changes code in node_modules
        *  Bazel enables advanced caching
          * ngcc runs once, output will be cached by bazel
          * ngcc will be skipped if node_modules haven't changed
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
    <tcc-master-regular headline="Demo">
      <tcc-code style="max-width: 90vw; overflow-x: scroll" language="typescript" [code]="code"></tcc-code>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
      </pre>
    </tcc-speaker-notes>
  `
})
export class DemoCodeSlide {
  code = `
var AppComponent = /** @class */ (function () {
  function AppComponent() {
    this.title = 'Ivy';
  }
  AppComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], factory: function AppComponent_Factory(t) { return new (t || AppComponent)(); }, consts: 2, vars: 1, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵelementEnd"]();
    } if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵflushHooksUpTo"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵtextBinding"](1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinterpolation1"](" Welcome to ", ctx.title, "!\\n"));
    } }, styles: ["\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
  return AppComponent;
}());
  `;
}

@Component({
  template: `
    <tcc-master-regular headline="Ivy Advantages">
      <pre markdown>
        * Easier debugging with shorter stack traces
        * Debugging API <code>ng.getComponent($0)</code>
        * Lazy Loading with standard dynamic imports instead of magic strings
        * Higher Order Components
          * Pass components to other components
          * Already possible but very complicated
      </pre>
    </tcc-master-regular>
  `
})
export class AdvantagesSlide {}

@Component({
  template: `
    <tcc-master-regular headline="Renderer als Service">
      <pre markdown>
        * Renderer as Angular Service via DI available
          * Preferred way to manipulate DOM
        * Why?
          * Security, DOM API is like Swiss cheese
          * Animations
          * Alternative Renderer
        * What's gonna happen to NativeScript?
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
        * Preview in Angular 8
        * Plan: Default in Angular 9
        * ~30 fixme comments
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
  DemoCodeSlide,
  AdvantagesSlide,
  RendererAsServiceSlide,
  StatusSlide,
];
