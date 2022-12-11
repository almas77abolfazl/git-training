import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProfileComponent } from './profile/profile.component';
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
      },
    ],
  },
];

export const AdminRoutes = RouterModule.forChild(routes);
