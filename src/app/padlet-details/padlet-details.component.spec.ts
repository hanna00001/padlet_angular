import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadletDetailsComponent } from './padlet-details.component';

describe('PadletDetailsComponent', () => {
  let component: PadletDetailsComponent;
  let fixture: ComponentFixture<PadletDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadletDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadletDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
