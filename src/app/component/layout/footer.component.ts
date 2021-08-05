import { Component } from '@angular/core';

import { Data } from '../../data/data';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  readonly copyright: string = Data.COPY_RIGHT;
  readonly firstLine: string = 'Tax Clearance Certificate - Good Standing';
  readonly secondLine: string = 'Income Tax - 9338159149';
  readonly thirdLine: string = 'VAT - 4220195178';
  readonly fourthLine: string = 'POPIA certification in progress';

  readonly email = 'meldane@mweb.co.za';
  readonly accountsEmail = 'melacc@mweb.co.za';
  readonly cellNumber = '082 900 8904';
  readonly landline = '+27 11 462-6350';
}
