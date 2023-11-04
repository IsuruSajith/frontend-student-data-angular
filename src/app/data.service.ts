import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8085/api/v1/students'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  sendDataToBackend(data: any) {
    return this.http.post(`${this.apiUrl}`, data);
  }
}
