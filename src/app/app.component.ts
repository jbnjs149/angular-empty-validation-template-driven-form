import { Component, VERSION } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Empty Validation using Custom Directive';
  errorMessage: string;
  userNotes: string = '';

  submit(submitForm: NgForm) {
    console.log('Form Valid: ', submitForm.valid);
    console.log('notes', )
    if(!submitForm.valid) {
      this.errorMessage = "please enter notes";
    }
  }
}
