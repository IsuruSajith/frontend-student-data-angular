import { Component } from '@angular/core';

@Component({
  selector: 'app-submit-body',
  templateUrl: './submit-body.component.html',
  styleUrls: ['./submit-body.component.scss']
})
export class SubmitBodyComponent {
  formData: any;
  constructor() {}

  submitForm() {
// Log the collected data to the console
    console.log('User data to send to the backend:', this.formData);

    // TODO: Send the data to the backend using an HTTP request
  }
}
