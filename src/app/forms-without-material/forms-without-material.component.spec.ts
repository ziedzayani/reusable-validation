import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsWithoutMaterialComponent } from './forms-without-material.component';

describe('FormsWithoutMaterialComponent', () => {
  let component: FormsWithoutMaterialComponent;
  let fixture: ComponentFixture<FormsWithoutMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsWithoutMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsWithoutMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
