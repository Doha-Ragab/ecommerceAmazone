import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { CartsService } from 'src/app/carts/services/carts.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
id:any;
data:any=[];
loading:boolean=false;
cartProductsArray:any=[];
amount:number=1;
r:any=[];
added=false
cartCount=0


  constructor(private route:ActivatedRoute , private _ProductsService:ProductsService, private _CartsService:CartsService) {
    this.id=this.route.snapshot.paramMap.get("id")
   }

  ngOnInit(): void {
    this.getProduct()
  }
getProduct(){
  this.loading=true;
  this._ProductsService.getProductById(this.id).subscribe(res=>{
  this.loading=false;
  this.data=res})
}

addToCart(x:any,quantity:any){
  if("cart" in localStorage)
  {
    this.cartProductsArray=JSON.parse(localStorage.getItem("cart")!) //not hena 3shan string | null
    let exist=this.cartProductsArray.find((item:any) => item.id == x.id) 
   if(exist){
    alert("Product is already in your cart")
   }
   else{
   
    quantity={quantity:this.amount}
    x.quantity=quantity
    this.cartProductsArray.push(x)
this.cartCount=this._CartsService.cartCount.value + quantity.quantity
    this._CartsService.cartCount.next(this.cartCount)
  
    localStorage.setItem("cart" , JSON.stringify(this.cartProductsArray))

     }
  }
  else{
    quantity={quantity:this.amount}
    x.quantity=quantity
        this.cartProductsArray.push(x)
        this.cartCount=this._CartsService.cartCount.value + quantity.quantity
        this._CartsService.cartCount.next(this.cartCount)
    localStorage.setItem("cart" , JSON.stringify(this.cartProductsArray))
  }
}

}
