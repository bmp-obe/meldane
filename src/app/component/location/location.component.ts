import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: 'location.component.html'
})
export class LocationComponent  {

  header: string = 'National Footprint';
  firstPara = 'Meldane is represented in all the major metropolitan areas as well as some of the outlying areas. ' +
    'Meldane HQ is a standalone office in Olivedale, Johannesburg and is situated within easy driving time to most ' +
    'of the Northern Suburbs';
  provinces: string[] = ['Eastern Cape', 'Freestate', 'KwaZulu-Natal', 'Gauteng', 'Limpopo', 'Mpumalanga', 'Western Cape'];
}
