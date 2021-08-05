import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-info-two',
  templateUrl: './inner-info-two.component.html',
  styleUrls: ['./inner-info-two.component.scss'],
})
export class InnerInfoTwoComponent implements OnInit {
  constructor() {}

  @Input() isDrawerOpen: boolean = false;

  ngOnInit(): void {}
}
