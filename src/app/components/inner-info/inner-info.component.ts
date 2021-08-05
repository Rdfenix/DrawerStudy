import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-info',
  templateUrl: './inner-info.component.html',
  styleUrls: ['./inner-info.component.scss'],
})
export class InnerInfoComponent implements OnInit {
  constructor() {}

  @Input() isDrawerOpen: boolean = false;

  isDrawerOpenTwo: boolean = false;

  openDrawerTwo(): void {
    this.isDrawerOpenTwo = !this.isDrawerOpenTwo;
  }

  ngOnInit(): void {}
}
