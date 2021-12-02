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

  payments: payment[] | any; 
  constructor(private RestService:RestServiceService) {
   }

  ngOnInit(): void {
    this.RestService.PaymentDetails().subscribe((data) => {
      this.payments = data;
  })
}
}

