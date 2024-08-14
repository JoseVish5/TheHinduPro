import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reuters3Component } from './reuters3.component';

describe('Reuters3Component', () => {
  let component: Reuters3Component;
  let fixture: ComponentFixture<Reuters3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Reuters3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reuters3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
