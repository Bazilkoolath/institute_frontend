import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { api_constants } from 'src/app/shared/constants/api-constants';
import { UserStatus } from 'src/app/shared/constants/enum';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-exam-result',
  templateUrl: './exam-result.component.html',
  styleUrls: ['./exam-result.component.scss']
})
export class ExamResultComponent implements OnInit {
  results:any[]=[]
  user_status=UserStatus
  searchText:any
  constructor(
    private _router:Router,
    private apiService: ApiService,
) { }

ngOnInit(): void {
  this.getStudents()
}


getStudents() {
  let $this = this
  this.apiService
    .ExecuteGet(this.apiService.baseUrl + api_constants.getExamList)
    .subscribe({
      next(response: any) {
        $this.results=response?.result?.data
      },
      error(err) {
      },
    })
}

detail(){
  this._router.navigateByUrl("student/result-details")
}

}
