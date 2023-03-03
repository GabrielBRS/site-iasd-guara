import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuizoInvestigativoComponent } from './juizo-investigativo.component';

describe('JuizoInvestigativoComponent', () => {
  let component: JuizoInvestigativoComponent;
  let fixture: ComponentFixture<JuizoInvestigativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuizoInvestigativoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuizoInvestigativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
