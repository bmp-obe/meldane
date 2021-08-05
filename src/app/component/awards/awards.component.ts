import { Component } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: 'awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent {
  readonly awardYears: any[] = [2018, 2019];
  readonly companyName: string = 'Meldane Property & Valuation Services';
}
