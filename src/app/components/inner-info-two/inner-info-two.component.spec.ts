import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerInfoTwoComponent } from './inner-info-two.component';

describe('InnerInfoTwoComponent', () => {
  let component: InnerInfoTwoComponent;
  let fixture: ComponentFixture<InnerInfoTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerInfoTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerInfoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
