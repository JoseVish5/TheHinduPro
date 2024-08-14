import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reuters2Component } from './reuters2.component';

describe('Reuters2Component', () => {
  let component: Reuters2Component;
  let fixture: ComponentFixture<Reuters2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Reuters2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reuters2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
