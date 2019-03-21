import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-foobar',
  templateUrl: './foobar.component.html',
  styleUrls: ['./foobar.component.scss']
})
export class FoobarComponent implements OnInit {

  @Input()
  primitive: string;

  @Input()
  complex: { foo: string, bar: number};

  constructor() { }

  ngOnInit() {
  }

}
