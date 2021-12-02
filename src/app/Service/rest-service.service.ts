import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor(private httpClient:HttpClient) { }

  private url:string="https://run.mocky.io/v3/3c911446-b5d5-4eef-8dc0-5a2a65778fa3"

  PaymentDetails() {
    return this.httpClient.get(this.url);
  }
}
