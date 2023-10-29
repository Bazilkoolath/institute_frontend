import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    private router: Router
  ) { }

  set setAccessToken(token: any) {
    localStorage.setItem('access_token', token)
  }

  set setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  set setRole(user: any) {
    localStorage.setItem('role', JSON.stringify(user))
  }

  get getUser() {
    if (localStorage.getItem('user')) {
      let data:any=localStorage.getItem('user')
      return JSON.parse(data )
    } else {
      return null
    }
  }

  get getAccessToken() {
    if (localStorage.getItem('access_token')) {
      return localStorage.getItem('access_token')
    }
    else {
      return null
    }
  }

  get getRole() {
    if (localStorage.getItem('role')) {
      let data:any=localStorage.getItem('role')
      return JSON.parse(data )
    } else {
      return null
    }
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/home'])
  }

}
