import { Component } from '@angular/core';

import { Data } from '../../data/data';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.scss']
})
export class HeroImageComponent {

  readonly heroImage: any = {
    name: 'Meldane Property And Valuation Services',
    header: 'Brief Intro',
    paragraph: 'Meldane valuers provide valuation reports on fixed properties. That includes residential, ' +
      'commercial, business, and industrial.',
    regNumber: '2001/028108/23',
    vatNumber: '4220195178'
  };
  readonly beeStatus: string = 'B-BBEE Status of a Level Four Contributor';

  readonly offset: number = Data.SCROLL_TO_OFFSET;
}
