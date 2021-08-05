import { Component } from '@angular/core';
import { faBuilding, faHome, faIndustry, faTractor, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.scss']
})
export class SectorsComponent {
  readonly sectors: any = {
    header: 'Sectors',
    items: [
      {
        header: 'Residential',
        icon: 'faHome'
      },
      {
        header: 'Commercial',
        icon: 'faBuilding'
      },
      {
        header: 'Industrial',
        icon: 'faIndustry'
      },
      {
        header: 'Agricultural',
        icon: 'faTractor'
      },
      {
        header: 'Municipal',
        subLabel: '(Objections and Appeals)',
        icon: 'faExclamationCircle'
      }
    ]
  };

  readonly icons = {
    faBuilding,
    faHome,
    faIndustry,
    faTractor,
    faExclamationCircle
  };
}
