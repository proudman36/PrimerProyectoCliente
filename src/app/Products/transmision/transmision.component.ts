import { Component } from '@angular/core';
import { transmision } from 'src/app/products';

@Component({
  selector: 'app-transmision',
  templateUrl: './transmision.component.html',
  styleUrls: ['./transmision.component.scss']
})
export class TransmisionComponent {
  products = transmision;
}
