import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmployeeAndUpdateComponent } from './new-employee-and-update.component';

describe('NewEmployeeAndUpdateComponent', () => {
  let component: NewEmployeeAndUpdateComponent;
  let fixture: ComponentFixture<NewEmployeeAndUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEmployeeAndUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEmployeeAndUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
