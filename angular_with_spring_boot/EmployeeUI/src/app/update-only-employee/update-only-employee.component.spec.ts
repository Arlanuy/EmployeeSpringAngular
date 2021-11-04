import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOnlyEmployeeComponent } from './update-only-employee.component';

describe('UpdateOnlyEmployeeComponent', () => {
  let component: UpdateOnlyEmployeeComponent;
  let fixture: ComponentFixture<UpdateOnlyEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOnlyEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOnlyEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
