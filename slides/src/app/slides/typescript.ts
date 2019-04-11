import { Component } from '@angular/core';
import { TableOfContentEntry } from '@w11k/ngx-present';

@TableOfContentEntry({
  linkName: 'TypeScript'
})
@Component({
  template: `
    <tcc-master-section-title headline="TypeScript">
    </tcc-master-section-title>
  `
})
export class TitleSlide {}

@Component({
  template: `
    <tcc-master-regular headline="TypeScript Versions">
      <pre markdown>
        * TypeScript version depends on Angular CLI
        * Only certain versions are supported 
        * Lags behind a bit most of the time
        * Currently 3.2 instead of 3.4
      </pre>
    </tcc-master-regular>
  `
})
export class TypescriptSlide {}


@Component({
  template: `
    <tcc-master-regular headline="ReadonlyArray">
      <tcc-code language="typescript" [code]="code"></tcc-code>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
      </pre>
    </tcc-speaker-notes>
  `
})
export class ReadonlyArraySlide {
  code = `
// already possible
function foo(arr: ReadonlyArray<string>) {
    arr.slice();        // okay
    arr.push("hello!"); // error!
}

// new syntax
function bar(arr: readonly string[]) {}
  `;
}

@Component({
  template: `
    <tcc-master-regular headline="Const Assertion">
      <tcc-code language="typescript" [code]="code1"></tcc-code>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
      </pre>
    </tcc-speaker-notes>
  `
})
export class ConstAssertionSlide1 {

  code1 = `
let a1 = 10; // a: number
const a2 = 10; // a: 10
let b1 = [10, 20]; // b: number[]
const b2 = [10, 20]; // b: number[]

let x = 10 as const; // x: 10
let y = [10, 20] as const; // y: readonly [10, 20]
let z = { nested: { text: "hello" } } as const;
// z: { readonly nested: { readonly text: "hello" }}
  `;
}
@Component({
  template: `
    <tcc-master-regular headline="Const Assertion">
      <tcc-code language="typescript" [code]="code2"></tcc-code>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
      </pre>
    </tcc-speaker-notes>
  `
})
export class ConstAssertionSlide2 {

  code2 = `
let arr = [1, 2, 3, 4];
let foo = { name: "foo", contents: arr } as const;

foo.name = "bar";   // error!
foo.contents = [];  // error!
foo.contents.push(5); // ...works!
  `;
}


@Component({
  template: `
    <tcc-master-regular headline="Use Case">
      <div>
        <tcc-code language="typescript" [code]="code1"></tcc-code>
      </div>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
      </pre>
    </tcc-speaker-notes>
  `
})
export class ConfigExampleSlide {
  code1 = `
const defaultConfig = {
  foo: { enabled: true as boolean },
  bar: { flag: 0 as -1 | 0 | 1 },
} as const;

export type Config = typeof defaultConfig;

@NgModule({})
export class SomeModule {
  static forRoot(config: Partial<Config>) {
    // merge config and defaultConfig
  }
}
  `;
}

export const typeScriptSlides = [
  TitleSlide,
  TypescriptSlide,
  ReadonlyArraySlide,
  ConstAssertionSlide1,
  ConstAssertionSlide2,
  ConfigExampleSlide,
];
