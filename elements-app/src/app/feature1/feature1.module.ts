import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoobarComponent } from './foobar/foobar.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [FoobarComponent],
  entryComponents: [FoobarComponent],
  imports: [
    CommonModule
  ]
})
export class Feature1Module {
  constructor(injector: Injector) {
    const customElement = createCustomElement(FoobarComponent, { injector });
    customElements.define('app-foobar', customElement);
  }
}
