import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutes } from './admin.routing';
import { ProfileComponent } from './profile/profile.component';
import { ProfilesComponent } from './profiles/profiles.component';

@NgModule({
  imports: [CommonModule, AdminRoutes],
  declarations: [AdminComponent, ProfileComponent, ProfilesComponent],
})
export class AdminModule {}
