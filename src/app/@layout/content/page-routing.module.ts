import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/@pages/dashboard/dashboard.component';
import { AdminComponent } from 'src/app/@pages/admin/admin.component';
import { ManageComponent } from 'src/app/@pages/manage/manage.component';
import { ProductComponent } from 'src/app/@pages/product/product.component';
import { CartComponent } from 'src/app/@pages/cart/cart.component';
import { AuthGuard } from 'src/app/@services/auth.guard';
import { AllproductComponent } from 'src/app/@pages/allproduct/allproduct.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'admin', component: AdminComponent},
  { path: 'manage', component: ManageComponent, canActivate: [AuthGuard]},
  { path: 'product', component: ProductComponent},
  { path: 'allproduct', component: AllproductComponent},
  { path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
