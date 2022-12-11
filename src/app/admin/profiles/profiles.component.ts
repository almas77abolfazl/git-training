import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
})
export class ProfilesComponent implements OnInit {
  profilesIds = this.profilesService.profiles.map((x) => x.id);
  constructor(
    private router: Router,
    private profilesService: ProfilesService
  ) {}

  ngOnInit() {}

  showProfile(userId: number) {
    this.router.navigate(['admin/profile', userId]);
  }
}
