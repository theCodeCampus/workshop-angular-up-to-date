import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Feature1Module } from './feature1/feature1.module';
import { createCustomElement } from '@angular/elements';
import { FoobarComponent } from './feature1/foobar/foobar.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Feature1Module,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}
  ngDoBootstrap(appRef: ApplicationRef): void {
    const customElement = createCustomElement(FoobarComponent, { injector: this.injector });
    customElements.define('app-foobar', customElement);
  }
}
