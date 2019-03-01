import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './components/customers/customer.component';
const routes: Routes = [
  { path: 'customers', component: CustomerComponent },
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: '**', component: CustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
