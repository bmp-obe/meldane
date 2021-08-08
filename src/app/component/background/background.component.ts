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

  readonly paragraph: string = 'Meldane was established on 1st August 2001 by Gary Wampach who was initially outsourced to value all of ' +
    'Nedcor\'s (Nedbank, Perm and People\'s Bank) properties that were either in their possession or about to be sold via the sale in' +
    ' execution route. This soon spread to other financial institutions and Meldane now undertakes a wide range of valuations for a number of ' +
    'clients for various properties and different purposes. Meldane covers the entire country and uses the services of other registered ' +
    'valuers in distant places to assist in its day to day operations. Gary also has extensive knowledge of municipal valuations roles' +
    ' and is active in the objections and appeals process';
}
