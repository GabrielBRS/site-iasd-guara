import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstrucaoIgrejaComponent } from './construcao-igreja.component';

describe('ConstrucaoIgrejaComponent', () => {
  let component: ConstrucaoIgrejaComponent;
  let fixture: ComponentFixture<ConstrucaoIgrejaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstrucaoIgrejaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstrucaoIgrejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
