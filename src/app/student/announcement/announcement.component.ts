import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { api_constants } from 'src/app/shared/constants/api-constants';
import { UserStatus } from 'src/app/shared/constants/enum';
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

}

