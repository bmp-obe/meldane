import { Component } from '@angular/core';
import { faBuilding, faHome, faIndustry, faTractor } from '@fortawesome/free-solid-svg-icons';

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
      }
    ]
  };

  readonly icons = {
    faBuilding,
    faHome,
    faIndustry,
    faTractor
  };
}
