import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfilesService {
  profiles: Profile[] = [
    {
      id: 1,
      name: 'sahand',
      age: '30',
      gender: 'male',
      phone: '090909099',
      accessRequire: false,
    },
    {
      id: 2,
      name: 'fatemeh',
      age: '30',
      gender: 'male',
      phone: '090909099',
      accessRequire: false,
    },
    {
      id: 3,
      name: 'mohammad',
      age: '30',
      gender: 'male',
      phone: '090909099',
      accessRequire: false,
    },
    {
      id: 4,
      name: 'admin',
      age: '30',
      gender: 'female',
      phone: '090909099',
      accessRequire: true,
    },
  ];
  constructor() {}
}

export class Profile {
  id: number = -1;
  name: string = '';
  age: string = '';
  gender: string = '';
  phone: string = '';
  accessRequire: boolean = false;
}
