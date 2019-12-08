import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WipOverlayComponent } from './wip-overlay.component';

describe('WipOverlayComponent', () => {
  let component: WipOverlayComponent;
  let fixture: ComponentFixture<WipOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WipOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WipOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
