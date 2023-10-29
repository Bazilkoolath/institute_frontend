import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/shared/service/general.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: any={
    name:"sahal saman",
    email:"sahal@gmail.com",
    img:"https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png"
  }
  is_login: any
  user_email: any
  constructor(
    private _router: Router,
    private _dialog: MatDialog,
    private _general: GeneralService
  ) { }

  ngOnInit(): void {
    this.user_email = this._general?.getUser?.contact?.email
  }


  profileDetil(type?: boolean) {
    // let dialogRef = this._dialog.open(UserProfileComponent, {
    //   width: '400px',
    //   height: '100%',
    //   data: {
    //     edit: type
    //   },
    //   position: {
    //     top: '0px',
    //     right: '0px',
    //   },
    //   enterAnimationDuration: '500ms',
    //   direction: 'ltr',
    //   panelClass: "side-popup"
    // });
  }

  logout() {
    this._router.navigateByUrl("")
  }

  navigation(url: any) {
    this._router.navigateByUrl(url)
  }

  nameProfileImg(name: string) {
    let spaceIndex = name.indexOf(" ")
    if (spaceIndex > 1) {
      return name.slice(0, 1).toUpperCase() + name.slice(spaceIndex + 1, spaceIndex + 2).toUpperCase() || name.slice(1, 2).toUpperCase()
    } else {
      return name.slice(0, 2).toUpperCase()
    }
  }

  onToggle(){

  }

}
