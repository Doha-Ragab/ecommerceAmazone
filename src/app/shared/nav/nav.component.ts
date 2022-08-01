import { Component, OnInit } from '@angular/core';
import { CartsService } from 'src/app/carts/services/carts.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  cartCount:any;
  constructor(private _CartsService:CartsService) {
    

   }

  ngOnInit(): void {
   
    this._CartsService.cartCount.subscribe((x:any)=>{this.cartCount=x})
  
  }
 
}
