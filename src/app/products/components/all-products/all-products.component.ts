import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CartsService } from 'src/app/carts/services/carts.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  constructor(private _ProductsService:ProductsService ,private _CartsService:CartsService){ 

  }

productsArray:any;
AllCateArray:any;
loading:boolean = false;
show:boolean=false;
ar:any
currentRate1=1;
currentRate2=2;
currentRate3=3;
currentRate4=4;
cartProductsArray:any;
cartCount:any


  ngOnInit(): void {
    this.getCountOfcart()
    this.GetProducts();
    this.getCategoriesList();
    
    
  }
GetProducts(){
  this.loading=true;
  this._ProductsService.getAllProduct().subscribe((result)=>{this.productsArray=result;
  this.loading=false;})

}
getCategoriesList(){
  this.loading=true;
  this._ProductsService.getAllCategoriesList().subscribe((categories)=>{this.AllCateArray=categories;
    this.loading=false;})
}
active(){
  this.show=false;
}
  filterCategory(event:any){
    this.loading=true
    let value =(event.target.innerHTML).toLowerCase();;
    if(value =="all"){
this.GetProducts() 
this.loading=false
   }
    else{
    this._ProductsService.getProductByFilter(value).subscribe((res)=>this.productsArray=res)
    this.loading=false

    } 
    this.active()

  }

filterByPrice(x:any){
  this.show=true;
  this._ProductsService.getAllProduct().subscribe((result)=>{{this.productsArray=result};
  if(x.target.value==50){
    this.ar=this.productsArray.filter((i:any)=> i.price<50)
  }
  else if(x.target.value==100){
    this.ar=this.productsArray.filter((i:any)=> i.price>=50 && i.price<=100)
  }
  else if(x.target.value==500){
    this.ar=this.productsArray.filter((i:any)=> i.price>100 && i.price<=500)
  }
  else if(x.target.value==1000){
    this.ar=this.productsArray.filter((i:any)=> i.price>500 && i.price<=1000)
  }
 
 })
}
filterByRating(x:any){
  this.show=true;
  this._ProductsService.getAllProduct().subscribe((result)=>{{this.productsArray=result};
  if(x.target.value==4){
    this.ar=this.productsArray.filter((i:any)=> i.rating.rate>=4);
  }
  else if(x.target.value==3){
    this.ar=this.productsArray.filter((i:any)=> i.rating.rate>=3)
  }
  else if(x.target.value==2){
    this.ar=this.productsArray.filter((i:any)=> i.rating.rate>=2)
  }
  else if(x.target.value==1){
    this.ar=this.productsArray.filter((i:any)=> i.rating.rate>=1)
  }
 })
}
   getCountOfcart(){
    this.cartCount=0
    if("cart" in localStorage)
  {
    this.cartProductsArray=JSON.parse(localStorage.getItem("cart")!) //not hena 3shan string | null
    for(let x in this.cartProductsArray){
this.cartCount+=this.cartProductsArray[x].quantity.quantity
    this._CartsService.cartCount.next(this.cartCount)
    console.log("cart"+this._CartsService.cartCount.value  ,"qqq"+this.cartProductsArray[x].quantity.quantity)
    }
    
  }
   }
 }

