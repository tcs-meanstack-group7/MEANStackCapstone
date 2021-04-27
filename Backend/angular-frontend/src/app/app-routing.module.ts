import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { EmpPanelComponent } from './emp-panel/emp-panel.component';
import { UserComponent } from './user/user.component';
import { UserTypeComponent } from './user-type/user-type.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserPanelComponent } from './user-panel/user-panel.component';

import { MyAuthGaurd } from './myAuthguards';
import { AdminAddProdComponent } from './admin-add-prod/admin-add-prod.component';
import { AdminDeleteProdComponent } from './admin-delete-prod/admin-delete-prod.component';
import { AdminUpdateProdComponent } from './admin-update-prod/admin-update-prod.component';
import { AdminViewRequestComponent } from './admin-view-request/admin-view-request.component';


const routes: Routes = [
  {path:"\admin-login",component:AdminLoginComponent},
  {path:"\admin-panel",component:AdminPanelComponent},
  {path:"\emp-login",component:EmpLoginComponent},
  {path:"\employee-panel",component:EmpPanelComponent},
  {path:"\auser-login",component:UserLoginComponent},
  {path:"\auser-panel",component:UserPanelComponent},
  {path:"\index",component:UserTypeComponent},
  {path:"\admin-add-prod", component:AdminAddProdComponent},
  {path:"\admin-delete-prod", component:AdminDeleteProdComponent},
  {path:"\admin-update-prod", component:AdminUpdateProdComponent},
  {path:"\admin-view-request", component:AdminViewRequestComponent},
  {path:"",redirectTo:"\index",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
