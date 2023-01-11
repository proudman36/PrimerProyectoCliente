import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(){

  }
  ngOnInit(): void {
    let bar_menu = document.getElementsByClassName("bars__menu")[0];
    let line1_bars = document.getElementsByClassName("line1__bars-menu")[0];
    let line2_bars = document.getElementsByClassName("line2__bars-menu")[0];
    let line3_bars = document.getElementsByClassName("line3__bars-menu")[0];
    let horizontal_menu = document.getElementsByClassName("horizontal-menu")[0];
    bar_menu.addEventListener("click", animateMenu =>{
      line1_bars.classList.toggle("active");
      line2_bars.classList.toggle("active");
      line3_bars.classList.toggle("active");
      horizontal_menu.classList.toggle("active");
    })
    let cart = document.getElementsByClassName("shopping_cart")[0];
    let exit = document.getElementsByClassName("exit")[0];
    let container = document.getElementsByClassName("cart_container")[0];
    console.log(container);
    cart.addEventListener("click", cartActive=>{
      container.classList.add("active");
    })
    exit.addEventListener("click", cartClose =>{
      container.classList.remove("active");
    })
  }
}
