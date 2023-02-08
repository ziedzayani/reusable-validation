import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorMessageComponent } from '../error-message/error-message.component';

@Component({
  selector: 'app-forms-without-material',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,ErrorMessageComponent],
  templateUrl: './forms-without-material.component.html',
  styleUrls: ['./forms-without-material.component.scss']
})
export class FormsWithoutMaterialComponent {

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
