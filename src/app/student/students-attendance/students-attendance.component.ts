import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-students-attendance',
  templateUrl: './students-attendance.component.html',
  styleUrls: ['./students-attendance.component.css']
})
export class StudentsAttendanceComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    // dateClick: this.handleDateClick.bind(this), 
    events: [
      { title: 'Present', date: '2023-09-23' },
      { title: 'event 2', date: '2023-09-23' }
    ]
  };
  
  constructor() { }

  ngOnInit(): void {
  }


handleDateClick(arg:any) {
  alert('date click! ' + arg.dateStr)
}
}
