import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { api_constants } from 'src/app/shared/constants/api-constants';
import { UserStatus } from 'src/app/shared/constants/enum';
import { AddAnnouncementComponent } from 'src/app/shared/popup/add-announcement/add-announcement.component';
import { AddTeacherComponent } from 'src/app/shared/popup/add-teacher/add-teacher.component';
import { DeletePopupComponent } from 'src/app/shared/popup/delete-popup/delete-popup.component';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent {
  getStudents() {
    throw new Error('Method not implemented.');
  }
  user_status=UserStatus
  announcement:any=[]
  toasterService: any;
  constructor(
    private _dialog:MatDialog,
    private _router:Router,
    private apiService: ApiService,
) { }

ngOnInit(): void {
  this.getAnnouncement()
}

deleteAnnouncement(id:any) {
  let $this = this
  let query = new HttpParams();
  query = query.set('id',id );
  const dialogRef = this._dialog.open(DeletePopupComponent, {
    width:"500px"
   });

   dialogRef.afterClosed().subscribe((result:any) => {
    if(result){
  this.apiService
  .ExecuteDelete(this.apiService.baseUrl + api_constants.deleteAnnouncement,"",query)
  .subscribe({
    next(response: any) {
      $this.toasterService.success("successfully deleted ")
      $this.getStudents()
    },
    error(err) {
    },
  })
    }
     
   });
}


getAnnouncement() {
  let $this = this
  this.apiService
    .ExecuteGet(this.apiService.baseUrl+api_constants.geAnnouncement)
    .subscribe({
      next(response: any) {
        $this.announcement=response?.result?.data
      },
      error(err) {
      },
    })
}

  addAnnouncement(){
    let dialogRef = this._dialog.open(AddAnnouncementComponent, {
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
    dialogRef.afterClosed().subscribe(result => {
      this.getAnnouncement()
    });
  }

 


}

