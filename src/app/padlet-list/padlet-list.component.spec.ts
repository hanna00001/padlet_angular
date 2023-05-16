import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadletListComponent } from './padlet-list.component';

describe('PadletListComponent', () => {
  let component: PadletListComponent;
  let fixture: ComponentFixture<PadletListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadletListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadletListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
