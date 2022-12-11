import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [
    {
      username: 'admin',
      password: '123',
      isAdmin: true,
    },
    {
      username: 'abolfazl',
      password: '123',
      isAdmin: false,
    },
  ];

  currentUser!: User | null;

  constructor(private router: Router) {}

  login(username: string, password: string) {
    const user = this.users.find(
      (user) => user.username === username && user.password === password
    );
    if (!!user) {
      this.router.navigate(['/admin']);
      this.currentUser = user;
    } else alert('You have entered an invalid username or password');
  }

  logout() {
    this.currentUser = null;
    this.router.navigate(['']);
  }
}

export interface User {
  username: string;
  password: string;
  isAdmin: boolean;
}
