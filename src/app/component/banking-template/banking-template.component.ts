import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking-template',
  templateUrl: './banking-template.component.html',
  styleUrls: ['./banking-template.component.css']
})
export class BankingTemplateComponent implements OnInit {

  title = 'Bank';
  name: string = "Anandharaj Thangavel";

  constructor() { }

  ngOnInit(): void {
  }

}
