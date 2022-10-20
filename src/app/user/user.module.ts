import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserRoutingModule } from './user-routing.module';
import { LayoutComponent } from '../layout/layout.component';
import { SideNavComponent } from '../layout/side-nav/side-nav.component';
import { TopNavComponent } from '../layout/top-nav/top-nav.component';
import { RegisterComponent } from './register/register.component';
import { UserInviteComponent } from './user-invite/user-invite.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserViewComponent } from './user-view/user-view.component';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule
  ],
  declarations: [LayoutComponent, TopNavComponent, SideNavComponent, RegisterComponent, UserInviteComponent, UserTableComponent, UserViewComponent]
})
export class UserModule {}
