import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrieFormComponent } from './entrie-form.component';

describe('EntrieFormComponent', () => {
  let component: EntrieFormComponent;
  let fixture: ComponentFixture<EntrieFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrieFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
