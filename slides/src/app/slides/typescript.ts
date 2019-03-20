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
    <tcc-master-regular headline="TypeScript Versionen">
      <pre markdown>
        * Bei TypeScript Version immer abhängig von Angular CLI
        * Nur bestimmte Versionen werden unterstützt
        * Hinkt leider meist etwas hinterher
        * Aktuell 3.2 statt 3.3
      </pre>
    </tcc-master-regular>
  `
})
export class TypescriptSlide {}

@Component({
  template: `
    <tcc-master-regular headline="Type unkown">
        <pre markdown>
          * Ab TypeScript 3.1
          * Gegenstück zu <code>any</code>
        </pre>
        <tcc-code language="typescript" [code]="code"></tcc-code>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
      </pre>
    </tcc-speaker-notes>
  `
})
export class UnknownSlide {
  code = `
function foo(x: unknown) {
  // okay
  x == 5; x !== 10;

  // error
  x >= 0; x + 1; x * 2;
  x.foo; x[5]; x(); new x();
}

function isFunction(x: unknown): x is Function { /* ... */ }

function bar(x: unknown) {
  if (typeof x === "string") { x; /* string */ }
  if (x instanceof Error) { x; /* Error */ }
  if (isFunction(x)) { x; /* Function */ }
}
  `;
}

@Component({
  template: `
    <tcc-master-regular headline="Properties an Funktionen">
      <div>
        <pre markdown>
          * Ab TypeScript 3.1
          * In Angular selten, aber in Node häufig verwendet
        </pre>
        <tcc-code language="typescript" [code]="code"></tcc-code>
      </div>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
      </pre>
    </tcc-speaker-notes>
  `
})
export class FunctionPropertiesSlide {
  code = `
function readImage(path: string, callback: (err: any, image: Image) => void) {
    // ...
}

readImage.sync = (path: string) => {
    const contents = fs.readFileSync(path);
    return decodeImageSync(contents);
}
  `;
}

@Component({
  template: `
    <tcc-master-regular headline="bind / call / apply">
      <div>
        <pre markdown>
          * Ab TypeScript 3.2
        </pre>
        <tcc-code language="typescript" [code]="code"></tcc-code>
      </div>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
      </pre>
    </tcc-speaker-notes>
  `
})
export class StrictBindCallApplySlide {
  code = `
function foo(a: number, b: string): string {
    return a + b;
}

let a = foo.apply(undefined, [10]);              // error: too few argumnts
let b = foo.apply(undefined, [10, 20]);          // error: 2nd argument is a number
let c = foo.apply(undefined, [10, "hello", 30]); // error: too many arguments
let d = foo.apply(undefined, [10, "hello"]);     // okay! returns a string
`;

}

@Component({
  template: `
    <tcc-master-regular headline="ReadonlyArray">
      <pre markdown>
        * Ab TypeScript 3.4
      </pre>
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
      <div>
        <pre markdown>
          * Ab TypeScript 3.4
        </pre>
        <tcc-code language="typescript" [code]="code1"></tcc-code>
        <tcc-code language="typescript" [code]="code2"></tcc-code>
      </div>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
      </pre>
    </tcc-speaker-notes>
  `
})
export class ConstAssertionSlide {

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
    <tcc-master-regular headline="Anwendungsfall">
      <tcc-code language="typescript" [code]="code1"></tcc-code>
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
  `;
}

export const typeScriptSlides = [
  TitleSlide,
  TypescriptSlide,
  UnknownSlide,
  FunctionPropertiesSlide,
  StrictBindCallApplySlide,
  ReadonlyArraySlide,
  ConstAssertionSlide,
  ConfigExampleSlide,
];
