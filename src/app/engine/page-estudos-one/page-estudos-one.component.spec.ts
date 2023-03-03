import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEstudosOneComponent } from './page-estudos-one.component';

describe('PageEstudosOneComponent', () => {
  let component: PageEstudosOneComponent;
  let fixture: ComponentFixture<PageEstudosOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEstudosOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEstudosOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
