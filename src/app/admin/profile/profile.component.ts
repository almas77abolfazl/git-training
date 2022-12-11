import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../profiles.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  profile: Profile | null = null;
  constructor(route: ActivatedRoute, private _location: Location) {
    this.profile = route.snapshot.data['profile'];
  }

  backClicked() {
    this._location.back();
  }
}
