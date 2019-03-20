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
        <small>Bazel, Elements & Ivy und co</small>
      </ng-container>
  
      <ng-container bottom>
        <div style="margin-top: 4em">
          <img src="assets/images/logos/html-days.png">
          <img src="assets/images/logos/angular-days.png" style="margin-left: 2em">
          <img src="assets/images/logos/js-days.png" style="margin-left: 2em">
          <img src="assets/images/logos/react-days.png" style="margin-left: 2em">
        </div>
      </ng-container>
  
    </tcc-master-title>
  `
})
export class TitleSlide {}


@Component({
  template: `
    <tcc-master-regular headline="Kurz zu mir">
      <pre markdown>
        * Philipp Burgmer
        * W11K / theCodeCampus
        * Entwickler, Trainer
        * TypeScript, Angular
      </pre>
    </tcc-master-regular>
  `
})
export class AboutMeSlide {}


@Component({
  template: `
    <tcc-master-regular headline="Was machen wir hier eigentlich?">
      <pre markdown>
        * Was gab es neues
        * Was gibt es neues
        * Was wird es neues geben
      </pre>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
        * Wer beschäftigt sich mit den Neuerungen? Wer updated einfach?
        * Wer verfolgt Präsentationen von Konferenzen im Internet?
        * Aufgeteilt nach Technologien, nicht nach Versionen
      </pre>
    </tcc-speaker-notes>
  `
})
export class AboutWorkshopSlide {}



export const intro = [
  TitleSlide,
  AboutMeSlide,
  AboutWorkshopSlide,
];
