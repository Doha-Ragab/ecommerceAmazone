import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }

  getAllProduct():Observable<any>{
return this._HttpClient.get("https://fakestoreapi.com/products")
  }

getAllCategoriesList(){
  return this._HttpClient.get("https://fakestoreapi.com/products/categories")
}
getProductByFilter(keyword:string){
  return this._HttpClient.get("https://fakestoreapi.com/products/category/"+keyword)

}
getProductById(id:any){
  return this._HttpClient.get("https://fakestoreapi.com/products/"+id)

}
} 
