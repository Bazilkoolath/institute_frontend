import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { api_constants } from 'src/app/shared/constants/api-constants';
import { UserStatus } from 'src/app/shared/constants/enum';
import { AddAnnouncementComponent } from 'src/app/shared/popup/add-announcement/add-announcement.component';
import { AddTeacherComponent } from 'src/app/shared/popup/add-teacher/add-teacher.component';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent {
  user_status=UserStatus
  announcement:any=[]
  constructor(
    private _dialog:MatDialog,
    private _router:Router,
    private apiService: ApiService,
) { }

ngOnInit(): void {
  this.getAnnouncement()
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

