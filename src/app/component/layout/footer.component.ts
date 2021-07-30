import { Component } from '@angular/core';

import { Data } from '../../data/data';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  readonly copyright: string = Data.COPY_RIGHT;
}
