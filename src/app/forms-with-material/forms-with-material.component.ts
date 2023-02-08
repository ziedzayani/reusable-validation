import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-forms-with-material',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,ErrorMessageComponent,MatFormFieldModule,MatInputModule],
  templateUrl: './forms-with-material.component.html',
  styleUrls: ['./forms-with-material.component.scss']
})
export class FormsWithMaterialComponent{
  userForm!: FormGroup;
  fb:FormBuilder = inject(FormBuilder);

  constructor() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
    });
  }

}
