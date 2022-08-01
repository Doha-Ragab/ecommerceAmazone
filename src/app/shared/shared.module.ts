import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import{HttpClientModule} from'@angular/common/http';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    NavComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
  
  ],
  exports:[
    NavComponent,
    SpinnerComponent,
    BrowserModule,
    
  ]
})
export class SharedModule { }
