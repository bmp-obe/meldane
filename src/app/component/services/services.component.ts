import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  readonly clients: any = {
    header: 'These services include valuations for the following purposes and services',
    purposes: [
      'Acquisitions',
      'Disposal',
      'Deceased Estates',
      'Foreclosure',
      'Insolvency',
      'Insured - Replacement Values',
      'Municipal Rating Valuations - Objections and Appeals',
      'Expropriation - Road Widening and Eskom Power Lines'
    ],
    clients: [
      'Corporate Companies',
      'Financial Institutions',
      'Municipalities',
      'Attorneys',
      'Managing Agents',
      'Individual Insurance Brokers',
      'Private Individuals'
    ]
  };

}
