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
      'Disposals',
      'Deceased Estates',
      'Foreclosures',
      'Insolvencies',
      'Insured - Replacement Values',
      'Municipal Rating Valuations - Objections and Appeals',
      'Expropriation',
      'Servitudes'
    ],
    clients: [
      'Corporate Companies',
      'Financial Institutions',
      'Attorneys',
      'Managing Agents',
      'Insurance Brokers',
      'Private Individuals'
    ]
  };

}
