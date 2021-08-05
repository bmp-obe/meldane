import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: 'clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  title = 'Clients';
  clients: any[] = [
    {
      name: 'Al Baraka Bank', imgName: 'albaraka.png'
    },
    {
      name: 'Amka Products', imgName: 'amka.png'
    },
    {
      name: 'Chamdor Faktry Sales', imgName: 'chamdor.webp'
    },
    {
      name: 'Nedbank', imgName: 'nedbank.png'
    },
    {
      name: 'RWL Attorneys', imgName: 'rwl.png'
    }
  ];
}
