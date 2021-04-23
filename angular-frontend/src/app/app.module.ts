import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpSendRequestComponent } from './emp-send-request/emp-send-request.component';
import { EmpUpdateOrderComponent } from './emp-update-order/emp-update-order.component';
import { EmpUnlockUserComponent } from './emp-unlock-user/emp-unlock-user.component';
import { EmpEditProfileComponent } from './emp-edit-profile/emp-edit-profile.component';
import { EmpLogoutComponent } from './emp-logout/emp-logout.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { EmpPanelComponent } from './emp-panel/emp-panel.component';
import { UserTypeComponent } from './user-type/user-type.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    EmployeeComponent,
    EmpSendRequestComponent,
    EmpUpdateOrderComponent,
    EmpUnlockUserComponent,
    EmpEditProfileComponent,
    EmpLogoutComponent,
    EmpLoginComponent,
    EmpPanelComponent,
    UserTypeComponent,
    AdminLoginComponent,
    AdminPanelComponent,
    UserLoginComponent,
    UserPanelComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
