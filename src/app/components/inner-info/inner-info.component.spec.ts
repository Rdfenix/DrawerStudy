import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerInfoComponent } from './inner-info.component';

describe('InnerInfoComponent', () => {
  let component: InnerInfoComponent;
  let fixture: ComponentFixture<InnerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
