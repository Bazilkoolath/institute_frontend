import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { api_constants } from 'src/app/shared/constants/api-constants';
import { UserStatus } from 'src/app/shared/constants/enum';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-student-complaint',
  templateUrl: './student-complaint.component.html',
  styleUrls: ['./student-complaint.component.scss']
})
export class StudentComplaintComponent {
  user_status=UserStatus
  complaint:any=[]
  constructor(
    private _dialog:MatDialog,
    private _router:Router,
    private apiService: ApiService,
) { }

ngOnInit(): void {
  this.getComplaints()
}


getComplaints() {
  let $this = this
  this.apiService
    .ExecuteGet(this.apiService.baseUrl+api_constants.getComplaintLst)
    .subscribe({
      next(response: any) {
        $this.complaint=response?.result?.data
      },
      error(err) {
      },
    })
}
}
