import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDefinitionsComponent } from './icon-definitions.component';

describe('IconDefinitionsComponent', () => {
  let component: IconDefinitionsComponent;
  let fixture: ComponentFixture<IconDefinitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconDefinitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
