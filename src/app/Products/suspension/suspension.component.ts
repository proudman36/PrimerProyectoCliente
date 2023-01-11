import { Component, OnInit } from '@angular/core';
import { suspension } from 'src/app/products';

@Component({
  selector: 'app-suspension',
  templateUrl: './suspension.component.html',
  styleUrls: ['./suspension.component.scss']
})
export class SuspensionComponent implements OnInit {
  products = suspension;
  constructor(){}
 ngOnInit(): void {
   
 }
}
