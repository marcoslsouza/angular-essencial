import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { ProductCrudComponent } from './product-crud/product-crud.component'
import { ViewsRoutingModule } from './views-routing.module';

@NgModule({
  declarations: [HomeComponent, ProductCrudComponent],
  imports: [
    CommonModule,
    MatCardModule,
    ViewsRoutingModule
  ],
  exports: [
    HomeComponent,
    ProductCrudComponent
  ],
})
export class ViewsModule { }
