import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor(private httpClient:HttpClient) { }

  private url='https://run.mocky.io/v3/fb9c1694-ac36-4d43-bbf5-4c191f76ef39';

  PaymentDetails() {
    return this.httpClient.get(this.url);
  }
}
