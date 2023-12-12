import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { api_constants } from 'src/app/shared/constants/api-constants';
import { AddAnnouncementComponent } from 'src/app/shared/popup/add-announcement/add-announcement.component';
import { AddComplaintComponent } from 'src/app/shared/popup/add-complaint/add-complaint.component';
import { ApiService } from 'src/app/shared/service/api.service';
import { GeneralService } from 'src/app/shared/service/general.service';

@Component({
  selector: 'app-students-attendance',
  templateUrl: './students-attendance.component.html',
  styleUrls: ['./students-attendance.component.scss']
})
export class StudentsAttendanceComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    // dateClick: this.handleDateClick.bind(this), 
    events: [
      { title: 'Present', date: '2023-12-23' },
      { title: 'Absent', date: '2023-12-03',backgroundColor: '#FF5733' }
    ]
  };
  
eventsCalendar: any[] = [];
  constructor(
    private apiService:ApiService,
    private _general:GeneralService,
    private _dialog:MatDialog
    
  ) { }

  ngOnInit(): void {
 this.getUser()
  }
  
  

  getUser() {
    let data = this._general?.getUser
    let query = new HttpParams();
    query = query.set('id',data?._id );
    let $this = this
    this.apiService
      .ExecuteGet(this.apiService.baseUrl + api_constants.getStudentDetail,"",query)
      .subscribe({
        next(response: any) {
          $this.calendarOptions.events=response?.result?.attendance
          console.log($this.calendarOptions)
        },
        error(err:any) {
        },
      })
  }


handleDateClick(arg:any) {
  alert('date click! ' + arg.dateStr)
}
addComplaint(){
  let dialogRef = this._dialog.open(AddComplaintComponent,{
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
  dialogRef.afterClosed().subscribe(() => {
   
  });
}

}
