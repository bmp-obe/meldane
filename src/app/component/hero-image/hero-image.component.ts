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
    paragraph: 'Meldane was established on 1st August 2001 to provide quality and accurate valuation reports on fixed ' +
      'property. As well as creating an advisory service to both the private and public sector. Valuations are conducted ' +
      'on residential, commercial (business), industrial, agricultural and municipal properties.',
    regNumber: '2001/028108/23',
    vatNumber: '4220195178'
  };
  readonly beeStatus: string = 'B-BBEE Status of a Level Four Contributor';

  readonly offset: number = Data.SCROLL_TO_OFFSET;
}
