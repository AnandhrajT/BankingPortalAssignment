import { Component, OnInit } from '@angular/core';
import { RestServiceService } from '../../Service/rest-service.service';
import {payment} from 'src/app/Model/payments';
// import *  as  data from 'src/app/Data/data.json';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  payments: any[]=[]; 
  today: Date | any = new Date().toLocaleString("en", { weekday: "long" });
  constructor(private RestService:RestServiceService) {
   }

  ngOnInit(): void {
    let paymentObj = this.RestService.PaymentDetails();
    paymentObj.subscribe((response: any) => {
      this.payments = response;
    });
  }
}

