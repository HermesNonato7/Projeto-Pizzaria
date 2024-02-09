import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './pages/customer/customer.component';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    CustomerComponent,
    PizzaComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [CustomerComponent, PizzaComponent]  
})
export class HomeModule { }
