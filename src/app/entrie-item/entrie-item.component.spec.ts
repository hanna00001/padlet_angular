import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrieItemComponent } from './entrie-item.component';

describe('EntrieItemComponent', () => {
  let component: EntrieItemComponent;
  let fixture: ComponentFixture<EntrieItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrieItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
