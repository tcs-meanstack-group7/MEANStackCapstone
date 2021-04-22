import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { EmpPanelComponent } from './emp-panel/emp-panel.component';
import { UserComponent } from './user/user.component';
import { UserTypeComponent } from './user-type/user-type.component';
import { MyAuthGaurd } from './myAuthguards';


const routes: Routes = [
  {path:"\admin",component:AdminComponent},
  {path:"\emp-login",component:EmpLoginComponent},
  {path:"\employee-panel",component:EmpPanelComponent},
  {path:"\auser",component:UserComponent},
  {path:"\index",component:UserTypeComponent},
  {path:"",redirectTo:"\index",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
