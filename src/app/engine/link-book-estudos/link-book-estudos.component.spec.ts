import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkBookEstudosComponent } from './link-book-estudos.component';

describe('LinkBookEstudosComponent', () => {
  let component: LinkBookEstudosComponent;
  let fixture: ComponentFixture<LinkBookEstudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkBookEstudosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkBookEstudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
