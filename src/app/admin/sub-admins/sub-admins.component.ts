import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddAdminComponent } from 'src/app/shared/popup/add-admin/add-admin.component';

@Component({
  selector: 'app-sub-admins',
  templateUrl: './sub-admins.component.html',
  styleUrls: ['./sub-admins.component.scss']
})
export class SubAdminsComponent {

  sub_admin:any[]=[
    {
      id:1,
      name:"admin1",
      phone:"0548448",
    
      status:"active"
    },{
      id:2,
      name:"admin2",
      phone:"0548448",
     
      status:"pending"
    },{
      id:3,
      name:"admin3",
      phone:"0548448",

      status:"deactivated"
    }
  ]

  constructor(
    private _dialog:MatDialog,
    private _router:Router
  ) { }

  ngOnInit(): void {
  }
  addAdmin(){
    let dialogRef = this._dialog.open(AddAdminComponent, {
      width: '400px',
      height: '100%',
      data: {},
      position: {
        top: '0px',
        right: '0px',
      },
      // enterAnimationDuration: '500ms',
      direction: 'ltr',
      panelClass: "side-popup"
    });
  }
  teacherDetails(id:any){
    console.log(id)
     this._router.navigateByUrl('/admin'+id)
  }

}

