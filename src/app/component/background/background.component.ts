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

  readonly paragraph: string = 'Meldane was established on 1st August 2001 by G. Wampach who was initially outsourced to value all of ' +
    'Nedcors (Nedbank, Perm and Peoples Bank) properties that were either in their possession or about to be ' +
    'sold via the sale in execution route. This soon spread to other banks and Meldane now undertakes a wide ' +
    'range of valuations for these institutions for various properties and for different purposes. Meldane covers ' +
    'the entire country and uses the services of other registered valuers in distant places to assist in its day to ' +
    'day operations. G Wampach is a hands on person who manages a busy office, interacts with his staff and ' +
    'clients daily, gives presentations and short workshops, prepares reports and is involved with the ' +
    'preparation/valuation of mostly non-residential properties for municipal general valuation purposes when ' +
    'asked to subcontract. G. Wampach is also active in the objection process for Meldane\'s clients which are ' +
    'mostly in the Johannesburg area.';
}
