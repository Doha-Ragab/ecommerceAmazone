import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartsService { 

  // cartProductsArray:any;
  cartCount=new BehaviorSubject(0)
  // xa:any=0;

  constructor() {
    // this.getProducts()
    // this.getCartCount()
    
   }

  //  getProducts(){
  //   if("cart" in localStorage)
  //   {
  //     this.cartProductsArray=JSON.parse(localStorage.getItem("cart")!) //not hena 3shan string | null
  //   }
  // }
 
  // getCartCount(){
  //   this.cartCount=0
  //   for(let x in this.cartProductsArray){
  //     this.xa+=this.cartProductsArray[x].quantity.quantity
  //     this.cartCount=new BehaviorSubject(this.xa) 
  //   }
  //   console.log(this.cartCount.value)

  // }

  
}
 