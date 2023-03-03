import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLinkEstudosComponent } from './card-link-estudos.component';

describe('CardLinkEstudosComponent', () => {
  let component: CardLinkEstudosComponent;
  let fixture: ComponentFixture<CardLinkEstudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLinkEstudosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLinkEstudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
