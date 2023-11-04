import { Component } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-submit-body',
  templateUrl: './submit-body.component.html',
  styleUrls: ['./submit-body.component.scss']
})
export class SubmitBodyComponent {
  formData: any = {};

  constructor(private dataService: DataService) {}

  submitForm() {
    console.log('User data to send to the backend:', this.formData);

    // Send the data to the backend
    this.dataService.sendDataToBackend(this.formData).subscribe(
      response => {
        console.log('Data sent successfully:', response);
        // Handle the response from the backend
      },
      error => {
        console.error('Error sending data:', error);
        // Handle any errors that occur
      }
    );
  }
}
