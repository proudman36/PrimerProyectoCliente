import { Component } from '@angular/core';
import { other } from 'src/app/products';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent {
  products = other;

}
