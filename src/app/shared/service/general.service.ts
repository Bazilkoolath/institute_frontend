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
    localStorage.setItem('cc_access_token', token)
  }

  set setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user))
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
    if (localStorage.getItem('cc_access_token')) {
      return localStorage.getItem('cc_access_token')
    }
    else {
      return null
    }
  }

  set setTokenExpiryTime(token: any) {
    localStorage.setItem('tokenExpiryTime', token)
  }

  get getTokenExpiryTime(){
    if (localStorage.getItem('tokenExpiryTime')) {
      return localStorage.getItem('tokenExpiryTime')
    }
    else {
      return null
    }
  }

  get getSigninWith() {
    if (localStorage.getItem('amplify-signin-with-hostedUI')) {
      let data:any=localStorage.getItem('amplify-signin-with-hostedUI')
      return JSON.parse(data )
    } else {
      return null
    }
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/home'])
  }






  set setCart(data: any) {
    localStorage.setItem('cart', JSON.stringify(data))
  }

  get getCart() {
    if (localStorage.getItem('cart')) {
      let data:any=localStorage.getItem('cart')
      return JSON.parse(data )
    } else {
      return null
    }
  }
}
