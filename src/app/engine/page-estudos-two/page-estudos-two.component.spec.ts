import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEstudosTwoComponent } from './page-estudos-two.component';

describe('PageEstudosTwoComponent', () => {
  let component: PageEstudosTwoComponent;
  let fixture: ComponentFixture<PageEstudosTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEstudosTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEstudosTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
