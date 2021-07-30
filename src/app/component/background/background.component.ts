import { Component } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {
  readonly background: any = {
    header: 'Background',
    firstParagraph: 'Meldane is a registered cc and was established in 2001 by Gary Wampach to provide Property Valuations and ' +
      'other related professional services to the private and public sector, property owners, property financing and other ' +
      'establishments or individuals.',
    secondParagraph: 'The company offers a national network of contracted qualified valuers, who are committed to achieve a short ' +
      '"turnaround" time while maintaining a record of accuracy with all instructions.'
  };
}
