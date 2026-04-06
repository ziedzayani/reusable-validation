import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { getValidatorErrorMessage } from './validator-utils';


@Component({
  selector: '[app-error-message]',
  standalone: true,
  template: `@if (errorMessage !== null) {{{errorMessage}}}`,
})
export class ErrorMessageComponent {

  @Input() 
  control!: AbstractControl

  constructor() { }

  get errorMessage() {    
    for (const validatorName in this.control?.errors) {
        if(this.control.touched)
          return getValidatorErrorMessage(validatorName, this.control.errors[validatorName]);
    }
    return null;
  }

}