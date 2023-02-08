import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsWithMaterialComponent } from './forms-with-material.component';

describe('FormsWithMaterialComponent', () => {
  let component: FormsWithMaterialComponent;
  let fixture: ComponentFixture<FormsWithMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsWithMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsWithMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
