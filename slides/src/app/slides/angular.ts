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
        * Introduced with Angular CLI 6.0
        * Helps to stay up to date
        * Migrates code automatically
        * <code>ng update</code> analyzes and prints commands
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
    <tcc-master-regular headline="Router Guards until Angular 7.1">
      <div>
        <pre markdown>
          * Returns <code>Observable&amp;lt;boolean&amp;gt; | Promise&amp;lt;boolean&amp;gt; | boolean</code>
          * Error handling: navigation via <code>Router#navigate</code> in guard
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
        * Guards cloud be async
        * What happens if more than one returns false
        * Depends on timing
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
  data: { role: 'ADMIN' }
}];
  `;
}

@Component({
  template: `
    <tcc-master-regular headline="Router Guards">
      <div>
        <pre markdown>
          * New in Angular 7.1
          * Guards can return <code>UrlTree</code> instead of <code>boolean</code>
          * Guards are prioritized (position in array)
        </pre>
      </div>
      <tcc-code language="typescript" [code]="code"></tcc-code>
    </tcc-master-regular>
  `
})
export class RouterGuardsUrlTreeSlide {
  code = `
@Injectable()
class AuthorizationGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const urlTree = this.router.parseUrl('login');
    return this.authService.hasRole(route.data.role)
      .pipe(
        map((x) => {
          if (!x) { return urlTree; }
          else { return true; }
        }),
      );
  }
}
  `;
}

@Component({
  template: `
    <tcc-master-regular headline="Angular 8">
      <pre markdown>
        * Aktuell Beta 11
        * Release Candidate scheduled for April
        * Ivy Renderer Preview
        * Improved Bazel Support
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
        * Only TypeScript 3.3
        * All PNGs run through pngcrush during build
        * JSON-Schema-Support for Service-Worker-Configuration
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
        * <code>tr</code> only valid inside of <code>thead</code>, <code>tbody</code> oder <code>tfoot</code>
        * Till now: auto correction
        * Breaking Change in Angular 8: no auto correction anymore
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
  RouterGuardsOldSlide,
  RouterGuardsProblemSlide,
  RouterGuardsUrlTreeSlide,
  Angular8Slide,
  AngularCLI8Slide,
  DontFixHtmlSlide,
];
