import { Component } from '@angular/core';

@Component({
  template: `
    <tcc-master-title>
      <ng-container top>
        <div class="logo">
          <img src="assets/images/tcc-logo-white.svg" alt="theCodeCampus Logo" class="img-responsive" style="max-height: 4em; margin-bottom: 1em;">
        </div>
        <div class="logo">
          <img src="assets/images/w11k-logo.svg" alt="w11k Logo" class="img-responsive" style="max-height: 3.5em; margin-bottom: 2em;">
        </div>
      </ng-container>
  
      <ng-container title>
        Angular up to Date<br>
        <small>Bazel, Elements & Ivy and more</small>
      </ng-container>
  
      <ng-container bottom>
        <div style="margin-top: 4em">
          <img src="assets/images/logos/meetup.svg" style="height: 3.5em; margin-bottom: -0.8em;">
          <span style="font-size: 3em; color: white; font-style: italic; margin-left: 1em">#ngHeidelberg</span>
        </div>
      </ng-container>
  
    </tcc-master-title>
  `
})
export class TitleSlide {}


@Component({
  template: `
    <tcc-master-regular headline="About me">
      <pre markdown>
        * Philipp Burgmer
        * W11K / theCodeCampus
        * Developer, Trainer
        * TypeScript, Angular
      </pre>
    </tcc-master-regular>
  `
})
export class AboutMeSlide {}

export const intro = [
  TitleSlide,
  AboutMeSlide,
];
