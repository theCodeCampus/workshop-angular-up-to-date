import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoobarComponent } from './foobar/foobar.component';

@NgModule({
  declarations: [FoobarComponent],
  entryComponents: [FoobarComponent],
  imports: [
    CommonModule
  ]
})
export class Feature1Module {}
