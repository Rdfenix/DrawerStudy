import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  animations: [
    trigger('drawerComponent', [
      state('default', style({ width: 0, left: '100%' })),
      state('opened', style({ width: '60%', left: '40%' })),
      transition('default => opened', [animate('0.5s')]),
      transition('opened => default', [animate('0.5s')]),
    ]),
  ],
})
export class DrawerComponent implements OnInit {
  constructor() {}

  @Input() isOpen = false;
  @Output() closed = new EventEmitter();

  close() {
    this.closed.emit();
  }

  ngOnInit(): void {}
}
