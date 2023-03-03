import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DizimosOfertasDetailsComponent } from './dizimos-ofertas-details.component';

describe('DizimosOfertasDetailsComponent', () => {
  let component: DizimosOfertasDetailsComponent;
  let fixture: ComponentFixture<DizimosOfertasDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DizimosOfertasDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DizimosOfertasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
