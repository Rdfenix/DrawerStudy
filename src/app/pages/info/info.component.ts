import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  constructor() {}

  isDrawerOpen: boolean = false;

  openDrawer(): void {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  ngOnInit(): void {}
}
