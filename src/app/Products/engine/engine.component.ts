import { Component, OnInit } from '@angular/core';
import {engine} from 'src/app/products'
@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.scss']
})
export class EngineComponent implements OnInit{
  products = engine;
  
  constructor(){
  }
  ngOnInit(): void {
  }

}
