import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DizimosComponent } from './dizimos.component';

describe('DizimosComponent', () => {
  let component: DizimosComponent;
  let fixture: ComponentFixture<DizimosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DizimosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DizimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
