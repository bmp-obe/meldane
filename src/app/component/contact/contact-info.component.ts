import { Component } from '@angular/core';

import { Data } from '../../data/data';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent {

  showDetails = false;

  readonly contact: any = {
    copyright: Data.COPY_RIGHT,
    location: 'Meldane operates from standalone offices in Olivedale, Johannesburg and is situated within easy driving time to ' +
      'most of the Northern Suburbs.',
    lineOne: 'No 7 Seil Place',
    lineTwo: 'Olivedale Extension 3',
    lineThree: 'Olivedale',
    lineFour: 'PO Box 434, North Riding 2162',
    email: 'meldane@mweb.co.za',
    cellNumber: '082 900 8904',
    landline: '+27 11 462-6350',
    fax: '+27 11 462-2669',
    accountsEmail: 'melacc@mweb.co.za'
  };
}
