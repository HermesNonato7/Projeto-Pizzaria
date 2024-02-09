import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { PedidoRoutingModule } from './pedido-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PedidoRoutingModule
  ]
})
export class PedidoModule { }
