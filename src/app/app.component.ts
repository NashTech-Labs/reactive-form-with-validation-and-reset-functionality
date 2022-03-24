import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroupDirective, Validators} from '@angular/forms';
import {ProfileValidationMessages} from './profile-validation-message';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLoader = false;
  isFormTouched = false;
  profileValidationMessages = ProfileValidationMessages;
  @ViewChild(FormGroupDirective) myNgForm: any;
  profileForm = this.formBuilder.group({
    firstName: ['', Validators.compose([
      Validators.required,
      Validators.maxLength(254),
      Validators.pattern('(^([a-zA-Z]+\\s?)*$)'),
    ])],
    lastName: ['', Validators.compose([
      Validators.required,
      Validators.maxLength(254),
      Validators.pattern('(^([a-zA-Z]+\\s?)*$)'),
    ])],
    email: ['', Validators.compose([
      Validators.required,
      Validators.pattern('(?:[a-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]+)*)@(?:(?:[a' +
        '-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+(?:[a-zA-Z0-9-]*[a-zA-Z]){2,})'),
      Validators.maxLength(254)
    ])],
    phoneNo: ['', [Validators.required]],
    address: ['', [Validators.required]],
    dob: ['', Validators.compose([
      Validators.required,
    ])],
    gender: ['', [Validators.required]],
    message: ['', Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(254)
    ])]
  });

  constructor(private formBuilder: FormBuilder) {

  }

  // tslint:disable-next-line:typedef
  saveForm() {
    this.showLoader = true;
    this.isFormTouched = true;

    if (this.profileForm.invalid) {
      this.showLoader = false;
      console.log('The Form is Invalid');
      return;
    } else {
      this.showLoader = false;
      console.log('Profile form data :: ', this.profileForm.value);
      this.resetForm();
    }
  }

  // tslint:disable-next-line:typedef
  resetForm() {
    this.myNgForm.resetForm();
    this.isFormTouched = false;

  }

}
