import { Component } from '@angular/core';

@Component({
  selector: 'app-gary',
  templateUrl: 'gary.component.html',
  styleUrls: ['./gary.component.scss']
})
export class GaryComponent {
  readonly title: string = 'THE DIRECTOR';
  readonly name: string = 'Gary Wampach';
  readonly jobTitle: string = 'Professional Registered Valuer';

  readonly memberships: any[] = [
    { entity: 'SA Council for the Property Valuers Profession', regNumber: 'Registration Number 144/9' },
    { entity: 'Member of the SA Institute of Valuers', regNumber: '' }
  ];

  readonly jobs: any[] = [{
    time: '2001 - Current',
    company: 'Meldane Property',
    title: 'Managing Director and Professional Valuer'
  }, {
    time: '1993 - 2001',
    company: 'Nedbank Limited',
    title: 'Head Valuer/National Manager of Valuation Department For Home Loans'
  }, {
    time: '1982 - 1993',
    company: 'Randburg Town Council',
    title: 'Valuer'
  }, {
    time: '1972 - 1982',
    company: 'East London Municipality',
    title: 'Valuation Assistant'
  }];

  readonly workExperienceDescription: string = 'Over 45 years of experience in most aspects of the property industry';

  readonly experiences: string[] = [
    'Residential, commercial, industrial, and agricultural valuations',
    'Valuations for municipal purposes (non-residential properties) - Rating Purposes',
    'Valuation of property for expropriation purposes',
    'Valuation for acquisition purposes (various properties)',
    'Valuation (market and forced sale) for various banks for security and insolvency purposes',
    'Preparation of reports for valuation matters that await court procedures and to appear as an expert witness'
  ];
}
