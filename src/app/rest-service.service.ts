import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor(private httpClient:HttpClient) { }

  url:string="http://localhost:3000/Payments"
}
