import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadletListItemComponent } from './padlet-list-item.component';

describe('PadletListItemComponent', () => {
  let component: PadletListItemComponent;
  let fixture: ComponentFixture<PadletListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadletListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadletListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
