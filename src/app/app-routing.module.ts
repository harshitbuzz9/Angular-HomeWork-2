import { EmployeeComponent } from './employee/employee.component';
import { ProductsComponent } from './products/products.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 

const routes: Routes = [
  {path:'app-reactive-form',component:ReactiveFormComponent},
  
  {path:'app-products', component:ProductsComponent},
  {path:'app-employee', component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
