import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkEstudosComponent } from './link-estudos.component';

describe('LinkEstudosComponent', () => {
  let component: LinkEstudosComponent;
  let fixture: ComponentFixture<LinkEstudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkEstudosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkEstudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
