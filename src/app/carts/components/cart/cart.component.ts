import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProductsArray:any=[]
  lengthOfcartArray:any;
  totalPrice:number=0;
  cartCount:number=0;
  
  constructor(private _CartsService:CartsService) { }

  ngOnInit(): void {
this.getProducts()
this.getLengthOfcartArray()
this.getCartCount()
 }

 getProducts(){
  if("cart" in localStorage)
  {
    this.cartProductsArray=JSON.parse(localStorage.getItem("cart")!) //not hena 3shan string | null
  }
  this.getCartTotalPrice()
}

getLengthOfcartArray(){
  this.getProducts()
  this.lengthOfcartArray=0
  if("cart" in localStorage)
  {
    this.cartProductsArray=JSON.parse(localStorage.getItem("cart")!) //not hena 3shan string | null
    for(let x in this.cartProductsArray){
      this.lengthOfcartArray+=this.cartProductsArray[x].quantity.quantity
      console.log(this.lengthOfcartArray)
    }
    
  }
}

getCartTotalPrice(){
this.totalPrice=0;
for(let x in this.cartProductsArray){
  this.totalPrice +=this.cartProductsArray[x].price *this.cartProductsArray[x].quantity.quantity
}
}
getCartCount(){
  this.cartCount=0;
  for(let x in this.cartProductsArray){
    this.cartCount+=this.cartProductsArray[x].quantity.quantity;
    this._CartsService.cartCount.next(this.cartCount)
  }
  }

addAmount(i:number){
  this.cartProductsArray[i].quantity.quantity++;
  localStorage.setItem("cart" , JSON.stringify(this.cartProductsArray));
  this.getCartTotalPrice();
  this.getCartCount();
}
minsAmount(i:number){
  this.cartProductsArray[i].quantity.quantity--;
  localStorage.setItem("cart" , JSON.stringify(this.cartProductsArray))
  if(this.cartProductsArray[i].quantity.quantity<0){
    this.cartProductsArray[i].quantity.quantity=0
  }
  this.getCartTotalPrice();
  this.getCartCount();
}

changeAmount(){
  localStorage.setItem("cart" , JSON.stringify(this.cartProductsArray));
}

deleteProduct(i:number){
  this.cartProductsArray.splice(i,1);
  localStorage.setItem("cart" , JSON.stringify(this.cartProductsArray));
  this.getLengthOfcartArray();
  this.getCartTotalPrice();
  this.getCartCount();


}
clearShoppingCart(){
  this.cartProductsArray =[];
  localStorage.setItem("cart" , JSON.stringify(this.cartProductsArray));
  this.getLengthOfcartArray();
  this.getCartTotalPrice();
  this.getCartCount();
  this._CartsService.cartCount.next(0)

}
}
