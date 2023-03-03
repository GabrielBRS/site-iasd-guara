import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DizimosOfertasComponent } from './dizimos-ofertas.component';

describe('DizimosOfertasComponent', () => {
  let component: DizimosOfertasComponent;
  let fixture: ComponentFixture<DizimosOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DizimosOfertasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DizimosOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
