import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserStatus } from 'src/app/shared/constants/enum';
import { AddBatchComponent } from 'src/app/shared/popup/add-batch/add-batch.component';
import { AddResultComponent } from 'src/app/shared/popup/add-result/add-result.component';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-exam-result',
  templateUrl: './exam-result.component.html',
  styleUrls: ['./exam-result.component.scss']
})
export class ExamResultComponent implements OnInit {
  results:any[]=[
    {
      code:"CD84",
      name:"edfrg ygbhunjmk, rvgbhnjmk, tbynumk",
      published_date:"12/12/2023"
    },  {
      code:"CD84",
      name:"edfrg ygbhunjmk, rvgbhnjmk, tbynumk",
      published_date:"12/12/2023"
    },  {
      code:"CD84",
      name:"edfrg ygbhunjmk, rvgbhnjmk, tbynumk",
      published_date:"12/12/2023"
    }, {
      code:"CD84",
      name:"edfrg ygbhunjmk, rvgbhnjmk, tbynumk",
      published_date:"12/12/2023"
    }, {
      code:"CD84",
      name:"edfrg ygbhunjmk, rvgbhnjmk, tbynumk",
      published_date:"12/12/2023"
    },
  ]


  students_list:any[]=[]
  user_status=UserStatus
  searchText:any
  constructor(
    private _dialog:MatDialog,
    private _router:Router,
    private apiService: ApiService,
) { }

ngOnInit(): void {
  this.getStudents()
}


getStudents() {
  let $this = this
  this.apiService
    .ExecuteGet(this.apiService.baseUrl)
    .subscribe({
      next(response: any) {
        $this.students_list=response?.result?.data
      },
      error(err) {
      },
    })
}

addResult(){
    let dialogRef = this._dialog.open(AddResultComponent, {
      width: '600px',
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
      this.getStudents()
    });
    
  }

  result(id:any){
    console.log(id)
     this._router.navigateByUrl('/teacher/result-list/'+id)
  }


}
