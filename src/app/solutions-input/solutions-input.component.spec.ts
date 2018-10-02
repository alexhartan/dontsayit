import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsInputComponent } from './solutions-input.component';

describe('SolutionsInputComponent', () => {
  let component: SolutionsInputComponent;
  let fixture: ComponentFixture<SolutionsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
