import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadletFormComponent } from './padlet-form.component';

describe('PadletFormComponent', () => {
  let component: PadletFormComponent;
  let fixture: ComponentFixture<PadletFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadletFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadletFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
