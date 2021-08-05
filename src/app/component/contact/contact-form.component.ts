import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  readonly form: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    emailAddress: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', ),
    enquiry: new FormControl('', [
      Validators.required,
      Validators.maxLength(300),
      Validators.minLength(15)
    ])
  });

  hasEmailBeenSent = false;
  readonly faCheck = faCheck;

  sendEmail(): void {
    const firstName: string = this.form.get('firstName').value;
    const lastName: string = this.form.get('lastName').value;
    const email: string = this.form.get('emailAddress').value;
    const phone: string = this.form.get('phoneNumber').value ?? 'Not Supplied';
    const enquiry: string = this.form.get('enquiry').value;

    if (this.form.invalid) {
      this.form.markAllAsTouched();

      return;
    }

    window.location.href =
      'mailto:meldane@mweb.co.za?' +
      'subject=Enquiry' +
      '&body=' +
      'Message: ' + enquiry + '%0A' +
      'From: ' + firstName + lastName + '%0A' +
      'Cell: ' + phone + '%0A' +
      'Email: ' + email;

    this.form.reset();
    this.hasEmailBeenSent = true;
  }

  get firstNameInvalid(): boolean {
    return (this.form.get('firstName') as FormControl)?.touched && (this.form.get('firstName') as FormControl)?.invalid;
  }

  get lastNameInvalid(): boolean {
    return (this.form.get('lastName') as FormControl)?.touched && (this.form.get('lastName') as FormControl)?.invalid;
  }

  get emailInvalid(): boolean {
    return (this.form.get('emailAddress') as FormControl)?.touched && (this.form.get('emailAddress') as FormControl)?.invalid;
  }

  get enquiryInvalid(): boolean {
    return (this.form.get('enquiry') as FormControl)?.touched && (this.form.get('enquiry') as FormControl)?.invalid;
  }

}
