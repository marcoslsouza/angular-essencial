import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from '../components/product/product-create/product-create.component';
import { ProductCrudComponent } from './product-crud/product-crud.component';

const routes: Routes = [{ 
    path: 'products', component: ProductCrudComponent
  },
  {
    path: 'products/create', component: ProductCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }