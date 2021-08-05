import { Component, HostListener } from '@angular/core';

import { headerAnimation } from '../../animation/header-scroll.animation';

import { Data } from '../../data/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [headerAnimation]
})
export class HeaderComponent {

  readonly header: any = {
    companyName: 'Meldane Property And Valuation Services CC',
    companyNameShort: 'Meldane',
    items: [
      { name: 'Background', scrollTo: 'background' },
      { name: 'Sectors', scrollTo: 'sectors' },
      { name: 'Services', scrollTo: 'services' },
      { name: 'Locations', scrollTo: 'locations' },
      { name: 'Clients', scrollTo: 'clients' },
      { name: 'Contact', scrollTo: 'contact',  },
      { name: 'Awards', scrollTo: 'awards', customClasses: 'mr-sm-0' }
    ]
  };
  readonly scrollToOffset: number = Data.SCROLL_TO_OFFSET;
  shouldAnimate = true;
  state = 'large';
  slogan = 'Minimising Risk, Adding Value';

  adjustLines(): void {
    this.shouldAnimate = !this.shouldAnimate;
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll(): void {
    let scrollPosition: number;

    /*
    _window.path[1] = Chrome
    _window.view = Explorer & Edge
    _window.pageYOffset = Firefox
    _window.pageY = Extra allowance for other browsers
     */

    // @ts-ignore
    if (window.path !== undefined) {
      // @ts-ignore
      scrollPosition = window.path[1].pageYOffset;
    } else if (window.pageYOffset !== undefined) {
      scrollPosition = window.pageYOffset;
      // @ts-ignore
    } else if (window.pageY !== undefined) {
      // @ts-ignore
      scrollPosition = window.pageY;
      // @ts-ignore
    } else if (window.view !== undefined) {
      // @ts-ignore
      scrollPosition = window.view.pageYOffset;
    }

    if (scrollPosition > 30) {
      this.state = 'small';
    } else {
      this.state = 'large';
    }
  }

}
