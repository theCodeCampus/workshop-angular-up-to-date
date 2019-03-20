import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxPresentModule } from '@w11k/ngx-present';
import { TccNgxPresentThemeModule } from '@thecodecampus/ngx-present-theme';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { slides } from './app.slides';

@NgModule({
  declarations: [
    AppComponent,
    ...slides,
  ],
  entryComponents: [
    ...slides,
  ],
  imports: [
    BrowserModule,
    NgxPresentModule.withSlides(slides),
    TccNgxPresentThemeModule,
    // use hash navigation because browsers are blocking via file protocol
    // due security reasons
    // see https://github.com/angular/angular/issues/13948
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
