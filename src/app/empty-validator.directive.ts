import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, ValidatorFn, FormControl } from '@angular/forms';

@Directive({
  selector: '[appEmptyvalidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: EmptyvalidatorDirective,
      multi: true
    }
  ]
})
export class EmptyvalidatorDirective implements Validator {

  validator: ValidatorFn;
  constructor() {
    this.validator = this.emptyValidator();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

  emptyValidator(): ValidatorFn {
    return (control: FormControl) => {
      if (control.value != null && control.value !== '') {
        if (control.value.trim() != '') {
          return null;
        } else {
          return {
            emptyValidator: { valid: false }
          };
        }
      } else {
        return null;
      }
    };
  }
}