import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileGuard } from './profile/profile.guard';
import { ProfileResolver } from './profile/profile.resolver';
import { ProfilesComponent } from './profiles/profiles.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: ProfilesComponent,
      },
      {
        path: 'profile/:userId',
        component: ProfileComponent,
        resolve: { profile: ProfileResolver },
        canActivate: [ProfileGuard],
      },
    ],
  },
];

export const AdminRoutes = RouterModule.forChild(routes);
