import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollBackgroundComponent } from './scroll-background.component';

describe('ScrollBackgroundComponent', () => {
  let component: ScrollBackgroundComponent;
  let fixture: ComponentFixture<ScrollBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrollBackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
