import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {

  readonly clients: any = {
    header: 'These services include valuations for the following purposes and clients',
    purposes: ['Acquisitions', 'Disposal', 'Deceased Estates', 'Foreclosure',
      'Insolvency', 'Insured - Replacement Values', 'Municipal Valuations - Objections/Appeal and Rating'
    ],
    clients: ['Corporate Financial Institutions', 'Individual Insurance Brokers', 'Managing Agents, Attorneys']
  };

}
