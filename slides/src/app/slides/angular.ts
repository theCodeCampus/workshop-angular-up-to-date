import { Component } from '@angular/core';
import { TableOfContentEntry } from '@w11k/ngx-present';

@TableOfContentEntry({
  linkName: 'Angular'
})
@Component({
  template: `
    <tcc-master-section-title headline="Angular">
    </tcc-master-section-title>
  `
})
export class TitleSlide {}

@Component({ template: `
  <tcc-master-regular headline="ng update">
    <div>
      <pre markdown>
        * Ab Angular CLI 6.0
        * Hilft dabei up to date zu bleiben
        * Migriert Code automatisch
        * <code>ng update</code> analysiert und gibt mögliche Befehle aus
      </pre>
      <tcc-code language="plain" [code]="ngUpdateOutput"></tcc-code>
    </div>
  </tcc-master-regular>
`})
export class NgUpdateSlide {
  ngUpdateOutput = `
We analyzed your package.json, there are some packages to update:

Name                Version              Command to update
-------------------------------------------------------------
@angular/cli        6.1.2 -> 7.2.1       ng update @angular/cli
@angular/core       6.1.2 -> 7.2.1       ng update @angular/core
rxjs                6.2.2 -> 6.3.1       ng update rxjs
  `;
}

@Component({
  template: `
    <tcc-master-regular headline="Angular 7 - Dependencies">
      <pre markdown>
        * TypeScript 3.1 und folgende
        * RxJS 6.3
      </pre>
    </tcc-master-regular>
  `
})
export class Angular7DependenciesSlide {}

@Component({
  template: `
    <tcc-master-regular headline="Angular CLI 7">
      <pre markdown>
        * CLI läuft mit Node 8 und 10
        * Polyfill für reflect-metadata nicht mehr mit ausgeliefert
          * Wird zur Laufzeit bei AOT nicht benötigt
          * Achtung wenn Bibliothek es benötigt
        * Bundle Budgets: 2MB Warnung, 5MB Fehler
        * Prompts statt Parameter
      </pre>
    </tcc-master-regular>
  `
})
export class AngularCLI7Slide {}

@Component({
  template: `
    <tcc-master-regular headline="Content Projection mit ng-content">
      <pre markdown>
        * Use Case: Collapse-Komponente
          * Interessiert sich nicht für den Inhalt
          * Hat Markup für Auf- und Zuklappen
          * Fügt übergebenen Inhalt an passender Stelle ein
      </pre>
      <div>
        <tcc-code language="html" [code]="sender" headline="outer.component.html"></tcc-code>
        <tcc-code language="html" [code]="receiver" headline="collapse.component.html"></tcc-code>
      </div>
    </tcc-master-regular>
  `
})
export class NgContentSlide {
  sender = `
<collapse>
  <div class="collapsed">{{movie.title}}</div>
  <div>{{movie.overview}}</div>
</collapse>
  `;

  receiver = `
<div (click)="toggle()">
  <div *ngIf="collapsed">
    <ng-content select=".collapsed"></ng-content>
  </div>
  <div *ngIf="!collapsed">
    <ng-content></ng-content>
  </div>
</div>
  `;
}

@Component({
  template: `
    <tcc-master-regular headline="Content Projection mit Slots">
      <pre markdown>
        * Ab Angular 7.0
        * Annäherung an Web-Standard: <span class="nowrap">Web-Components mit slots</span>
        * Setzen <span class="nowrap">ViewEncapsulation.ShadowDom</span> voraus
        * Erlauben Default-Content
      </pre>
      <div>
        <tcc-code language="html" [code]="sender" headline="outer.component.html"></tcc-code>
        <tcc-code language="html" [code]="receiver" headline="collapse.component.html"></tcc-code>
      </div>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
        * <a href="https://www.softwarearchitekt.at/post/2018/10/31/content-projection-with-slots-in-angular-elements-7.aspx" target="_blank">Content Projection With Slots</a>
        * Default-Content bleibt erhalten wenn kein Content übergeben wird
      </pre>
    </tcc-speaker-notes>
  `
})
export class ContentProjectionSlotsSlide {
  sender = `
<app-collapse>
  <p>{{movie.overview}}</p>
  <div slot="collapsed">{{movie.title}}}</div>
</app-collapse>
  `;

  receiver = `
<div (click)="toggle()">
  <div *ngIf="collapsed">
    <slot name="collapsed"></ng-content>
  </div>
  <div *ngIf="!collapsed">
    <slot>Leider gibt es nichts zum Anzeigen</slot>
  </div>
</div>
  `;
}

@Component({
  template: `
    <tcc-master-regular headline="Router Guards">
      <div>
        <pre markdown>
          * Rückgabe bisher: <code>Observable&amp;lt;boolean&amp;gt; | Promise&amp;lt;boolean&amp;gt; | boolean</code>
          * Fehlerbehandlung: asynchrone Navigation per <code>Router#navigate</code>
        </pre>
        <tcc-code language="typescript" [code]="code"></tcc-code>
      </div>
    </tcc-master-regular>
  `
})
export class RouterGuardsOldSlide {
  code = `
@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.userHasRole(route.data.userRole)
      .pipe(
        tap((x) => {
          if (!x) { this.router.navigate('login'); }
        }),
      );
  }
}
  `;
}

@Component({
  template: `
    <tcc-master-regular headline="Router Guards">
      <pre markdown>
        * Was passiert wen mehrere Guards fehlschlagen
        * Verhalten Timing abhängig
      </pre>
      <tcc-code language="typescript" [code]="code"></tcc-code>
    </tcc-master-regular>
  `
})
export class RouterGuardsProblemSlide {
  code = `
const routes = [{
  path: 'admin',
  component: AdminComponent,
  canActivate: [
    AuthenticationGuard,
    AuthorizationGuard,
    RandomGuard,
  ],
}];
  `;
}

@Component({
  template: `
    <tcc-master-regular headline="Router Guards">
      <div>
        <pre markdown>
          * Ab Angular 7.1
          * Guards können <code>UrlTree</code> statt <code>boolean</code> zurückgeben
          * Guards sind priorisiert
        </pre>
        <tcc-code language="typescript" [code]="code"></tcc-code>
      </div>
    </tcc-master-regular>
  `
})
export class RouterGuardsUrlTreeSlide {
  code = `
@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.userHasRole(route.data.userRole)
      .pipe(
        map((x) => {
          if (!x) { return this.router.parseUrl('login'); }
          else { return true; }
        }),
      );
  }
}
  `;
}

@Component({
  template: `
    <tcc-master-regular headline="Router">
      <pre markdown>
        * Wann werden Guards und Resolver ausgeführt?
        * Steuern per <code>runGuardsAndResolvers</code>
        * Ab Angular 7.1 neuer Wert <code>'pathParamsChange'</code>
      </pre>
      <tcc-code language="typescript" [code]="code"></tcc-code>
    </tcc-master-regular>
  `
})
export class RunGuardsAndResolverSlide {
  code = `
const routes = [{
  path: 'admin',
  component: AdminComponent,
  canActivate: [
    AuthenticationGuard,
    AuthorizationGuard,
    RandomGuard,
  ],
  runGuardsAndResolvers: 'pathParamsChange'
}];
  `;
}

@Component({
  template: `
    <tcc-master-regular headline="Angular 8">
      <pre markdown>
        * Aktuell Beta 9
        * Release Candidate für April geplant
        * Ivy Renderer Preview
        * Verbesserter Bazel Support
      </pre>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
      </pre>
    </tcc-speaker-notes>
  `
})
export class Angular8Slide {}

@Component({
  template: `
    <tcc-master-regular headline="Angular 8">
      <pre markdown>
        * Nur TypeScript 3.3
        * Alle PNGs werden durch pngcrush gejagt
        * JSON-Schema-Support für Service-Worker-Konfiguration
        * <code>AbstractControl#markAllAsTouched()</code>
      </pre>
    </tcc-master-regular>
  `
})
export class AngularCLI8Slide {}

@Component({
  template: `
    <tcc-master-regular headline="Won't fix broken HTML">
      <pre markdown>
        * <code>&amp;lt;!doctype html&amp;gt;</code> in index.html
        * <code>tr</code> nur innerhalb von <code>thead</code>, <code>tbody</code> oder <code>tfoot</code> erlaubt
        * Bisher: Auto-Korrektur
        * Breaking Change in Angular 8: keine Auto-Korrektur mehr
      </pre>
      <div>
        <tcc-code language="typescript" [code]="code1" headline="invalid html"></tcc-code>
        <tcc-code language="typescript" [code]="code2" headline="auto fixed html"></tcc-code>
      </div>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
      </pre>
    </tcc-speaker-notes>
  `
})
export class DontFixHtmlSlide {
  code1 = `
<table>
  <tr></tr>
</table>
  `;

  code2 = `
<table>
  <tbody>
    <tr></tr>
  </tbody>
</table>  
  `;
}

export const angularSlides = [
  TitleSlide,
  NgUpdateSlide,
  Angular7DependenciesSlide,
  AngularCLI7Slide,
  NgContentSlide,
  ContentProjectionSlotsSlide,
  RouterGuardsOldSlide,
  RouterGuardsProblemSlide,
  RouterGuardsUrlTreeSlide,
  RunGuardsAndResolverSlide,
  Angular8Slide,
  AngularCLI8Slide,
  DontFixHtmlSlide,
];
