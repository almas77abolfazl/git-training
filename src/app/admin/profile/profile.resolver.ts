import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Profile, ProfilesService } from '../profiles.service';

@Injectable({ providedIn: 'root' })
export class ProfileResolver implements Resolve<Profile> {
  constructor(private profileService: ProfilesService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<Profile> | Promise<Profile> | Profile {
    const profile = this.profileService.profiles.find(
      (x) => x.id == route?.params['userId']
    );
    return profile || new Profile();
  }
}
