import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksCategoryEstudosComponent } from './books-category-estudos.component';

describe('BooksCategoryEstudosComponent', () => {
  let component: BooksCategoryEstudosComponent;
  let fixture: ComponentFixture<BooksCategoryEstudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksCategoryEstudosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksCategoryEstudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
