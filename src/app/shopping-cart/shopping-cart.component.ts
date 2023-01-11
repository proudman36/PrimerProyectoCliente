import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit{

  
  constructor(){}
  
  ngOnInit(): void {
    
    

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
    if(document.readyState == 'loading'){
      document.addEventListener('DOMContentLoaded',ready)
    }else{
      ready()
    }
    function ready(){
      let removeCartButtons = document.getElementsByClassName('remove');
      console.log(removeCartButtons);
      for(let i = 0;i<removeCartButtons.length;i++){
        let button = removeCartButtons[i];
        button.addEventListener('click',removeCartItem)
      }
      let quantityInputs = document.getElementsByClassName('cart-quantity');
      for (let i = 0; i<removeCartButtons.length; i++){
        let input = quantityInputs[i];
        input.addEventListener('change',quantityChanged);
      }
      let addCart = document.getElementsByClassName('add-to-cart');
      for(let i = 0; i<addCart.length;i++){
        let button = addCart[i];
        button.addEventListener('click', addCartClicked);
      }
      document.getElementsByClassName('btn-buy')[0].addEventListener('click',buyButtonClicked)
    }
    function buyButtonClicked(){
      let cartContent = document.getElementsByClassName('cart-content')[0];
      while(cartContent.hasChildNodes()){
        cartContent!.removeChild(cartContent.firstChild!)
      }
    }
    function removeCartItem(event:any){
      let buttonClicked = event.target;
      buttonClicked.parentElement.remove();
      updateTotal();
    }
    function quantityChanged(event:any){
      let input = event.target;
      if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
      }
      updateTotal(); 
    }
    function addCartClicked(event:any){
      let button = event.target;
      let shopProducts = button.parentElement;
      let title = shopProducts.getElementsByClassName('product-title')[0].innerText;
      let price = shopProducts.getElementsByClassName('product-price')[0].innerText;
      let image = shopProducts.getElementsByClassName('image')[0].src;
      addProuductToCart(title, price,image)
    }
    function addProuductToCart(title:string,price:number,image:any){
      let cartShopBox = document.createElement('div')
      cartShopBox.classList.add('cart-box')
      let cartItems = document.getElementsByClassName('cart-content')[0]
      let cartItemsName = cartItems.getElementsByClassName('cart-product-title') as any
      for (let i = 0; i<cartItemsName.length;i++){
        if(cartItemsName[i].innerText == title){
        alert('Ya has añadido este ítem al carrito.')
        return
        }
      }

    let cartBoxContent = ` 
    <img src="${image}" alt="" class='cart-img'>
    <div class="detail-board">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">$${price}</div>
        <input type="number" value="0" class = 'cart-quantity'>
    </div>
    <i class="fa-solid fa-trash remove"></i>
    `
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox)
let img = cartShopBox.getElementsByClassName('cart-img')[0] as HTMLInputElement
img.style.width = '100px'
img.style.height = '100px'
cartShopBox.getElementsByClassName('remove')[0].addEventListener('click',removeCartItem)
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged)
    }

    function updateTotal(){
      let cartContent = document.getElementsByClassName('cart-content')[0];
      let cartBoxes = cartContent.getElementsByClassName('cart-box');
      let total = 0;
      for(let i = 0; i<cartBoxes.length; i++){
        let cartBox= cartBoxes[i];
        let priceElement = cartBox.getElementsByClassName('cart-price')[0]  as HTMLElement;
        let quantityElement = cartBox.getElementsByClassName('cart-quantity')[0] as HTMLInputElement;
        let price = parseFloat(priceElement.innerText.replace('$',''))
        let quantity = quantityElement.value
        total = total + (price * +quantity)
      }
        total = Math.round(total*100) / 100;
        let priceNow = document.getElementsByClassName('total-price')[0] as HTMLInputElement;
        priceNow.innerText = '$' + total;
      
    }
  
  }
}
