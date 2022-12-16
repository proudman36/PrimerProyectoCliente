import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-brands',
  templateUrl: './carousel-brands.component.html',
  styleUrls: ['./carousel-brands.component.scss']
})
export class CarouselBrandsComponent {
  constructor(){

  }
  ngOnInit(): void {
    const slider = document.getElementById("slider-brands");
    let sliderSection = document.getElementsByClassName("slider__section-brands");
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    const btnLeft = document.getElementById("btn-left");
    const btnRight = document.getElementById("btn-right");
    slider?.insertAdjacentElement("afterbegin", sliderSectionLast );
    function moveToRight(){
      let sliderSectionFirst = document.getElementsByClassName("slider__section-brands")[0];
      slider!.style.marginLeft = "-200%";
      slider!.style.transition = "all 0.9s";
      setTimeout(function(){
        slider!.style.transition = "none";
        slider?.insertAdjacentElement("beforeend",sliderSectionFirst);
        slider!.style.marginLeft = "-100%";
      },500);
    }
    function moveToLeft(){
      let sliderSection = document.getElementsByClassName("slider__section-brands");
      let sliderSectionLast = sliderSection[sliderSection.length-1];
      slider!.style.marginLeft = "0%";
      slider!.style.transition = "all 0.9s";
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
    },3000)
  }
}
