import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousels',
  templateUrl: './carousels.component.html',
  styleUrls: ['./carousels.component.scss']
})
export class CarouselsComponent implements OnInit{
  constructor(){

  }
  ngOnInit(): void {
    const slider = document.getElementById("slider");
    let sliderSection = document.getElementsByClassName("slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    const btnLeft = document.getElementById("btn-left");
    const btnRight = document.getElementById("btn-right");
    slider?.insertAdjacentElement("afterbegin", sliderSectionLast );
    function moveToRight(){
      let sliderSectionFirst = document.getElementsByClassName("slider__section")[0];
      slider!.style.marginLeft = "-200%";
      slider!.style.transition = "all 0.5s";
      setTimeout(function(){
        slider!.style.transition = "none";
        slider?.insertAdjacentElement("beforeend",sliderSectionFirst);
        slider!.style.marginLeft = "-100%";
      },500);
    }
    function moveToLeft(){
      let sliderSection = document.getElementsByClassName("slider__section");
      let sliderSectionLast = sliderSection[sliderSection.length-1];
      slider!.style.marginLeft = "0%";
      slider!.style.transition = "all 0.5s";
      setTimeout(function(){
        slider!.style.transition = "none";
        slider?.insertAdjacentElement("afterbegin",sliderSectionLast);
        slider!.style.marginLeft = "-100%";
      },500)
    }
    btnRight?.addEventListener("click", rightButton =>{
      moveToRight();
    })
    btnLeft?.addEventListener("click", leftButton => {
      moveToLeft();
    })
    setInterval(function(){
      moveToRight();
    },5000)
  }
}
